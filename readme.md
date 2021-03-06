# E-Commerce App

An app using sequelize and express.js to create databases and GET, POST, PUT and DELETE api requests for an e-commerce site


# Video Walkthrough

This video shows how to create databases, seed the data, run the server and then make GET, POST, PUT and DELETE requests for tags, catergories and products


Youtube: https://youtu.be/LoIRNoH0WOQ  (best way to view app walkthrough)


Google Drive: https://drive.google.com/file/d/1laWrS2TBiXK4-MEjkt_K3BuJGCvOPa35/view


# Technology Used
* MySQL 
* Sequelize
* Express.js


# App usage
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


## App Walkthrough Gifs on Insomnia Core

GET request for getting all products, categories and tags

![getrequests](./assets/get.gif)



GET request to get one product, category, and tag using a specific ID

![idgetrequest](./assets/getid.gif)


POST, PUT and DELETE request for categories

![categories](./assets/cat.gif)


POST, PUT, and DELETE requests for products

![products](./assets/products.gif)


POST, PUT, and DELETE requets for tags

![tags](./assets/tags.gif)
