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
    message: "What is the name of your project?"
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
    message: "Add a link to your deployed project here."
},
{
    type: "input",
    name: "technologies",
    message: "What technologies or languages were used to create this project? (Please separate each item with a comma)"
},
{
    type: "input",
    name: "requirements",
    message: "List any project dependencies here."
},
{
    type: "input",
    name: "installation",
    message: "Add instructions on how to set up your project for use locally."
},
{
    type: "input",
    name: "usage",
    message: "Add examples of hwow your project can be used here. Screenshots, code examples and demos are helpful here."
},
{
    type: "checkbox",
    name: "license",
    message: "Select your project license.",
    options: []
},
{
    type: "input",
    name: "contributing",
    message: "Explain how users can contribute to your code here."
},
{
    type: "input",
    name: "tests",
    message: "Explain how users can ."
},
{
    type: "input",
    name: "questions",
    message: "Explain how users can contribute to your code here."
},
{
    type: "input",
    name: "credits",
    message: "This is where you can acknowledge any help you had with your project."
}
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
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
