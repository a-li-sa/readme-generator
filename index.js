const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your full name?'
  },
  {
    type: 'input',
    name: 'year',
    message: 'What year is it?'
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?'
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
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['MIT License', 'Apache License 2.0', 'GNU GPL v3', 'Mozilla Public License 2.0', 'Boost Software License 1.0']
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What command should be run to install dependencies? If left blank, the default input is the following:',
    default: 'npm i'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using the repo? If left blank, the default input is the following:',
    default: 'Run npm i.'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What command should be run to run tests? If left blank, the default input is the following:',
    default: 'npm test'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What does the user need to know about contributing to the repo? If left blank, the default input is the following:',
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
    .then( async answers => {
      const generatedAnswers = await generateMarkdown(answers)
      writeToFile('readme1.md', generatedAnswers)
    });
}

init();
