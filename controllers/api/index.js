const router = require('express').Router();
const userRoutes = require('./userRoutes');
const recipesRoutes = require('./recipesRoutes');
// const calorieGoalRoutes = require('./calorieGoalRoutes');
// const userRecipesRoutes = require('./userRecipesRoutes');


router.use('/users', userRoutes);
router.use('/recipes', recipesRoutes);
// router.use('/calorieGoal', calorieGoalRoutes);
// router.use('/userRecipes', userRecipesRoutes);

module.exports = router;