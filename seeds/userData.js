const { User } = require('../models');

const userData = [
    {
        "name": "Sal",
        "email": "sal@hotmail.com",
        "password": "password12345",
        "userAge": 20,
        "isMale": true,
        "userWeight":72,
        "userHeight": 175,
        "userAct": 2
      },
      {
        "name": "Lernantino",
        "email": "lernantino@gmail.com",
        "password": "password12345",
        "userAge": 25,
        "isMale": true,
        "userWeight":80,
        "userHeight": 180,
        "userAct": 5
      },
      {
        "name": "Amiko",
        "email": "amiko2k20@aol.com",
        "password": "password12345",
        "userAge": 23,
        "isMale": false,
        "userWeight":60,
        "userHeight": 160,
        "userAct": 3
      },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;