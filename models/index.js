const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/tripplanner');
// const Place = require('./place');
// const Hotel = require('./hotel');
// const Restaurant = require('./restaurant');
// const Activity = require('./activity');


// Hotel.belongsTo(Place);
// Restaurant.belongsTo(Place);
// Activity.belongsTo(Place);

// Place.hasOne(Hotel);
// Place.hasOne(Restaurant);
// Place.hasOne(Activity);

module.exports = db;
