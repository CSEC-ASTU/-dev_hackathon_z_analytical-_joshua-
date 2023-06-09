const router = require('express').Router();
const { test, create, update, remove, get, getById, addImageById } = require('./controller');
const { inputValidator } = require('../middleware/validators');
const { portfolioRules } = require('./validator')
const { uploadImage } = require('../middleware/upload');
const { manageImage } = require('../utils/upload');

router.get('/test', test);
router.post('/create', portfolioRules, inputValidator, create);
router.patch('/update/:id', update);
router.delete('/remove/:id', remove);
router.get('/get', get);
router.get('/get/:id', getById);
router.post('/upload/image/:id', uploadImage, manageImage, addImageById);

module.exports = router;