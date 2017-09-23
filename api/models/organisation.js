const mongoose = require("mongoose");
const db = require("./config/dbconnection.js");

let orgSchema = mongoose.Schema({
  name :{
    type: String,
    required: true
  },
  npo_number :{
    type: String,
    required: true
  }
  contact_number :{
    type: String
  }
});

var Orgnanisation = module.exports = mongoose.model("Orgnanisation", orgSchema);
