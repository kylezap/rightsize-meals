const router = require('express').Router();
const { Recipes, User, UserRecipes, CalorieGoal } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    try {
        res.render('homepage', { 
            //logged_in: req.session.logged_in 
          });
        } catch (err) {
          res.status(500).json(err);
        }
      });

      router.get('/form', async (req, res) => {
        try {
            res.render('form', { 
                //logged_in: req.session.logged_in 
              });
            } catch (err) {
              res.status(500).json(err);
            }
          });

module.exports = router;