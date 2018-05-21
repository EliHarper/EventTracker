## Event Tracker Project

#### Eli Harper

### A program created to track finances in a dynamic application with full CRUD functionality

#### Technologies Used:

* Spring Tool Suite
* JavaScript with JSON conversion
* REST
* JPA
* VS Code
* Git
* Gradle

#### Setup/Installation requirements

In order to edit this project and work with it on your own machine you will need a terminal application such as Terminal or Bash. Since this project has a Gradle and Spring nature, you will need to have the Spring Tool Suite installed. You will also need a database server program such as MAMP and a web server program such as Apache Tomcat.
Start by opening the terminal application and typing the command
git clone https://github.com/awl88/KingdomCoverage.git
after navigating with the cd command to the location you would like the project to be cloned into.

Use the terminal application to navigate to the project directory you just cloned down off of GitHub using the "cd" command.
If at any point during this next part of the set up process you get a popup system window to enter a password, it is asking for your computer user account password. Start by opening up your MAMP or LAMP. From the preferences menu of the application, select "Ports" and "Set Web and MySQL ports to 80 & 3306". Select to "Start Servers" from the main window of your application. Return to your terminal, you will need to set up the included games.sql database in order to correctly interact with this program. You will be typing a series of commands in the terminal.
```
mysql -u root -p < financedb.sql
mysql -u root -p
```
You will then be prompted to enter a password in the terminal, type root.
```
mysql> CREATE USER user@localhost IDENTIFIED BY 'senorWombat';
mysql> exit;
mysql -u user -p
```
You will then be prompted to enter a password in the terminal, type senorWombat. You can now use mysql syntax to interact with the database.
From this point on you should be able to edit the program and see changes when altering it in the Spring Tool Suite.

#### Program Behavior/Specifications:

Expenses

The user will be able to navigate to a page with URI "localhost:8080/expenses" (GET) which will index all of their previous expenses and each expense's information.

After navigating to "localhost:8080/expenses/{id}" (GET), a user will be able to see one specific expense/transaction.

"localhost:8080/expenses" (POST) will allow the user to create a new expense and add it to their list.

"localhost:8080/expenses/{id}" (PUT)/(PATCH)/(DELETE) will allow a user to replace, update or delete an entry, respectively.

After implementing a front-end which functions dynamically with JS, navigation to localhost:8080 provides the user with an index of all of their expenses.
Expenses can be modified/destroyed from the index, and a form at the top of the page allows users to add new expenses.