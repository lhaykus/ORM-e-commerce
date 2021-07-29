# E-Commerce App

An app using Sequelize and Express to build back end databases and API routes for an e-commerce site.


## Technology Used
* MySQL 
* Sequelize
* Express.js


## App usage
Install all needed packages 
```
npm i mysql12
npm i sequelize
npm i dotenv
```
Create the database
```
mysql -u root -p
*enter password*
copy and paste the databse in schema.sql folder (can also do in MySQL workbench)
```
Seed the database 
```
npm run seed
```

Start the server   
```
npm start
```


## App Walkthrough

GET request for getting all products, categories and tags



GET request to get one product, category, and tag using a specific ID


POST, PUT and DELETE request for categories


POST, PUT, and DELETE requests for products


POST, PUT, and DELETE requets for tags
