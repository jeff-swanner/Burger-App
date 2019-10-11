# Burger Logger

## Description

This application is a burger logger that uses Node.js, express, MySQL, Handlebars, and a custom ORM. It allows a user to create new burgers and then devour them. It follows the MVC software design pattern. The directory strucutre is outlined below. A working version is deployed to heroku and be found at the bottom of the readme. 

#### Directory structure

├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       ├── img 
│       │   └── image files used
│       └── js
│           └── burger.js
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars

## How To Use
1. Download the github repository to your computer. 
2. Navigate to the project directory in the command line and run npm install to install the necessary node modules.
3. Copy the schema.sql file contents into MySQL and run to initialize database and tables. Then copy the seeds.sql contents into MySQL to populate the initial burgers.
4. Port and password information for MySQL may need to be modified and can be found in the connection.js file in the config folder
5. Initialize the server by calling 'node server.js' in the terminal while in the root directory.
6. Finally navigate to http://localhost:8080/ to see the working application.

## Technologies Used
* Node.js - Used for core application
* MySQL - Used to store database information
* Express - Used to create server and handle get/post request from the client
* Heroku - Used to deploy application to web
* Handlebars.js - Templating engine used to generate HTML

## Deployed Heroku App
* [Burger Logger](https://evening-caverns-06584.herokuapp.com/)

## Creator
Jeff Swanner