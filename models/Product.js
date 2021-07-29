// import important parts of sequelize library
const { Model, DataTypes, DECIMAL } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    //Creating id as interger, does not allow null values, has a primary key and auto incredments
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,

    },
    //Creating product name to be a string and not allow null values
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    //Creating price to be a decimal, not allow null values and validate that the value is actually a decimal
    price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      validate: {
        isDecimal: true,
      },

    },
    //Creating the stock to be a number, allow no null values, default value to be 10 and validate the value is a number
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },

    },
    //Creating the catergory id as an interger referencing the category model with the id 
    catergory_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
      },
    },

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
