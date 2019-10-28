var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/shoppingCart', function(req, res, next) {
    var arr = [
        {
            id:1,
            title:"陈集铁棍山药",
            money:199,
            img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/328/264328/1_main_264328_360.jpg",
            specs:"默认"
        },

    ]
    res.send(arr);
});
module.exports = router;
