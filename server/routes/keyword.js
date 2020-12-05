const express = require('express');
const router = express.Router();
const keywordController = require('../controller/keywordController')

router.post('/keyword/:mindmapIdx', keywordController.keywordAdd);

module.exports = router;