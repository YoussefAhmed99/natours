const mongoose = require('mongoose');

const Tour = mongoose.model(
  'Tour',
  new mongoose.Schema({
    name: {
      type: String,
      unique: true
    },
    price: {
      type: Number,
      required: true
    },
    rating: {
      type: Number,
      default: 4.5
    }
  })
);

module.exports = Tour;
