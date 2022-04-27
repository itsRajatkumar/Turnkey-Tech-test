var cookieParser = require('cookie-parser');
const express = require('express');
const app = express()
const {registerUser, loginUser, getuser} = require('./routers/SignupLogin') 
const Authenticate = require('./middleware/authenticate') 


app.use(cookieParser());


app.post('/register',(req, res)=>{
  registerUser(req,res)
  
})

app.post('/login', (req, res)=>{
  loginUser(req, res)
  
})
app.get('/getuser', Authenticate, (req, res)=>{
  getuser(req, res)
  
})




module.exports = app;
