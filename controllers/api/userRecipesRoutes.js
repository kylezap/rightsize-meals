const router = require('express').Router();
const { UserRecipes } = require('../../models');

router.post('/', async (req, res) => {
    try {
      const usrRecipeData = await UserRecipes.create(req.body);
  
      res.status(200).json(usrRecipeData);
    } catch (err) {
      res.status(400).json(err);
    }
  });


  router.get('/', async (req, res) => {
    try {
        const recipeData = await UserRecipes.findAll();

        res.status(200).json(recipeData);
    } catch (error) {
        res.status(500).json(error);
    }
  });

module.exports = router;