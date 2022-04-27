const jwt = require('jsonwebtoken')
const userModel = require("../schemas/Schema");

const Authenticate = async (req,res,next) =>{

    try{
        const token = (req.headers['authorization']).split(' ')[1]
        const varifytoken = jwt.verify(token,process.env.JWT_KEY);
        const rootUser = await userModel.findOne({email:varifytoken.email})
        if(!rootUser){
            throw new Error("User not found")
        }else{
            req.Email = rootUser.email
            next();

        }
        
    }catch(err){
        console.log(err);
        res.status(401).send("Unauthorized: No token")
    }
}

module.exports = Authenticate