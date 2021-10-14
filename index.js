// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

//List of questions to ask

const questions = [

    //Project Title
{
    type: "input",
    name: "title",
    message: "What is the title of your project?",
},

    //Description of Project
{
    type: "input",
    name: "description",
    message: "Please enter project description...",
},

    //Project license
{
    type: "checkbox",
    name: "license",
    message: "How is this project licensed?",
    choices: ["Apache", "MIT", "GPLv3 License", "Unlicense"],
},

    //Project Goals
{
    type: "input",
    name: "goals",
    message: "What goals did you have when building your project?",
},

    //Project Motivation
{
    type: "input",
    name: "motivation",
    message: "What motivated you to build this project?",
},

    //Installation instructions
{
    type: "input",
    name: "install",
    message: "What are your projects installation instructions?",
    default: "npm -i",
},

    //Project's inteded use
{
    type: "input",
    name: "tests",
    message: "What command should be run to run tests?",
},

{
    type: "input",
    name: "repo",
    message: "What does the user need to know about using the repo?",
},

{
    type: "input",
    name: "contributing",
    message: "What does the user need to know about contributing to the repo?",
},


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return false.writeFileSync(path.join(process.cwd(), ))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        writeToFile()
    })
}

async function init() {
    let answers = await inquirer.prompt(questions)
    console.log(answers);
    writeToFile();
}


// Function call to initialize app
init();
