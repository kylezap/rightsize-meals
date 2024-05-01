const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserRecipes extends Model {}

UserRecipes.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        recipes_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'recipes',
                key: 'id',
            },
            
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: false,
        underscored: true,
        modelName: 'userRecipes',
    }
);

module.exports = UserRecipes;