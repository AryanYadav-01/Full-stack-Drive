const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username:{
    type:String,
  required:true,
  lowercase:true,
  trim:true,
  unique:true,
  minlength:[3,"username must be at least 3 charcters long"]
  },
  email:{
    type:String,
    required:true,
    trim:true,
    lowercase:true,
    unique:true,
    minlength:[13,'password must be at least 13 characters long']


  },
  password:{
    type: String,
    required:true,
    trim:true,
    minlength:[5,'password must be a t least 5 characters long']
  }
})

const user = mongoose.model('user',userSchema)

module.exports = user; 