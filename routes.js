var express = require('express');
var router = express.Router();
var urlCheckController = require('./controllers/UrlCheckingController');

router.post('/checkurl', urlCheckController.checkUrlWorkingOrNot);

module.exports = router;