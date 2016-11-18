const express = require('express');
const router = express.Router();
const Hotel = require('../models/hotel');
const Restaurant = require('../models/restaurant');
const Activity = require('../models/activity');
const Promise = require('bluebird');

module.exports = router;

router.get('/', function(req, res, next) {
  Promise.all([Hotel.findAll(), Restaurant.findAll(), Activity.findAll()])
  .spread(function(hotels, rests, acts) {
    res.json({ hotels: hotels, restaurants: rests, activities: acts});
    // res.render("./views", { hotels: hotels, restaurants: rests, activities: acts})
  })
})