function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![github license](https://img.shields.io/badge/license-${license}-blue)`;
  } else {
    return "";
  }
}

function renderLicenseLink(license) {
  if (license === "MIT") {
    return "![License: MIT](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache-2.0") {
    return "![License: Apache](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GPL-3.0") {
    return "![License: GPL 3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)";
  } else if (license === "BSD-3") {
    return "![License: BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)";
  } else {
    return "";
  }
}

function renderLicenseSection(license) {
  if (license !== "none") {
    return `## Licensing 
            -- ${license}`;
  } else {
    return "";
  }
}

//This is the Markdown for the exported README.md//
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.Licensing)}

## Description 
  * ${data.Description}

## Installation Instructions 
  * ${data.InstallationInstructions}

## Usage 
  * ${data.Usage}

${renderLicenseSection(data.Licensing)}
${renderLicenseLink(data.Licensing)}

## Contributions 
    ${data.Contributing}

## Testing 
    ${data.Testing}

`;
}

module.exports = generateMarkdown;
