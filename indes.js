const express = require('express');
const mongoose = require('mongoose');
const userlogin = require('./routes/Userlogin');
const bodyParser = require('body-parser');

const app = express();


// middlewere
app.use(bodyParser.json());

app.use('/',userlogin)





mongoose.connect(`mongodb://127.0.0.1:27017/loginform`)
.then(() =>{
    app.listen(8080);
    console.log("connetion done")
})
.catch(err =>console.error(err))




