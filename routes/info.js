var express = require('express');
var router = express.Router();


/* POST info  */
router.post('/', function(req, res, next) {
	region = req.body.region
	product = req.body.product
	console.log(region)
	console.log(product)
	res.json({"length":20,"name":"a,b,c"})
});

module.exports = router;