// TODO: Include packages needed for this application
const fs = require(`fs`);
const path = require(`path`);
const inquirer = require(`inquirer`);
const generateMarkdown = require(`./utils/generateMarkdown`)

//List of questions to ask

const questions = [

    //Project Title
{
    type: `input`,
    name: `title`,
    message: `What is the title of your project?`,
},

    //Description of Project
{
    type: `input`,
    name: `description`,
    message: `Please enter project description...`,
},

    //Project license
{
    type: `checkbox`,
    name: `license`,
    message: `How is this project licensed?`,
    choices: [`Apache`, `MIT`, `GPLv3 License`, `Unlicense`],
},

    //Project Goals
{
    type: `input`,
    name: `goals`,
    message: `What goals did you have when building your project?`,
},

    //Project Motivation
{
    type: `input`,
    name: `motivation`,
    message: `What motivated you to build this project?`,
},

    //Installation instructions
{
    type: `input`,
    name: `install`,
    message: `What are your projects installation instructions?`,
    default: `npm -i`,
},

    //Project`s inteded use
{
    type: `input`,
    name: `usage`,
    message: `What is your project's intended use?`,
},

    //Project Technologies
{
    type: `input`,
    name: `resources`,
    message: `What resources does your project use?`,
},
    //Problems faced
{
    type: `input`,
    name: `problems`,
    message: `What problems did you face when designing this project?`,
},

    //Project test commands
{
    type: `input`,
    name: `test`,
    message: `What commands should be run to test your project?`,
    default: `npm run test`,
},

    //Project credits
{
    type: `input`,
    name: `credits`,
    message: `Who deserves credit on this project?`,
},

    //Project contributions
{
    type: `input`,
    name: `contribution`,
    message: `How does someone contribute to this project?`,
},

    //Contact email
{
    type: `input`,
    name: `contact`,
    message: `What is your email address?`,
},

    //GitHub username
{
    type: `input`,
    name: `github`,
    message: `What is your GitHub username?`,
},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(response => {
        console.log(response);
        writeToFile(`exampleREADME.md`, generateMarkdown(response))
    });
}


// Function call to initialize app
init();
