const api = require('./api.js');

async function generateMarkdown(data) {
  const gitHubData = await api.getUser(data.username);

  return `
# ${data.title}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage
Run ${data.installation}.

##License
Copyright (c) ${data.year} ${data.license}

## Contributing

${data.contributing}

## Tests

To run tests, run the following command:
\`\`\`
${data.tests}
\`\`\`

## Questions
If you have any questions about the repo, open an issue or contact ${data.username} at ${gitHubData.email}.

![](${gitHubData.avatar_url});
`;
}

module.exports = generateMarkdown;
