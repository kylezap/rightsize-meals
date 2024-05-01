const { CalorieGoal } = require('../models');

const calorieData = [
    {
        "dailyCal":2406,
        "user_id":1
      },
      {
        "dailyCal":3159,
        "user_id":2
      },
      {
        "dailyCal":2384,
        "user_id":3
      },
];

const seedCalorieData = () => CalorieGoal.bulkCreate(calorieData);

module.exports = seedCalorieData;