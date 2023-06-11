const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes');
const cors = require("cors");
const { db_url } = require('./src/config')

const app = express();

mongoose.connect(db_url)
  .then(() => console.log('Connected!'));

app.use(express.json());
app.use(cors());
app.use('/api', routes);
app.use('/uploads', express.static('uploads'));

app.get('/download/cv', (req, res) => {
  const cv = './src/uploads/cv/cv.pdf';
  return res.download(cv);
})

app.listen(4000);