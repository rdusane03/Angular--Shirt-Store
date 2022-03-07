const express= require('express');
const mongoose= require('mongoose');
const cors = require("cors");

const app=express();

var corsOptions = {
    origin: "http://localhost:4200"
  };
  app.use(cors(corsOptions)); 

            
const port=9000;
const url= "mongodb://localhost:27017/hotel";

mongoose.connect(url,{useNewUrlParser: true});
const con= mongoose.connection;
app.use(express.json());
try{
    con.on('open',() => {
        console.log('connected');
    })
}catch(error)
{
    console.log("Error: "+error);
}

const shirtrouter= require("./routes/shirts");
app.use('/shirts',shirtrouter)

module.exports = app.listen(port, () =>{
    console.log("server started")
})