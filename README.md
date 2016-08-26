Webpack+React Starter Kit
-------------------------

### Introduction

This is a starter kit used for front-end application development using React.js and other related JavaScript libraries. The starter kit contains Webpack Module Bundler and Babel compiler for next generation JavaScript. It is also pre-packaged with "React-friendly" modules such as React-Router, Mobx-React, and Express.js. 


### Prerequisites

The starter kit needs the following programs installed on your computer:

* [Node.js](https://nodejs.org/en/download/)
* npm (normally bundled with Node.js)
* [Git](https://git-scm.com/downloads)


### Configuration files

* .babelrc - the configuration file for Babel compiler and loader
* webpack.config.js - Webpack configuration file
* package.json - primarily used for project dependency managment and startup script configuration
* server.js - the default startup script for 'npm start' command


### The src/ directory

* main.js - app entry point
* server-starter.js - an ES5 proxy script to bootstrap HttpServer (implemented in ES6)
* HttpServer.js - development HTTP server that serves static pages and mock API
* Router.js - a react-router component that links other app components and provides URL routing
* asset/ - the directory to store static files such as HTML, CSS, fonts, images, and etc.
* component/ - the directory to store React components
* model/ - the directory to store application domain models


### Start up development/testing server locally [http://localhost:8000](http://localhost:8000)

```bash
npm install (only need to run once)
npm start
```

### Building project for production deployment

```bash
npm run build
```
The built artifacts will be put into build/ directory and they can be deployed to production server.


### Special note for Windows users

In some working places, Windows users don't Administator privilege and cannot install node.js by themselves. This starter kit contains standalone node.js and npm x86 executables in win-x86/ directory. Run the following command first to set up the environment:

```dos
win-x86\set-env.bat
```

After that, you should be able to run npm and node as usual:

```dos
npm -v
node -v
```