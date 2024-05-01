const { UserRecipes } = require('../models');

const userRecipeData = [
{
    "recipe_id": 1,
    "user_id": 1
},
{
    "recipe_id": 2,
    "user_id": 2
},{
    "recipe_id": 3,
    "user_id": 3
},
];

const seedUserRecipes = () => UserRecipes.bulkCreate(userRecipeData);

module.exports = seedUserRecipes;