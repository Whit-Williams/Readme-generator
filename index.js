// access to file system
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
{
    type: "input",
    name: "title",
    message: "Welcome to the README generator. Please enter the name of your project."
},
{
    type: "input",
    name: "description",
    message: "Please describe the functionality of your project."
},
{
    type: "input",
    name: "screenshot",
    message: "Please insert the relative path for the screenshot image."
},
{
    type: "input",
    name: "link",
    message: "Add a URL link to your deployed project here."
},
{
    type: "input",
    name: "technologies",
    message: "What technologies or languages were used to create this project? (To create a list, please use hashtag to create new bullet point)"
},
{
    type: "input",
    name: "features",
    message: "List the project features you would like to highlight here. (To create a list, please use hashtag to create new bullet point)"
},
{
    type: "input",
    name: "requirements",
    message: "Specify any project dependencies here."
},
{
    type: "input",
    name: "installation",
    message: "Add instructions on how to set up your project for use locally."
},
{
    type: "input",
    name: "usage",
    message: "Add examples of how your project can be used here. (Screenshots, code examples and demos are helpful here)"
},
{
    type: "checkbox",
    name: "license",
    message: "Select your project license.",
    choices: ["none", "MPL_2.0", "Apache_2.0", "MIT", "BSL_1.0", "GPLv3", "Unlicense", "CCO_1.0"]
},
{
    type: "input",
    name: "contributing",
    message: "Explain how users can contribute to your code here."
},
{
    type: "input",
    name: "tests",
    message: "Explain how users can test the application."
},
{
     type: "input",
     name: "owner",
     message: "Please provide your GitHub username.",
},
{
     type: "input",
     name: "email",
     message: "Please provide a valid email address.",
},
{
    type: "input",
    name: "credits",
    message: "This is where you can acknowledge any help you had with your project. (To create a list, please use hashtag to create new bullet point)"
}
];

// function to write README file
function writeToFile(fileName, data) {
    const fileDir = path.join(process.cwd(), "output");

    if (!fs.existsSync(fileDir)) {
        fs.mkdirSync(fileDir);
    }

    return fs.writeFileSync(path.join(fileDir, fileName), data);
}

// function to initialize program
function init() {
inquirer.prompt(questions).then((responses) => {
console.log("Creating README file, please wait...");

writeToFile("../output/README.md", generateMarkdown({...responses}));
});
}

// function call to initialize program
init();
