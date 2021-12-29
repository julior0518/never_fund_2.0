const db = require('../db');
const { User } = require('../models/index');

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const mainSeed = async () => {
  const users = [
    {
      wallet: 'qqwe12423rewfde1245',
      nameUser: 'relaxitsjulio',
      nameFirst: 'Julio',
      nameLast: 'Rodriguez',
      email: 'this@email.com',
      phoneNumber: '123123434',
      address: 'somewhere',
      password: '1234',
      description: 'first user Seed',
      image:
        'https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png'
    }
  ];

  await User.insertMany(users);
  console.log('Created some banging tacos!');
};
const run = async () => {
  await mainSeed();
  db.close();
};

run();
