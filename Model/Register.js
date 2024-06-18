const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema({
          name: String,
          email:String,
          mobile:String,
          goals: String,
          kidsage: String
});

module.exports = mongoose.model('Register', RegisterSchema);