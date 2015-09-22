# MyPlan Sails-Server-Application

It's a [Sails](http://sailsjs.org) application for the MyPlan-Calender-Application. A simple tool to store event data for up to 4 persons.

To run this application, you'll need access to a mysql server.

Also make shure to have Sails.js installed. Get more informations under [www.sailsjs.org](http://sailsjs.org).

## Installation Guide:

1. Download the repository and remember the folder you saved it.
2. Make shure, that your database server is already set up and create a new database.
3. This app uses the "rest" for username, password and name of the database. So make shure, that these parameters will be accepted by your database. (you can change these options under config/connection.js see -> "someMysqlServer"
4. Open Terminal and navigate to the app's folder you downloaded just before.
5. Write "sails lift" and hit enter.
6. Sails will ask you some questions about the behavior between the app and the database.
7. I normally choose option 2, because it does not delete old data from the database.
8. Once you hit enter again, you should see a sail ship in your terminal and the server should be ready to go.
9. You can test it by opening localhost:1337 in your browser. (If you can't see anything in your browser, check if all the points above are working.)
