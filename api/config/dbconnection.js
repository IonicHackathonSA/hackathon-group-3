const mongoose = require("mongoose");

mongoose.connect("mongod://localhost/hackathon_db");
const db = mongoose.connection;
