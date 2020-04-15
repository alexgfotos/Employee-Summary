// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Engineer extends Employee{
    constructor (_gitName, _gitHub ){   
        this.gitName = _gitName;
        this.gitHub = _gitHub;
    }
    getRole(){
        return 'Engineer'
    }
}



module.exports = Engineer 