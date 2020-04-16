// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Intern extends Employee{
    constructor (_name, _id, _email, _school ){ 
        super(_name, _id, _email)     
        this.school = _school;
    }
    getRole(){
        return 'Intern'
    }

    getSchool(){
        return this.school
    }
}



module.exports = Intern