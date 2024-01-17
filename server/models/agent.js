const mongoose = require("mongoose")
require("dotenv").config();



const AgentSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
    },
  
    email: {
      type: String,
      required: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      ],
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      minlength: 10,
    },
    description :{
        type :String,
        required :true,
        minlength :20,
    },
    active :{
        type :Boolean,
        default :true,
    },
    
    
  } ,{
        timestamps :true
  });

  module.exports = mongoose.model("Agent", AgentSchema);
