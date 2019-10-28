var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/leftList', function(req, res, next) {
  arr=[
     "个护美妆",
     "食品健康",
     "餐厨日用",
     "服装配饰",
     "布艺家纺",
     "家电数码",
     "母婴呵护",
     "芒果汽车",
     "品牌馆"
  ]
  res.send(arr);
});

module.exports = router;
