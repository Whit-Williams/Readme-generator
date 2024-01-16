function addLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/License-${license}-yellowgreen.svg)`;
  }
  return "";
};

// function to generate markdown for README
function generateMarkdown(data) {
  function addBulletPoints(values) {
    return values.split("#").map(value => `* ${value.trim()}`).join('\n');
  }
  const formattedLicense = data.license.toString().replace(/_/g, ' ');
  return `# ${data.title}
  ${addLicenseBadge(data.license)}
  ## Description
  ${data.description}
  #### [You can visit the deployed application by clicking here.](${data.link})
  ![Screenshot image of application](${data.screenshot})
## Table of Contents
  * [Technologies](#technologies)
  * [Features](#features)
  * [How to Use This Application](#how-to-use-this-application)
    * [Requirements](#requirements)
    * [Installation](#installation)
    * [Usage](#usage) 
  * [License](#license)
  * [How to Contribute](#how-to-contribute)
  * [Testing](#testing)
  * [Questions](#questions)
  * [Credits](#credits)

## Technologies
${addBulletPoints(data.technologies)}
## Features
${addBulletPoints(data.features)}
## How to Use This Application:
 ### Requirements
  ${data.requirements}
 ### Installation
  ${data.installation}
 ### Usage
  ${data.usage}
## License
License used for ths project: ${formattedLicense}.

For further informaton on license types, please visit https://choosealicense.com/appendix/.
## How to Contribute
${data.contributing}
## Testing
${data.tests}
## Questions
For any queries or questions, please email me [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.owner}](https://github.com/${data.owner}) to get in touch.
## Credits
${addBulletPoints(data.credits)}
`;
}

module.exports = generateMarkdown;
