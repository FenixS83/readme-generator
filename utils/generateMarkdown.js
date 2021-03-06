// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if ((license) === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
  }

  if ((license)==="MIT") {
    return "![GitHub:MIT](https://img.shields.io/github/license/FenixS83/readme-generator?style=flat-square)";
  }

  if ((license)==="GPLv3") {
    return "![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)"
  }

  if ((license)==="Unlicense") {
    return "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
  }


  var licenseIcon = "";
  switch (license) {
    case "Apache":
      licenseIcon = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
      break;
    case "MIT":
      licenseIcon = "![GitHub:MIT](https://img.shields.io/github/license/FenixS83/readme-generator?style=flat-square)";
      break;
    case "GPLv3 License":
      licenseIcon= "![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)";
      break;
    case "Unlicense":
      licenseIcon="![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
      break;
  }
  return licenseIcon;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var licenseURL = "";
  switch (license) {
    case "Apache":
      licenseURL=`[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case "MIT":
      licenseURL=`![GitHub](https://img.shields.io/github/license/FenixS83/readme-generator?style=flat-square)`;
      break;
    case "GPLv3":
      licenseURL=`[GPLv3 License](https://opensource.org/licenses/)`;
      break;
    case"Unlicense":
      licenseURL=`[$(license)](http://unlicense.org/)`;
      break;
  }
  return licenseURL;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This projet uses ${license}.`, renderLicenseBadge;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}
  
  Click the link below to visit my deployed page.

  <!-- [URL](${data.site}) -->

  ## Table of Contents
  
  * [Goals](#goals)

  * [Usage](#usage) 

  * [Installation](#installation)  

  * [Test](#test)

  * [Problems](#problems)

  * [Visualization](#visualization)

  * [Acknowledgements](#acknowledgements)

  * [Contributions](#contributions)

  * [Resources](#resources)

  * [License](#license) 

  * [Contact](#contact) 

  
  ## Goals

  ${data.goals}

  ## Motivation

  ${data.motivation}

  ## Usage

  ${data.usage}

  ## Installation
  
  ${data.install}  

  ## Test

  ${data.test}

  ## Problems

  ${data.problems}

  ## Visualization

  placeholder to add images or other media

  ## Acknowledgements

  ${data.credits}

  ## Contributions

  ${data.contribution}

  ## Resources
 
  ${data.resources}

  ## License

  ${renderLicenseSection(data.license)}

  ${renderLicenseBadge(data.license)}

  This projet uses ${data.license}. 
  
  The link to the License can be found here (${renderLicenseLink(data.license)})

  ## Contact
  
  GitHub Username: ${data.github} [@${data.github}](https://github.com/${data.github})

  ${data.contact}


`;
}

module.exports = generateMarkdown;
