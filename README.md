# MySQL Employee Tracker

### GH Pages URL: https://pmahalan.github.io/MVC_hw_13/

The purpose of this assignment was to create a full-stack web application which references a MySQL database. I chose to make my database a variety of cupcakes, which in turn are to be displayed on the front-end side of the application. Upon successful development of all the app's features, the user will be able to click on a button next to any given cupcake to "Devour" it; this will change the status of that particular cupcake in the database from "not devoured" to "Devoured". Additionally, upon the successful development of all the app's features, the user will be able to add their own cupcake names to the database. 

In spite of my best efforts, something in my code is currently preventing the content from my database from being displayed on the front-end webpage. As is visible in the screenshot below, the file "cupcake_controller.js" is supposed to reference data from my MySQL table (called "cupcake_table") and render that data on the "index" handlebars page. 

Additionally, this project utlizes ORM (object-relational mapping). The aim of the ORM methods in general is to help "convert data between incompatible type systems", and within my project specifically, to help convert data from my database (MySQL) to HTML.

For the display of my application, I chose to use the Bootstrap CSS framework. In addition to having my page elements center-aligned, I hope that the use of Bootstrap will contribute to a clean-cut and polished look for my application.

![App Screenshot](1.jpg "Picture 1")
![App Screenshot](2.jpg "Picture 2")
![App Screenshot](3.jpg "Picture 3")
![App Screenshot](4.jpg "Picture 4")