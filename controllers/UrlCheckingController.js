var urlCheckingModel = require('../models/UrlCheckingModel');

function checkUrlWorkingOrNot(req, res) {
	if (typeof req.body.url !== 'undefined' && req.body.url !== '') {
		var url = req.body.url;
		
		// res.status(200).json({'url': url});
	} else {
		console.log(req.body);
		res.status(200);
		res.json({'msg':'Url is missing in request'});
	}
};

module.exports.checkUrlWorkingOrNot = checkUrlWorkingOrNot;