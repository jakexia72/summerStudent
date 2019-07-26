const express = require('express');
const app = express();
const port = process.env.PORT || 7000;
const bodyParser = require('body-parser');

const path = __dirname;


app.use(express.static('./public'));


app.get("/", (req, res) => {
  res.sendFile("hello")
})

app.listen(port, () => {
  console.log("server is up and running on port " + port);
})

class Address {
  constructor(mailingAddress1, mailingAddress2, city, province, country) {
    this.mailingAddress1 = mailingAddress1
    this.mailingAddress2 = mailingAddress2
    this.city = city
    this.province = province
    this.country = country
  }
}

class Eduction {
  constructor(university, program, gpa, yearOfStudy){
    this.university = university
    this.program = program
    this.gpa = gpa
    this.yearOfStudy = yearOfStudy
  }
}

class WorkDetails{
  constructor(supervisor, hireStatus){
    this.supervisor = supervisor
    this.hireStatus = hireStatus
  }
}

class User {
  constructor(id, firstName, lastName, email, education, workDetails, address, resume) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.education = education
    this.workDetails = workDetails
    this.address = address
    this.resume = resume
  }
}

var userArray = []
