const router = require('express').Router();
const { CalorieGoal } = require('../../models');

router.post('/', async (req, res) => {
    try {
      const calData = await CalorieGoal.create(req.body);
  
      res.status(200).json(calData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.get('/', async (req, res) => {
    try {
      const calData = await CalorieGoal.findAll();
  
      res.status(200).json(calData);
    } catch (err) {
      res.status(400).json(err);
    }
  });



module.exports = router;