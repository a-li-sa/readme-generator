const api = require('./api.js');

async function generateMarkdown(data) {
  const gitHubData = await api.getUser(data.username);
  let installation;
  let tests;
  if (data.installation === 'npm i') {
    installation = `To install necessary dependencies, run the following command:
\`\`\`
${data.installation}
\`\`\`
 `;
  } else {
    installation = data.installation;
  }
  if (data.tests === 'npm test') {
    tests = `To run tests, run the following command:
\`\`\`
${data.tests}
\`\`\`
 `;
  } else {
    tests = data.tests;
  }
  let licenseType;
  let licenseURL;
  switch (data.license) {
    case 'MIT License':
      licenseType = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      licenseURL = 'https://opensource.org/licenses/MIT';
      break;
    case 'Apache License 2.0':
      licenseType = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      licenseURL = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'GNU GPL v3':
      licenseType = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      licenseURL = 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    case 'Mozilla Public License 2.0':
      licenseType = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      licenseURL = 'https://opensource.org/licenses/MPL-2.0';
      break;
    case 'Boost Software License 1.0':
      licenseType = '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
      licenseURL = 'https://www.boost.org/LICENSE_1_0.txt';
      break;
  }
  return `
# ${data.title}

${licenseType}

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Contributing](#contributing)
* [Questions](#questions)
* [License](#license)

## Description

${data.description}

## Installation

${installation}

## Usage

${data.usage}

## Tests

${tests}

## Contributing

${data.contributing}

## Questions

If you have any questions about the repo, open an issue or contact [${data.username}](https://github.com/${data.username}) at ${gitHubData.email}.

[![GitHub followers](https://img.shields.io/github/followers/${data.username}.svg?style=social&label=Follow&maxAge=2592000)](https://github.com/${data.username}?tab=followers)

![](${gitHubData.avatar_url})

## License

Copyright ${data.year} ${data.name}

Licensed under the [${data.license}](${licenseURL})
`;
}

module.exports = generateMarkdown;
