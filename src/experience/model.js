const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const experiencesSchema = new Schema(
  {
    title: String,
    company_name: String,
    date: String,
    points: Array,
    imageUrl: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Experiences', experiencesSchema);
