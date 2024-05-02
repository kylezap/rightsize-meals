const router = require('express').Router();
const { Recipes, User, UserRecipes, CalorieGoal } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/form', async (req, res) => {
  try {
    res.render('form', {
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// router.get('/profile', async (req, res) => {
//   try {
//     res.render('profile', {
//       logged_in: req.session.logged_in 
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});


router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});         

// router.get('/recipes/:id', async (req, res) => {
//   try {
//       const recipeData = await Recipes.getByPk({
//           where: {
//               id: req.params.id
//           },
//       });

//       if (!recipeData) {
//           res.status(404).json({ message: "no recipe found with this id!" });
//           return;
//       }

//       res.status(200).json(recipeData);
//   } catch (error) {
//       res.status(500).json(error);
//   }
// });





module.exports = router;