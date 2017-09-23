const mongoose = require("mongoose");

let orgSchema = mongoose.Schema({
  name :{
    type: String,
    required: true
  },
  npo_number :{
    type: String,
    required: true
  },
  contact_number :{
    type: String
  },
  email :{
    type: String
  }
});

var Organisation = module.exports = mongoose.model("Organisation", orgSchema);

module.exports.getOrganisation = function(callback, limit){
  Organisation.find(callback).limit(limit);
}
