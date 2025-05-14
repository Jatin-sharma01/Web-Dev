const express = require("express");
const app = express();
const env = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
env.config();

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_URL}/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`, 
  {
      useNewUrlParser: true, 
      useUnifiedTopology: true,
      
  
  }
  ).then((data) =>{
      console.log("db connected", data.connection.host);
  }).catch((error) => {
    console.log(error);
  })
  app.use(cors());

let student = [
    {name: "jatin", rollno:"10", DOB: "29 November 2005"},
    {name: "pippo", rollno:"11", DOB: "9 November 2005"},
    {name: "om", rollno:"12", DOB: "8 November 2005"},
    {name: "gareeb", rollno:"13", DOB: "7 November 2005"},
    {name: "rushi", rollno:"14", DOB: "6 November 2005"},
    {name: "pk", rollno:"15", DOB: "4 November 2005"},
    {name: "btech", rollno:"16", DOB: "5 November 2005"},
    {name: "pippo2", rollno:"17", DOB: "3 November 2005"},
    {name: "ajit", rollno:"18", DOB: "2 November 2005"},
    {name: "random", rollno:"19", DOB: "1 November 2005"},
]
app.get('/', (req, res) => {
  res.send(student);
});

const port = process.env.PORT
app.listen(port,() => {
    console.log("Server Listening",port)
})
