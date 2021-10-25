const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const http = require('http').createServer(app);

app.use(bodyParser.json());
app.use(express.json());
app.use(cors({
  credentials : true,
  origin : "*"
}));

// Local XAMPP Server Configuration
const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'vcentry_19'
})

// Remotemysql Server Configuration
/*const connection = mysql.createConnection({
  host : 'remotemysql.com',
  user : 'ReSO99coxI',
  password : 'zeDSccx2jQ',
  database : 'ReSO99coxI',
  port : 3306
})*/

connection.connect((error) => {
  if(error){
    throw error;
  }
  else{
    console.log("MYSQL Database is Connected");
  }
})







const port = process.env.PORT || 8080;
http.listen(port, () => {
  console.log("Node JS Server is running on Port 8080");
})
