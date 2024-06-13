const router = require('express').Router();
const { User, CalorieGoal } = require('../../models');

router.post('/', async (req, res) => {
  try {

    console.log(req.body);
    // Save the data from API and user Input
    const userData = await User.create(req.body);

    // Call Remote API here, get the data
    const url = `https://fitness-calculator.p.rapidapi.com/dailycalorie?age=${req.body.userAge}&gender=${req.body.isMale}&height=${req.body.userHeight}&weight=${req.body.userWeight}&activitylevel=${req.body.userAct}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '2776c6113fmshd4ff5eb1a349755p107a83jsnf157c1db2717',
        'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
      }
    };

    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result.data.goals['maintain weight']);

  
    const newCalorieGoal = {
      daily_cal: result.data.goals['maintain weight'],
      user_id: userData.id
    }

    console.log(newCalorieGoal);

    const calorieGoal = await CalorieGoal.create(newCalorieGoal);

    console.log(calorieGoal);

  
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });

  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
      res.render
    });
  } else {
    res.status(404).end();
  }
});


router.get('/:id', async (req, res) =>{
  try {
    const dbUserData = await User.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: [
            'name',
            'email',
            'password',
            'userAge',
            'isMale',
            'userWeight',
            'userHeight',
            'userAct',
          ],
        },
      ],
    });
    res.json(dbUserData);
  } catch (error) {
    res.status(500).json(error);
  }
})


module.exports = router;