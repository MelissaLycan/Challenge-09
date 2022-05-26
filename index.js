//Requirements//
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
//Content Question Array//
const questions = [
  {
    type: "input",
    message: "What is the name of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Describe your application.",
    name: "Description",
  },
  {
    type: "input",
    message: "Are there any installation instructions?",
    name: "InstallationInstructions",
  },
  {
    type: "input",
    message: "How do you use the app?",
    name: "Usage",
  },
  {
    type: "list",
    message: "What is the licensing required?",
    choices: ["MIT", "Apache-2.0", "GPL-3.0", "BSD-3", "none"],
    name: "Licensing",
  },
  {
    type: "input",
    message: "How can people contribute to the code?",
    name: "Contributing",
  },
  {
    type: "input",
    message: "How can you test the code?",
    name: "Testing",
    default: "npm test",
  },
];

function writeToFile(fileName, response) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), response);
}

//Initialize the APP//
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
    writeToFile(
      "/generated_README/README.md",
      generateMarkdown({ ...response })
    );
  });
}

// Call//
init();
