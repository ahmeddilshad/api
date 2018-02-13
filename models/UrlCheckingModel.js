var request = require("request");


function hitUrl (url) {
	return new Promise(function(resolve, reject) {
		request.get({url}, function(err, resp, body) {
			if (err) {
				reject(err);
			} else {
				resolve(resp.statusCode);
			}
		})
	})
}

function checkUrl(url) {
	if (url.indexOf('https://') === -1 && url.indexOf('http://') === -1) {
		url = 'https://' + url;
	}
	var urlResponse = hitUrl(url);
	return new Promise(function(resolve, reject) {
		let status;
		urlResponse.
			then(function(result) {
				var urlRes = result;
				if (typeof urlRes === 'number') {
					status = 'true';
				}
				resolve(status);
		})
			.catch(function(err) {
				status = 'false';
				reject(status);
		});
	});
}


console.log(checkUrl('google.com'));

//module.exports.hitUrl = hitUrl;