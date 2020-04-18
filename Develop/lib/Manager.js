// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor(_name, _id, _email, _officeNumber, _role) {
        
        super(_name, _id, _email)
        this.officeNumber = _officeNumber;
        this.role = _role

    }
    getRole() {
        return 'Manager'
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}



module.exports = Manager 

