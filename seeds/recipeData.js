const { Recipes } = require('../models');

const recipeData = [
    {
        "name": "Peanut Turkey Stir Fry",
        "url": "https://mealprepmanual.com/peanut-turkey-stir-fry/",
        "imgUrl":"https://mealprepmanual.com/wp-content/uploads/2024/04/Peanut-Turkey-Stir-Fry-807x1024.jpg",
        "cookTime":"25",
        "calorieGoal_id":1
      },
      {
          "name": "Peanut Turkey Stir Fry",
          "url": "https://mealprepmanual.com/peanut-turkey-stir-fry/",
          "imgUrl":"https://mealprepmanual.com/wp-content/uploads/2024/04/Peanut-Turkey-Stir-Fry-807x1024.jpg",
          "cookTime":"25",
          "calorieGoal_id":2
      },
      {
          "name": "Peanut Turkey Stir Fry",
          "url": "https://mealprepmanual.com/peanut-turkey-stir-fry/",
          "imgUrl":"https://mealprepmanual.com/wp-content/uploads/2024/04/Peanut-Turkey-Stir-Fry-807x1024.jpg",
          "cookTime":"25",
          "calorieGoal_id":3
      }
];

const seedRecipes = () => Recipes.bulkCreate(recipeData);

module.exports = seedRecipes;