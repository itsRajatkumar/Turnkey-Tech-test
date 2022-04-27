const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const router = require('./routes')
const db = require('./DB/db')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(bodyParser.json())
app.use(router);

require('dotenv').config();

db()

app.listen(process.env.PORTSERVER, ()=>{
    console.log("running", process.env.PORTSERVER)
})
