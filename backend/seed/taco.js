const db = require('../db');
const { Taco } = require('../models/taco');

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const mainSeed = async () => {
  const tacos = [
    {
      name: 'tacoSeed1',
      description: 'the fuego 1',
      image:
        'https://3docean.img.customer.envatousercontent.com/files/252369519/taco_pv.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=d2f1767e3cd0f28c1a3c4dd8d70a8edf'
    },
    {
      name: 'tacoSeed2 ',
      description: 'this is cat taco',
      image: 'https://wallpapercave.com/wp/wp5048642.jpg'
    }
  ];

  await Taco.insertMany(tacos);
  console.log('Created some banging tacos!');
};
const run = async () => {
  await mainSeed();
  db.close();
};

run();
