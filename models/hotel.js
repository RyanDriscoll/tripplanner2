const Sequelize = require('sequelize');
const db = require('./');
const Place = require('./place');

const Hotel = db.define('hotel', {
  name: {
    type: Sequelize.STRING
  },
  num_stars: {
    type: Sequelize.INTEGER
  },
  amenities: {
    type: Sequelize.STRING
  }
});

Hotel.belongsTo(Place);



module.exports = Hotel;
