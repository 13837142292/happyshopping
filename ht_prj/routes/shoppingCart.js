var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/shoppingCart', function(req, res, next) {
    var arr = [
        {
            id:1,
            img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/250/275250/1_main_275250_360.jpg",
            detail:"韩国进口Hanskin韩斯清精华粉底霜BB霜11g*3盒",
            size:"规格：默认",
            price:"399",
            number:1
        },
        {
            id:2,
            img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/469/252969/1_main_252969_360.jpg",
            detail:"章砚铁铺铁锅（30cm炒锅含锅盖+24cm煎锅+24cm汤锅含锅盖 送锅铲+刀具三件套+和天下铁壶）",
            size:"规格：默认",
            price:"499",
            number:1
        },
        {
            id:3,
            img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/456/285456/1_main_1_360.jpg",
            detail:"萨佐简约时尚羊毛双面尼大衣",
            size:"规格：绿色 165 ",
            price:"498",
            number:1
        },
        {
            id:4,
            img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/487/287987/1_main_287987_360.jpg",
            detail:"宏惠舌尖上的汽锅蒸锅升级款",
            size:"规格：默认",
            price:"599",
            number:1
        }

    ]
    res.send(arr);
});
module.exports = router;
