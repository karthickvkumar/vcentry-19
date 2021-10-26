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

app.get("/api/user/list", (request, response) => {

  const query = `SELECT * FROM employee_information`;

  connection.query(query, (error, result) => {
    if(error){
      response.status(500).send(error);
      return;
    }

    response.status(200).send(result);

  });
});

app.post("/api/user/create", (request, response) => {

  const firstName = request.body.first_name;
  const lastName = request.body.last_name;
  const designation = request.body.designation;
  const age = request.body.age;
  const location = request.body.location;
  const salary = request.body.salary;

  const query = `INSERT INTO employee_information (first_name, last_name, designation,age, location, salary) VALUES ('${firstName}', '${lastName}', '${designation}', ${age}, '${location}', ${salary})`;

  connection.query(query, (error, result) => {
    if(error){
      response.status(500).send(error);
      return;
    }

    response.status(200).send({
      message : "Successfully Created a New User Profile"
    })
  })

});





const port = process.env.PORT || 8080;
http.listen(port, () => {
  console.log("Node JS Server is running on Port 8080");
})
