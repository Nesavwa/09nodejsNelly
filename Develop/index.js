// TODO: Include packages needed for this application

const fs = require('fs');
const Choices = require("inquirer/lib/objects/choices");
const Prompt = require("inquirer/lib/prompts/base");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
  { 
    
    type: "input",
    message: "What is your Project title (required)?",
    name: "title",
  },

    { 
      
    type: "input",
    message: "Describe you Project?",
    name: "title",
  },

  { 
      
    type: 'checkbox',
    name: 'built with',
    message: 'Please select the technologies that your application was built with.',
    choices: ['HTML', 'CSS', 'SASS', 'JavaScript', 'Node.js', 'Express.js'],
  },
  
  { 
      
    type: "input",
    message: "What are the steps required to to install you project?",
        name: "title"},


  { 
      
    type: "input",
    message: "Please provide user instructions?",
    name: "title",
  },

  { 
      
    type: "input",
    message: "What are the guidelines for contributing to your Project?",
    name: "title",
  },

  { 
  
    type: "input",
    message: "How do you test your Project?",
    name: "title",
  },

  { 
  
    type: "list",
    message: "Select licence",
    name: "License",
    Choices: 
    "MIt",
    "GVL-GPL 3.0",
    "Apache 2.0",
    "BDS 3",
    "none",
  
  },

  { 
  
    type: "input",
    message: "What's the contact information for any further questions?",
    name: "contact info",
  },

  { 
  
    type: "input",
    message: "What's the contact information for any further questions?",
    name: "contact info",
  },

  { 
  
    type: "input",
    message: "What's you git hub username",
    name: "username",
  },

  
  { 
  
    type: "input",
    message: "Please provive you email address",
    name: "Email",
  },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {


},

// TODO: Create a function to initialize app
function init() {

  prompt(questions).then(answer => {
      const response = generateMarkdown(answers);
      console.log(answers)
  })
}

// Function call to initialize app
init();
