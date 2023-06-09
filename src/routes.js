const router = require('express').Router();
const portfolio = require('./portfolio/route');
const experience = require('./experience/route');

router.use('/portfolio', portfolio);
router.use('/experience', experience);

module.exports = router;