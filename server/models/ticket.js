const mongoose = require("mongoose")
require("dotenv").config();



const TicketSchema = new mongoose.Schema({
    topic: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
    },
    description :{
        type :String,
        required :true,
        minlength :20,
    },
    status :{
        type : String,
        enum : ['new','assigned','resolved'],
        default : 'new',
    },
    severity :{
        type : String,
        enum : ['low','medium','high']
    },
    type :{
        type :String,
        required :true,

    },
    resolvedOn :{
        type :Date,
    },

  } ,{
        timestamps :true
  });

  module.exports = mongoose.model("Ticket", TicketSchema);
