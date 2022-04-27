const mongoose = require('mongoose');
// var MongoClient = require('mongodb').MongoClient;
// const dotenv = require('dotenv')


const db = () =>{
    try{
        mongoose.connect(process.env.MONGO_URI)
        .then(res => console.log("DataBAse Connected"))
        .catch((err)=> console.error(err))

    }   
    catch(err){
        console.log(err)
    }
}


module.exports=db;