const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [8],
            },
        },
        //Stores the height, weight, age, gender, and activity level for the cal calc
        userAge: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'user_age', // specify the exact column name in the database
        },
        //storing gender a string
        isMale: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'is_male', // specify the exact column name in the database
        },
        userWeight: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'user_weight', // specify the exact column name in the database
        },
        userHeight: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'user_height', // specify the exact column name in the database
        },
        //
        //the api wants it in the form of 
        //‘level _ 1’ : “Sedentary: little or no exercise”,
        // ‘level _ 2’ : “Exercise 1-3 times/week”,
        // ‘level _ 3’ : “Exercise 4-5 times/week”,
        // ‘level _ 4’ : “Daily exercise or intense exercise 3-4 times/week”,
        // ‘level _ 5’ : “Intense exercise 6-7 times/week”,
        // ‘level _ 6’ : “Very intense exercise daily, or physical job”
        userAct: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'user_act', // specify the exact column name in the database
        },
        
    }, 
    {
        hooks: {
            beforeCreate: async (newUserData) => {
              newUserData.password = await bcrypt.hash(newUserData.password, 10);
              return newUserData;
            },
            beforeUpdate: async (updatedUserData) => {
              updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
              return updatedUserData;
            },
          },
          sequelize,
          timestamps: false,
          freezeTableName: true,
          underscored: true,
          modelName: 'user',
    }
);

module.exports = User;