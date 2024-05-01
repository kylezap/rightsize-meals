const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CalorieGoal extends Model {}

CalorieGoal.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        dailyCal: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'calorieGoal',
    }
);

module.exports = CalorieGoal;