var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
  name: {
    type: String,
  },

  email: {
    type: String,
    required: true,
    unique: true

  },

  contact: {
    type: String,
    required: false 

  },

  password:{
    type: String,
    required: true 

  }


});




module.exports = mongoose.model('User', SomeModelSchema );

