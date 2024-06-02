const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
       symbol: String,
        username: String, 
        position: String,
        Description: String,
        date: String,
        Status: String,
    
});

module.exports = mongoose.model('Tasks', TaskSchema);