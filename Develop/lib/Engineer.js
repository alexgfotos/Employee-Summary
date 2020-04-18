// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(_name, _id, _email, _github, _role) {
        super(_name, _id, _email)
        this.github = _github;
        this.role = _role
    }
    getRole() {
        return 'Engineer'
    }

    getGithub() {
        return this.github
    }
}



module.exports = Engineer 