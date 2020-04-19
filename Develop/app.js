const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
const employees = [];

// Write code to use inquirer to gather information about the development team members,
function validateName(name){
    return name !== '' || "Input is required!";
}

function validateNum(age)
{
   var isValid = !_.isNaN(parseFloat(age));
   return isValid || "Age should be a number!";}

async function mainPrompt() {
    
    const answers = await inquirer.prompt([
        {
            type: "input",
            message: "Who what is your name?",
            name: "name",
            validate: validateName
        },
        {
            type: "input",
            message: "What is your ID #?",
            name: "id",
            validate: validateName
        },
        {
            type: "input",
            message: "What is you email?",
            name: "email",
            validate: validateName
        },
        {
            type: "list",
            message: "What is your role?",
            name: "role",
            choices: [
                "manager",
                "engineer",
                "intern"
            ]

        }
    ])

    console.log(answers)
    // and to create objects for each team member (using the correct classes as blueprints!)
    if (answers.role === "manager") {
        const managerAnswers = await managerPrompt();
        const manager = new Manager(answers.name, answers.id, answers.email, managerAnswers.office, answers.role)

        employees.push(manager);
        continuePrompt();

    }

    if (answers.role === "engineer") {
        const engineerAnswers = await engineerPrompt();
        const engineer = new Engineer(answers.name, answers.id, answers.email, engineerAnswers.github, answers.role)

        employees.push(engineer);

        continuePrompt()

    }

    if (answers.role === "intern") {
        const internAnswers = await internPrompt();
        const intern = new Intern(answers.name, answers.id, answers.email, internAnswers.school, answers.role)

        employees.push(intern);

        continuePrompt()

    }

}


async function managerPrompt() {
    const answers = await inquirer.prompt([
        {
            type: "input",
            message: "What is your office number?",
            name: "office",
            validate: validateName
        }

    ])

    return answers
}

async function engineerPrompt() {
    const answers = await inquirer.prompt([
        {
            type: "input",
            message: "What is your Github username?",
            name: "github",
            validate: validateName
        }

    ])

    return answers
}

async function internPrompt() {
    const answers = await inquirer.prompt([
        {
            type: "input",
            message: "Which school do you attend?",
            name: "school",
            validate: validateName
        }

    ])

    return answers
}

async function continuePrompt() {
    const answers = await inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add another employee?",
            name: "continue",
            choices: ["yes", "no"]
        }

    ])
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
    if (answers.continue === "no") {
        console.log("byyyyye")
        console.log(employees);
        team = render(employees);
        fs.writeFile(outputPath, team, "utf-8", () => {console.log("file written")});
    }
    else {
        mainPrompt()
    }
}


mainPrompt()



// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
