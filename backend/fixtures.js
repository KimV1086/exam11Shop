const mongoose = require('mongoose');
const config = require('./config');

const User = require('./models/User');
const Item = require('./models/Item');
const Category = require('./models/Category');

const run = async () => {
  await mongoose.connect(config.dbURL, config.mongoOptions);

  const connection = mongoose.connection;

  const collections = await connection.db.collections();

  for (let collection of collections) {
    await collection.drop();
  }

  const user = await User.create(
    {
      username: 'John Doe',
      password: '123',
      token: 'token',
      displayName: 'John Doe',
      phoneNumber: '+996 111 111 111'
    },
    {
      username: 'Vasya Pupkin',
      password: '123',
      token: 'token1',
      displayName: 'Vasya Pupkin',
      phoneNumber: '+996 222 222 222'
    }
  );

  const categories = await Category.create(
    {title: 'Women', description: 'Сlock for Woman'},
    {title: 'Men', description: 'Сlock for Man'},
    {title: 'Kids', description: 'Сlock for Kids'}
  );

  await Item.create(
    {
      title: 'TISSOT T-WAVE',
      description: 'There is a certain grace in the way a silk ribbon swirls in the wind. It is that elegance and lightness that inspired the design of the Tissot T-Wave.',
      image: 't-wave.jpeg',
      price: 1200,
      category: categories[0]._id,
      user: user[0]._id
    },
    {
      title: 'TISSOT V8 ALPINE',
      description: 'This unique chronograph is inspired by 1960\'s race cars and celebrates the partnership between Tissot and Alpine.',
      image: 'alpine.jpeg',
      price: 1800,
      category: categories[1]._id,
      user: user[1]._id
    },
    {
      title: 'TISSOT FLAMINGO',
      description: 'Embodying perfect simplicity, the clean lines of the Tissot Flamingo watch make it beautifully pure. ',
      image: 'flamingo.jpeg',
      price: 1300,
      category: categories[0]._id,
      user: user[0]._id
    },
    {
      title: 'BABY-G Urban',
      description: '"From BABY-G, the casual watch for active women, come gorgeous new models for the holiday season. ',
      image: 'baby.jpeg',
      price: 300,
      category: categories[2]._id,
      user: user[1]._id
    }
  );

  await connection.close();

};

run().catch(error => {
  console.error('Something went wrong', error);
});