var express = require('express');
var router = express.Router();

/* GET users listing. */

//购物车商品信息
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

//详情轮播图信息
router.get('/detailBanner', function(req, res, next) {
    var arr = [
                  "https://ecimg.happigo.com/data/upload/shop/store/goods/1/250/275250/1_main_275250_1280.jpg",
                  "https://ecimg.happigo.com/data/upload/shop/store/goods/1/250/275250/1_06192047385277477_1280.jpg",
                  "https://ecimg.happigo.com/data/upload/shop/store/goods/1/250/275250/1_06192047408784039_1280.jpg"
    ]
    res.send(arr);
});

//详情信息
router.get('/detailNews', function(req, res, next) {
    var arr = [
          {
              introduce:"【打造亮泽水润裸妆】韩国进口Hanskin韩斯清精华粉底霜BB霜11g*3盒",
              compontent:"天然成分，无化学添加，质地如羽毛般轻柔，丝滑易推开。上妆均匀服帖，显色自然。",
              price:399,
              oldprice:499,
              p1:"阶梯减",
              n1:"每满200减20 上不封顶",
              p2:"满包邮",
              n2:"在线支付满129免运费(部分地区除外);",
              p3:"买就返",
              n3:"订购可获3.99快乐币可抵3.99元"
          }
    ]
    res.send(arr);
});


//详情页用户评价
router.get('/detailComment', function(req, res, next) {
    var arr = [
        {
            img:"https://ecimg.happigo.com/data/upload/member/avatar/a59/m59123.jpg",
            name:"WEB****33F",
            date:"2019-08-26",
            content:"送朋友的 朋友说很好 质地细腻 遮瑕效果不错 有光泽 比之前的兰芝气垫好用 谢谢快乐购",
            pic:"https://ecimg.happigo.com/data/upload/product/comments/201908/26/193729/5182785/ac45cccdab6724defda6eaa46d4ab56e_200_200.png"

        },
        {
            img:"https://ecimg.happigo.com/data/upload/member/avatar/a13/m13458.jpg",
            name:"春天****YY",
            date:"2019-09-19",
            content:"很好用，是原装进口的，谢谢快乐购。",
            pic:""

        },
        {
            img:"https://ecimg.happigo.com/data/upload/member/avatar/a283/m283279.jpg",
            name:"13******191",
            date:"2019-10-27",
            content:"默认好评",
            pic:"https://m.happigo.com/Public/home/images/x5.png"

        },
        {
            img:"https://ecimg.happigo.com/data/upload/member/avatar/a2420/m2420519.jpg",
            name:"WX******784",
            date:"2019-10-26",
            content:"默认好评",
            pic:""

        },
        {
            img:"https://ecimg.happigo.com/data/upload/member/avatar/a255/m255167.jpg",
            name:"满**********",
            date:"2019-08-23",
            content:"宝贝收到货了，非常满意好评！赞！赞！",
            pic:"https://ecimg.happigo.com/data/upload/product/comments/201908/23/4026759/5186699/cb9134dab21b565dbeec04adedeb0986_200_200.jpg"

        },
        {
            img:"https://ecimg.happigo.com/data/upload/member/avatar/a2661/m2661965.jpg",
            name:"WX******25d",
            date:"2019-10-19",
            content:"默认好评",
            pic:"https://m.happigo.com/Public/home/images/x5.png"

        }
    ]
    res.send(arr);
});

//猜你喜欢部分的商品信息
router.get('/likeProduct', function(req, res, next) {
    var arr = [
          {
            img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/353/277853/1_main_277853_360.jpg",
            title:"[温泉温和净透]Btube滨郡温泉净透卸妆水300ml",
            price:39
          },
          {
            img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/246/275746/1_main_01_360.jpg",
            title:"[不怕彩妆残留](跨境)日本ALOVIV皇后四效合一卸妆水500ml",
            price:59
          },
          {
            img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/244/275744/1_main_111_360.jpg",
            title:"[又浓又密 深邃卷翘](跨境)日本奇士美KISSMEKISSME二代睫毛膏浓密6g",
            price:89
          },
          {
            img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/219/275719/1_main_01_360.jpg",
            title:"[干净清爽]新西兰纽西小精灵紫草赋活清润卸妆水290ml",
            price:89
          },
          {
            img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/245/275745/1_main_01_360.jpg",
            title:"[灵动自然 根根卷翘](跨境)日本奇士美KISSMEKISSME二代睫毛膏纤长6g",
            price:79
          },
          {
            img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/209/275209/1_main_275209_360.jpg",
            title:"[独立而优雅](跨境)美国雅诗兰黛ModernMuse摩登繆斯香水30mlEDP",
            price:288
          },
          {
            img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/208/275208/1_main_275208_360.jpg",
            title:"[细腻哑光妆效](跨境)法国Chanel香奈儿哑光丝绒唇釉6ml  #154号",
            price:349
          },
          {
            img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/132/275132/1_main_275132_360.jpg",
            title:"[有妆似无妆]GRE-KRITI鱼子酱气垫霜15g正装+15g替换装",
            price:399
          },
          {
            img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/272/286772/1_main_286772_360.jpg",
            title:"[打造透光肌](跨境)法国YSL圣罗兰明彩亮颜超模粉底液B20#/30ml",
            price:398
          },
          {
            img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/482/286982/1_main_03_360.jpg",
            title:"[一抹长时显色](跨境)法国YSL圣罗兰细管纯口红小金条2.2g",
            price:349
          }
    ]
    res.send(arr);
});

module.exports = router;
