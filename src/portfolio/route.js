const router = require('express').Router();
const { test, create, update, remove, get, getById } = require('./controller');
const { inputValidator } = require('../middlewares/validators');
const { portfolioRules } = require('./validator')

router.get('/test', test);
router.post('/create', portfolioRules, inputValidator, create);
router.patch('/update/:id', update);
router.delete('/remove/:id', remove);
router.get('/get', get);
router.get('/get/:id', getById);

module.exports = router;