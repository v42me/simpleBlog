var express = require('express');
var router = express.Router();

var regions = ['cn-north-01','cn-north-02','cn-north-03','cn-east-01',
'cn-east-02','cn-south-01','cn-south-02','uk-01','us-west-01']
var products=["uhost",
"udisk",
"snapshot",
"shared_bandwidth",
"udb",
"ucdn",
"usms",
"eip",
"ulb",
"umem",
"bandwidth",
"traffic",
"ecshop",
"vpn",
"actual_bandwidth",
"actual_bind_bandwidth",
"phost",
"rack",
"private_host",
"private_vm",
"san",
"mongodb",
"umr",
"uhive",
"vpc",
"vrouter",
"subnet",
"ssl",
"ulb-fr",
"ufile",
"firewall",
"vip",
"uimage",
"hbase",
"uredis",
"pimage",
"Hadoop",
"SDefense",
"HadoopHost",
"uddptask",
"all"]


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { regions: regions ,products:products});
});

module.exports = router;
