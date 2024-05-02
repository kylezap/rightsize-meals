const router = require('express').Router();
const { Recipes } = require('../../models');

router.post('/', async (req, res) => {
    try {
      const recipeData = await Recipes.create(req.body);
  
      res.status(200).json(recipeData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.get('/', async (req, res) => {
    try {
        const recipeData = await Recipes.findAll();

        res.status(200).json(recipeData);
    } catch (error) {
        res.status(500).json(error);
    }
  });

  router.get('/:id', async (req, res) => {
  try {
      const recipeData = await Recipes.getByPk(req.params.id);

      if (!recipeData) {
          res.status(404).json({ message: "no recipe found with this id!" });
          return;
      }

      res.status(200).json(recipeData);
  } catch (error) {
      res.status(500).json(error);
  }
});



  module.exports = router;