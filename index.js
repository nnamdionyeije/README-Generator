// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description of your project.',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please enter the installation instructions for your application',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please enter the usage information for your application',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Pleas enter any important information about contributing to this repository',
  },
  {
    type: 'input',
    name: 'test',
    message: 'What test instructions should the user know about?',
  },
  {
    type: 'list',
    name: 'license',
    message: ['APACHE 2.0', 'BSD 3', 'GPL 3.0', 'MIT', 'None'],
  },
  {
    type: 'input',
    name: 'username',
    message: 'Please enter your GitHub username',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
