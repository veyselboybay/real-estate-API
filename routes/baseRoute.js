const router = require('express').Router();
const { getAll } = require('../controllers/baseController')

router.get('/', getAll)

module.exports = router;