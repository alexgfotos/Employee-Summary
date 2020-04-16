const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");

const questions = inquirer.prompt([{
    type: "input",
    message: "Who is your Manager?",
    name: "manager"
},
{
    type: "input",
    message: "What is their ID #?",
    name: "managerId"
},
{
    type: "input",
    message: "What is their email?",
    name: "managerEmail"
},
{
    type: "input",
    message: "What is their office#?",
    name: "managerOffice"
},
{
    type: "confirm",
    message: "Would you like to add an engineer?",
    name: "addEngineer"
},
{
    type: "input",
    message: "What is the engineer's name?",
    name: "engineer"
},
{
    type: "input",
    message: "What is their ID #?",
    name: "engineerId"
},
{
    type: "input",
    message: "What is their email?",
    name: "engineerEmail"
},
{
    type: "input",
    message: "What is their Github username?",
    name: "engineerGithub"
},
{
    type: "confirm",
    message: "Would you like to add another engineer?",
    name: "anotherEngineer"
},
{
    type: "confirm",
    message: "Would you like to add an intern?",
    name: "addIntern"
},
{
    type: "input",
    message: "What is the intern's name?",
    name: "intern"
},
{
    type: "input",
    message: "What is their ID #?",
    name: "internId"
},
{
    type: "input",
    message: "What is their email?",
    name: "internEmail"
},
{
    type: "input",
    message: "What school are they from?",
    name: "internSchool"
},
{
    type: "confirm",
    message: "Would you like to add another intern?",
    name: "anotherIntern"
}
])


// and to create objects for each team member (using the correct classes as blueprints!)

questions.then(function(prompt) {
    const manager = new Manager (prompt.manager, prompt.managerId, prompt.managerEmail, prompt.managerOffice);

    const engineer = new Engineer(prompt.engineer, prompt.engineerId, prompt.engineerEmail, prompt.engineerGithub);

    const intern = new Intern(prompt.intern, prompt.internId, prompt.internEmail, prompt.internSchool)

console.log(manager);
console.log(engineer);
console.log(intern);
})