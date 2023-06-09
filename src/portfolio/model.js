const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portfolioSchema = new Schema(
  {
    title: String,
    description: String,
    image: String,
    link: String,
    demoVideo: String
  },
  { timestamps: true }
);

module.exports = mongoose.model('Portfolio', portfolioSchema);
