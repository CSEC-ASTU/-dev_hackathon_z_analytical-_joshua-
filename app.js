const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/mukerum')
  .then(() => console.log('Connected!'));

app.use(express.json());
app.use('/api', routes);
app.use('/uploads', express.static('uploads'));



app.get('/download/cv', (req, res) => {
  const cv = './src/uploads/cv/Eyasu Yidnekachew CV.pdf';
  return res.download(cv);
})

app.listen(4000);