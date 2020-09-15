const api = require('./api.js');

async function generateMarkdown(data) {
  const gitHubData = await api.getUser(data.username);
  let licenseType;
  switch (data.license) {
    case 'MIT':
      licenseType = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Apache License 2.0':
      licenseType = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GNU GPL v3':
      licenseType = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'Mozilla Public License 2.0':
      licenseType = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;
    case 'Boost Software License 1.0':
      licenseType = '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
      break;
  }
  return `
# ${data.title}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [License](#license)
* [Contributing](#contributing)
* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage
Run ${data.installation}.

## Tests

To run tests, run the following command:
\`\`\`
${data.tests}
\`\`\`

##License
${licenseType}

## Contributing

${data.contributing}

## Questions

If you have any questions about the repo, open an issue or contact ${data.username} at ${gitHubData.email}. ${data.repo}

![](${gitHubData.avatar_url});
`;
}

module.exports = generateMarkdown;
