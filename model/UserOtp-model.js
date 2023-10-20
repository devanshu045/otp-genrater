const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    phonenumber:{
        type: 'number',
        required: true,
        unique: true
    },
    password: {
      type: 'string',
      required: true,
    },
    opt:{
        type:'number',
        required: true,
        unique:true
    },
    createAt:{type: 'date', default: Date.now(), index:{expred:300}},
})

const usermodel = mongoose.model('',userSchema);

module.exports = usermodel;