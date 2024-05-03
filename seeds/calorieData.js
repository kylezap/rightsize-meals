const { CalorieGoal } = require('../models');

const calorieData = [
    {
        "daily_cal":2406,
        "user_id":1
      },
      {
        "daily_cal":3159,
        "user_id":2
      },
      {
        "daily_cal":2384,
        "user_id":3
      },
];

const seedCalorieData = () => CalorieGoal.bulkCreate(calorieData);

module.exports = seedCalorieData;