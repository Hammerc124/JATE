# Not Another JATE!
Progressive Web Applications (PWA): Text Editor

## Table of Contents

- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Preview Images](#preview-images) 
- [Link To Live URL](#link-to-live-url)
- [Installation and Usage](#installation-and-usage)
- [Tests](#tests)
- [Technologies Used](#technologies-used)
- [Credits](#credits)
- [License](#license)

## Description

Not Another Jate is a web Text editor that can be used online or offline. 

## User Story

```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## Acceptance Criteria

```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```

## Preview Images
- ## Preview - JATE
![Preview Image](./images/LOCAL-JATE.png)

- ## Preview - Manifest
![Preview Image](./images/JATE-MANIFEST.png)

- ## Preview - Service Workers
![Preview Image](./images/JATE-SERVICE-WORKERS.png)

- ## Preview - Storage
![Preview Image](./images/JATE-STORAGE.png)

- ## Preview - Local Storage
![Preview Image](./images/JATE-LOCAL-STORAGE.png)

- ## Preview - Install Offline App
![Preview Image](./images/JATE-INSTALLED.png)

## Link To Live URL

**Oh JATE on Heroku:** [Link To Live URL](https://notanotherjate-f969db31823d.herokuapp.com/) 
### this application is deployed live via Heroku, and can be accessed via the link above.
- ## Preview - Live On Heroku
![Preview Image](./images/JATE-HEROKU.png)


## Installation and Usage
- To clone the repo: https://github.com/Hammerc124/JATE.git
- Install [Node](https://nodejs.org/en). version 16 and up. Command line: 
```bash
npm init
```
#### Install Dependencies the root of the directory using the command:
```bash
npm install
```
#### Run the application to initiate the server using Command at the root of the directory: 
```bash
npm run start:dev
```

## Tests
- There are no tests yet for this application

## Technologies Used
Assignment was built with:

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)
![Dotenv](https://img.shields.io/badge/dotenv-grey?style=for-the-badge&logo=dotenv&logoColor=#ECD53F)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![Github](https://img.shields.io/badge/github-grey?style=for-the-badge&logo=github&logoColor=##181717)
![VS Code](https://img.shields.io/badge/visualstudiocode-black?style=for-the-badge&logo=visualstudiocode&logoColor=#007ACC)

## Credits
- JATE: Caleb Hammer - Full Stack Developer Student.
- Institution: The Ohio State University
- Course: Bootcamp Full Stack Development
- Instructor: Ragheed Al-midani 
- Online Support: W3Schools, Youtube, Stack Overflow
- License badges: Sheilds.io


## License

![License](https://img.shields.io/badge/License-MIT-9cf.svg)