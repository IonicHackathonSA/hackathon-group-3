const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

Item = require("./models/organisations.js");

const app = express();

app.use(bodyParser.json());

/* connect to mongoose */
mongoose.connect('mongodb://localhost/hackathon_db');
const db = mongoose.connection;

app.get('/api/Organisations', (req, res) =>{
  Item.getOrganisation((err, organisations) =>{
    if(err){
      throw err;
    }
    res.json(organisations);
  });
});

app.listen(3000);
console.log("API running on port 3000");
