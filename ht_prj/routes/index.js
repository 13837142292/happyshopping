var express = require('express');
var router = express.Router();

/* GET home page. */
// 轮播图
router.get('/banner', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  var arr=[
    {
      img:"https://ecimg.happigo.com/data/upload/app/carousel/2019/06253287430178531.jpg",
    },
    {
      img:"https://ecimg.happigo.com/data/upload/app/carousel/2019/06254530147591576.jpg",
    },
    {
      img:"https://ecimg.happigo.com/data/upload/app/carousel/2019/06253096851108069.jpg",
    },
    {
      img:"https://ecimg.happigo.com/data/upload/app/carousel/2019/06253265447392509.jpg",
    },
    {
      img:"https://ecimg.happigo.com/data/upload/app/carousel/2019/06253500747752238.jpg",
    },
    {
      img:"https://ecimg.happigo.com/data/upload/app/carousel/2019/06244679061282656.jpg",
    }
  ]
  res.send(arr);
});
// 今日活动
router.get('/activity', function(req, res, next) {
  var arr = [
      {
          img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/55/284555/1_main_284555_360.jpg",
          title:"路宝堂全鹿糕 200g*10盒",
          money:399
      },
      {
        img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/273/293273/1_main_293273_360.jpg",
        title:"福生阿拉斯原味鳕鱼",
        money:279
      },
      {
        img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/328/264328/1_main_264328_360.jpg",
        title:"陈集铁棍山药全汁粉皮",
        money:199
      },
      {
        img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/374/288374/1_main_288374_360.jpg",
        title:"御品斋燕窝黑芝麻丸",
        money:399
      },
      {
        img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/426/282926/1_main_282926_360.jpg",
        title:"格林斯通云南野生葛根粉 260g*10盒",
        money:399
      },
      {
        img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/314/284314/1_main_286314_360.jpg",
        title:"滇美香格里拉苦荞茶500g*8袋",
        money:299
      }
    

  ]
  res.send(arr);
});
//美妆馆
router.get('/beautyMakeup', function(req, res, next) {
  var arr = [
      {
          img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/250/275250/1_main_275250_360.jpg",
          title:"韩国进口Hanskin韩斯清精华粉底霜BB霜11g*3盒",
          money:399
      },
      {
        img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/249/275249/1_main_275249_360.jpg",
        title:"韩国进口Hanskin韩斯清抗糖玻尿酸补水精华液330ml*3瓶",
        money:699
      },
      {
        img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/199/255199/1_main_255199_360.jpg",
        title:"（跨境）韩国AHC第七代眼霜30ml*2支2019新款",
        money:128
      },
      {
        img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/250/275250/1_main_275250_360.jpg",
        title:"韩国进口Hanskin韩斯清精华粉底霜BB霜11g*3盒",
        money:399
    },
    {
      img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/249/275249/1_main_275249_360.jpg",
      title:"韩国进口Hanskin韩斯清抗糖玻尿酸补水精华液330ml*3瓶",
      money:699
    },
    {
      img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/199/255199/1_main_255199_360.jpg",
      title:"（跨境）韩国AHC第七代眼霜30ml*2支2019新款",
      money:128
    },
    {
      img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/15/279015/1_main_279015_360.jpg",
      title:"韩国艾医生补水柔缓壳聚糖小绷带急救面膜易敏感可用2ml*14条",
      money:56
    }
  ]
  res.send(arr);
});
// 养生厨房
router.get('/beautyMakeup', function(req, res, next) {
  var arr = [
      {
          img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/487/287987/1_main_287987_360.jpg",
          title:"宏慧舌尖上的汽锅蒸锅",
          money:599
      },
      {
        img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/488/287988/1_main_287988_360.jpg",
        title:"摩飞多功能薄饼机和面机",
        money:398
      },
      {
        img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/306/285306/1_main_285306_360.jpg",
        title:"菲仕乐瑞士进口魔法料理国锅",
        money:1598
      },
      {
        img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/338/293838/1_main_283838_360.jpg",
        title:"巴科隆微压蒸烤箱BK28S",
        money:1680
    },
    {
      img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/170/280670/1_main_280670_360.jpg",
      title:"哈仕奇保温水具五件套",
      money:398
    },
    {
      img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/426/285426/1_main_285426_360.jpg",
      title:"德国菲仕乐6L进口高速蒸锅7件套",
      money:1998
    }
  ]
  res.send(arr);
});
// 电子电器
router.get('/appliance', function(req, res, next) {
  var arr = [
      {
          img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/40/241040/1_main_3_360.jpg",
          title:"好易点 高端智能升降晾衣架",
          money:1799
      },
      {
        img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/427/287427/1_main_1_360.jpg",
        title:"库思特智能恒温对流式电暖器",
        money:703
      },
      {
        img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/111/288611/1_main_611_360.jpg",
        title:"Huawei/华为P30超感手机",
        money:3688
      },
      {
        img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/33/289033/1_main_5_360.jpg",
        title:"加奈加湿器净化空气大容量遥控款DS35C-19A",
        money:299
    },
    {
      img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/110/289110/1_main_2_360.jpg",
      title:"衣末手持挂烫机家用蒸汽熨斗BG511",
      money:299
    },
    {
      img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/231/288731/1_main_3_360.jpg",
      title:"日本善思Soseki烘干机家用速干衣暖被烘衣服烘鞋DH-NB01M干衣机",
      money:398
    },
    {
      img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/17/288517/1_main_5_360.jpg",
      title:"雅格充插电大台灯冷暖光调色卧室家用护眼台灯T104",
      money:89
    }
  ]
  res.send(arr);
});
module.exports = router;
