const userModel = require("../schemas/Schema");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var cookieParser = require('cookie-parser');


async function registerUser(req, res) {
    try {
        const { password, email, name, contact } = req.body

        if (!email || typeof email !== "string") {
            return res.status(404).json({ status: "error", error: "Invalid Email" });
        }
        if (!name || typeof name !== "string") {
            return res.json({ status: "error", error: "Invalid Namename" });
        }
        if (!contact || typeof contact !== "string") {
            return res.json({ status: "error", error: "Invalid mobile" });
        }
        if (!password || typeof password !== "string") {
            return res.json({ status: "error", error: "Invalid Password" });
        }
        if (password.length < 6) {
            return res.json({ status: "error", error: "Password to small" });
        }
        const user = new userModel({
            password,
            email, 
            name,
            contact,
        });


                var salt = await bcrypt.genSalt(parseInt(process.env.SALT_ROUND))
                bcrypt.hash(password, salt, async function (err, hash) {
                user.password = hash;
                const newUser = await user.save().then((data) => {
                        console.log(data);
                        res.status(200).send("ok");
                    })
                    .catch((e) => {
                        res.status(400).send('User Already Registered');
                    });
                });
                // });
                
            } catch (error) {
               console.log(error);
               res.status(400).send('User Already Registered');
            }
}

async function loginUser(req, res){
    try {
        const { email, password } = req.body;
        if (!email || typeof email !== "string") {
            return res.json({ status: "error", error: "Invalid Credentials" });
        }
        if (!password || typeof password !== "string") {
            return res.json({ status: "error", error: "Invalid Credentials" });
        }
        if (password.length < 6) {
            return res.json({ status: "error", error: "Invalid Credentials" });
        }

        console.log( email, password );
        userModel.findOne(
            {email:email},
            (err, posts) => {
                bcrypt.compare(password, posts.password, (err, ress) => {
                    if (ress) {
                        var jwtoken = jwt.sign({ email }, process.env.JWT_KEY) 
                        console.log(jwtoken);
                        res.status(200).send({
                            jwtoken:jwtoken
                        });
                    } else {
                        res.send("Email Or Password Incorrect");
                    }
                });
            }
        );
    } catch (err) {
        console.log(err);
    }
}

async function getuser(req, res){
    try{
        userModel.findOne(
            {email:req.Email},
            (err, data) => {
                res.status(200).send({
                    email:data.email,
                    name:data.name,
                    contact:data.contact
                });
            })
    }catch(err){
        console.log(err)
    }
}


module.exports = { registerUser, loginUser , getuser};
