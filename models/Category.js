const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    //Defining columns
    //Creating the id that is an interger, does not allow null values, has a primary key and auto increments
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    //Creating the catergory name as a string that does not allow null values
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }


  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
