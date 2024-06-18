const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Task = require('./Model/Task');
const Register = require('./Model/Register');

const PORT = 9000;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://taskapp:taskapp@websitewaitlist.xccqkrl.mongodb.net/?retryWrites=true&w=majority&appName=websitewaitlist")

app.get("/gettask", async (req,res) => {
    console.log("Request Recieved");
    const data = await Task.find({});
    console.log(data);
    res.json(data);
})

app.post("/newtask", async (req,res)=>{
    try {
      
       const {username, task,symbol,position} = req.body;
     
  
const newTask = new Task({
    symbol:symbol,
    username:username,
    position:position,
    Description:task,
    Status:"Doing",
    date:Date("<YYYY-mm-dd>")
   });
   
   const savedTask = await newTask.save();

   console.log(savedTask);
   res.status(201).json(savedTask);
        
    } catch (error) {
        console.log(error);
        res.status(500).statusMessage("Somehting happend wrong");
    }
});


app.post("/register", async (req,res)=>{
    try {
      
       const {name,email,goals,mobile,kidsage} = req.body;
     
  
const newregister = new Register({
    name: name,
    email: email,
    goals: goals,
    kidsage: kidsage,
    mobile: mobile
   });
   
   const savedRegister = await newregister.save();

   console.log(savedRegister);
   res.status(201).json(savedRegister);
        
    } catch (error) {
        console.log(error);
        res.status(500).statusMessage("Somehting happend wrong");
    }
});

app.listen(PORT,()=>{
    console.log("app is listening on PORT: " + PORT);
})
