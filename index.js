const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = [
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  },
  {
    type: 'input',
    name: 'title',
    message: "What is your project's name?"
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project'
  },
  {
    type: 'input',
    name: 'license',
    message: 'What is your full name?'
  },
  {
    type: 'input',
    name: 'year',
    message: 'What is year is it?'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What command should be run to install dependencies?'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What command should be run to run tests?'
  },
  {
    type: 'input',
    name: 'repo',
    message: 'What does the user need to know about using the repo?'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What does the user need to know about contributing to the repo?',
    default: 'Make a pull request.'
  }
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) throw err;
  })
}

function init() {
  inquirer
    .prompt(questions)
    .then( answers => {
      writeToFile('readme1.md', generateMarkdown(answers))
    });
}

init();
