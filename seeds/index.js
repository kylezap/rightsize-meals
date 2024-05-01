const sequelize = require('../config/connection');
const seedUsers = require('./userData.js');
const seedCalorieData = require('./calorieData.js');
const seedRecipes = require('./recipeData.js');
const seedUserRecipes = require('./userRecipeData.js');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedUsers();

    await seedCalorieData();

    await seedRecipes();

    await seedUserRecipes()

    process.exit(0);
};

seedAll();