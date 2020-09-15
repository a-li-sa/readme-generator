<div align="center">

# README Generator

Built with Node.js and ES6+

URL of the GitHub repository: https://github.com/a-li-sa/readme-generator

</div>

## Table of Contents 

* [Description](#description)
  * [Acceptance Criteria](#acceptance-criteria)
* [Installation](#installation)
* [Usage](#usage)
* [Built With](#built-with)
* [Credits](#credits)
* [License](#license)

## Description

>When creating an open source project on GitHub, it is important to have a quality README with information about the app--what is the app for, how to use the app, how to install it, how to report issues, and how to make contributions so that other developers are more likely to use and contribute to the success of the project.

This command-line application is for developers who need to easily put together a good README for a new project. This application dynamically generates a README.md from a user's input. It allows for quick and easy generation of a project README to get started quickly, and it allows for project creators to spend more time working on finishing the project and less time creating a good README.

### Acceptance Criteria 

GIVEN the developer has a GitHub profile and a repository

- [x] WHEN prompted for the developer's GitHub username and repo specific information THEN a README for the repo is generated

## Installation

To install necessary dependencies (axios and inquirer), run the following command:
```
npm i
```

## Usage

The application will be invoked with the following command:

```
node index.js
```
The user will be prompted for their GitHub username, which will be used to make a call to the GitHub API to retrieve their email and profile image. They will then be prompted with questions about their project.

The README file will be named "readme1.md" and be populated with the following:

* Project title
* License badge
* Table of Contents
* Description
* Installation
* Usage
* Tests
* Contributing
* Questions
  * User GitHub profile picture
  * User GitHub email
  * User GitHub followers badge
* License

The animated GIF below demonstrates the app functionality.

![](utils/assets/readme.gif)

The command line from the GIF produced the following [README](https://github.com/a-li-sa/readme-generator/blob/master/readme1.md).

<img src='https://i.imgur.com/JafNhOG.jpg' width='550px' alt='README screenshot'>


## Built With

* [Node.js](https://nodejs.org/en/) - An open-source JavaScript runtime environment that executes JavaScript outside of the browser. 
* [ES6+](http://www.ecma-international.org/ecma-262/6.0/) - The 6th version of ECMAScript that introduces new features to JavaScript.

## Credits

Badges from [Naereen](https://github.com/Naereen/badges) and [lukas-h](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba).

Starting files from © 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.


## License

Copyright 2020 Alisa Poon

Licensed under the [MIT License](https://opensource.org/licenses/MIT)