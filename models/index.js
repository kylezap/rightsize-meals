const CalorieGoal = require('./CalorieGoal');
const Recipes = require('./Recipes');
const User = require('./User');
const UserRecipes = require('./UserRecipes');

User.hasOne(CalorieGoal, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
User.hasMany(UserRecipes, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
CalorieGoal.belongsTo(User, {
    foreignKey: 'user_id',
});
UserRecipes.belongsTo(User, {
    foreignKey: 'user_id',
});
CalorieGoal.hasMany(Recipes, {
    foreignKey: 'calorieGoal_id',
});
Recipes.belongsTo(CalorieGoal, {
    foreignKey: 'calorieGoal_id',
});





module.exports = { CalorieGoal, Recipes, User, UserRecipes };