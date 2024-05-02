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
          "name": "Poblano Chicken Harvest Bowls",
          "url": "https://mealprepmanual.com/poblano-chicken-harvest-bowls/",
          "imgUrl":"https://mealprepmanual.com/wp-content/uploads/2024/04/Poblano-Chicken-Harvest-Bowls-807x1024.jpg",
          "cookTime":"35",
          "calorieGoal_id":2
      },
      {
          "name": "Gochujang Glazed Beef & Vegetables",
          "url": "https://mealprepmanual.com/gochujang-glazed-beef-vegetables/",
          "imgUrl":"https://mealprepmanual.com/wp-content/uploads/2024/01/High-Volume-Korean-Beef-Bowls-807x1024.jpg",
          "cookTime":"30",
          "calorieGoal_id":3
      },
      {
        "name": "Gochujang Glazed Beef & Vegetables",
        "url": "https://mealprepmanual.com/gochujang-glazed-beef-vegetables/",
        "imgUrl":"https://mealprepmanual.com/wp-content/uploads/2024/01/High-Volume-Korean-Beef-Bowls-807x1024.jpg",
        "cookTime":"30",
        "calorieGoal_id":3
    },
    {
        "name": "Chicken Fajita Fried Rice",
        "url": "https://mealprepmanual.com/chicken-fajita-fried-rice/",
        "imgUrl":"https://mealprepmanual.com/wp-content/uploads/2023/10/Chicken-Fajita-Fried-Rice-807x1024.jpg",
        "cookTime":"30",
        "calorieGoal_id":1
    },
    {
        "name": "Hot Honey Pork Stir Fry",
        "url": "https://mealprepmanual.com/hot-honey-pork-stir-fry/",
        "imgUrl":"https://mealprepmanual.com/wp-content/uploads/2023/09/Hot-Honey-Pork-Stir-Fry-807x1024.jpg",
        "cookTime":"30",
        "calorieGoal_id":2
    },
    {
        "name": "Sweet Potato and Ham Egg Bake",
        "url": "https://mealprepmanual.com/sweet-potato-and-ham-egg-bake/",
        "imgUrl":"https://mealprepmanual.com/wp-content/uploads/2024/01/High-Volume-Korean-Beef-Bowls-807x1024.jpg",
        "cookTime":"55",
        "calorieGoal_id":3
    },
    {
        "name": "Chicken Bowls with Rice and Lentils",
        "url": "https://mealprepmanual.com/chicken-bowls-with-rice-and-lentils/",
        "imgUrl":"https://mealprepmanual.com/wp-content/uploads/2023/08/Chicken-Bowls-with-Rice-and-Lentils-807x1024.jpg",
        "cookTime":"40",
        "calorieGoal_id":1
    },
    {
        "name": "Lemon Garlic Turkey Bowls",
        "url": "https://mealprepmanual.com/lemon-garlic-turkey-bowls/",
        "imgUrl":"https://mealprepmanual.com/wp-content/uploads/2023/06/Lemon-Garlic-Turkey-Bowls-806x1024.jpg",
        "cookTime":"35",
        "calorieGoal_id":2
    },
    {
        "name": "Dijon Chicken and Pasta Salad",
        "url": "https://mealprepmanual.com/dijon-chicken-and-pasta-salad/",
        "imgUrl":"https://mealprepmanual.com/wp-content/uploads/2023/05/Dijon-Chicken-and-Pasta-Salad-807x1024.jpg",
        "cookTime":"20",
        "calorieGoal_id":3
    },
    {
        "name": "Chile Lemon Rice Bowls",
        "url": "https://mealprepmanual.com/chile-lemon-rice-bowls/",
        "imgUrl":"https://mealprepmanual.com/wp-content/uploads/2023/01/Chili-Lemon-Rice-Bowls-819x1024.jpg",
        "cookTime":"40",
        "calorieGoal_id":1
    },
    {
        "name": "Easy Ground Chicken Curry",
        "url": "https://mealprepmanual.com/easy-ground-chicken-curry/",
        "imgUrl":"https://mealprepmanual.com/wp-content/uploads/2023/06/Ground-Chicken-Curry-807x1024.jpg",
        "cookTime":"30",
        "calorieGoal_id":2
    },
];

const seedRecipes = () => Recipes.bulkCreate(recipeData);

module.exports = seedRecipes;