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

// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },

//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});


router.get('/profile', async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });

    console.log('user_data', userData);

    const calData = await CalorieGoal.findOne({ where: { user_id: req.session.user_id } });
    console.log('CalcData', calData);

    const cal = calData.get({ plain: true });
    console.log(cal);
    const user = userData.get({ plain: true });

    console.log(user);
    console.log(cal);

    res.render('profile', {
      user,
      cal,
      logged_in: req.session.logged_in,

    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/recipes', async (req, res) => {
  try {
    const recipeData = await Recipes.findAll();
    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
    res.render('recipes', {
      logged_in: req.session.logged_in,
      recipes: recipes
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



// temp route for cal api
router.get('/getcal', async (req, res) => {
  const url = `https://fitness-calculator.p.rapidapi.com/dailycalorie?age=${age}&gender=${gender}&height=${height}&weight=${weight}&activitylevel=${actLevel}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2776c6113fmshd4ff5eb1a349755p107a83jsnf157c1db2717',
      'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
    }
  };
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
})

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