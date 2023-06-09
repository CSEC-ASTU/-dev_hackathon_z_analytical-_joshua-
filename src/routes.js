const router = require('express').Router();
const portfolio = require('./portfolio/route');

router.use('/portfolio', portfolio)

module.exports = router;