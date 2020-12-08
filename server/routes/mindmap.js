const express = require('express');
const router = express.Router();
const mindMapController = require('../controller/mindmapController');

router.get('/mindmap/:mindmapIdx', mindMapController.oneMindMap);


module.exports = router;