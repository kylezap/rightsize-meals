const CalorieGoal = require('./CalorieGoal');
const UserRecipes = require('./UserRecipes');
const Recipes = require('./Recipes');
const User = require('./User');


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
    foreignKey: 'calorie_Goal_id',
    onDelete: 'CASCADE'
    
});
Recipes.belongsTo(CalorieGoal, {
    foreignKey: 'calorie_Goal_id',
});



module.exports = { CalorieGoal, Recipes, User, UserRecipes };