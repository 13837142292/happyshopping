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
          money:399,
          OriginalPrice:599
      },
      {
        img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/249/275249/1_main_275249_360.jpg",
        title:"韩国进口Hanskin韩斯清抗糖玻尿酸补水精华液330ml*3瓶",
        money:699,
        OriginalPrice:899
      },
      {
        img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/199/255199/1_main_255199_360.jpg",
        title:"（跨境）韩国AHC第七代眼霜30ml*2支2019新款",
        money:128,
        OriginalPrice:328
      },
      {
        img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/250/275250/1_main_275250_360.jpg",
        title:"韩国进口Hanskin韩斯清精华粉底霜BB霜11g*3盒",
        money:399,
        OriginalPrice:699
    },
    {
      img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/249/275249/1_main_275249_360.jpg",
      title:"韩国进口Hanskin韩斯清抗糖玻尿酸补水精华液330ml*3瓶",
      money:699,
      OriginalPrice:1099
    },
    {
      img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/199/255199/1_main_255199_360.jpg",
      title:"（跨境）韩国AHC第七代眼霜30ml*2支2019新款",
      money:128,
      OriginalPrice:328
    },
    {
      img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/15/279015/1_main_279015_360.jpg",
      title:"韩国艾医生补水柔缓壳聚糖小绷带急救面膜易敏感可用2ml*14条",
      money:56,
      OriginalPrice:199
    }
  ]
  res.send(arr);
});
// 养生厨房
router.get('/kitchen', function(req, res, next) {
  var arr = [
      {
          img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/487/287987/1_main_287987_360.jpg",
          title:"宏慧舌尖上的汽锅蒸锅",
          money:599,
          OriginalPrice:799
      },
      {
        img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/488/287988/1_main_287988_360.jpg",
        title:"摩飞多功能薄饼机和面机",
        money:398,
        OriginalPrice:698
      },
      {
        img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/306/285306/1_main_285306_360.jpg",
        title:"菲仕乐瑞士进口魔法料理国锅",
        money:1598,
        OriginalPrice:2098
      },
      {
        img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/338/293838/1_main_283838_360.jpg",
        title:"巴科隆微压蒸烤箱BK28S",
        money:1680,
        OriginalPrice:2280
    },
    {
      img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/170/280670/1_main_280670_360.jpg",
      title:"哈仕奇保温水具五件套",
      money:398,
      OriginalPrice:698
    },
    {
      img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/426/285426/1_main_285426_360.jpg",
      title:"德国菲仕乐6L进口高速蒸锅7件套",
      money:1998,
      OriginalPrice:2298
    }
  ]
  res.send(arr);
});
// 电子电器
router.get('/electronic', function(req, res, next) {
  var arr = [
      {
          img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/40/241040/1_main_3_360.jpg",
          title:"好易点 高端智能升降晾衣架",
          money:1799,
          OriginalPrice:2099
      },
      {
        img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/427/287427/1_main_1_360.jpg",
        title:"库思特智能恒温对流式电暖器",
        money:703,
        OriginalPrice:1003
      },
      {
        img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/111/288611/1_main_611_360.jpg",
        title:"Huawei/华为P30超感手机",
        money:3688,
        OriginalPrice:8688
      },
      {
        img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/33/289033/1_main_5_360.jpg",
        title:"加奈加湿器净化空气大容量遥控款DS35C-19A",
        money:299,
        OriginalPrice:699
    },
    {
      img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/110/289110/1_main_2_360.jpg",
      title:"衣末手持挂烫机家用蒸汽熨斗BG511",
      money:299,
      OriginalPrice:699
    },
    {
      img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/231/288731/1_main_3_360.jpg",
      title:"日本善思Soseki烘干机家用速干衣暖被烘衣服烘鞋DH-NB01M干衣机",
      money:398,
      OriginalPrice:698
    },
    {
      img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/17/288517/1_main_5_360.jpg",
      title:"雅格充插电大台灯冷暖光调色卧室家用护眼台灯T104",
      money:89,
      OriginalPrice:189
    }
  ]
  res.send(arr);
});
// 服饰新鲜货
router.get('/afresh', function(req, res, next) {
  var arr = [
      {
          img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/193/284693/1_main_1_360.jpg",
          title:"萨左拼色狐狸领中长款羽绒服",
          money:398,
          OriginalPrice:598
      },
      {
        img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/47/286047/1_main_286047_360.jpg",
        title:"红松树手工钉珠腰间抽绳刺绣大衣",
        money:799,
        OriginalPrice:1099
      },
      {
        img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/163/244163/1_p_06243806993347283_360.jpg",
        title:"可莱克小香风粗花呢定制款长大衣",
        money:190,
        OriginalPrice:390
      },
      {
        img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/191/284691/1_main_284691_360.jpg",
        title:"迪欧达加拿大进口鹅绒女士大衣",
        money:798,
        OriginalPrice:1098
    },
    {
      img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/456/285456/1_main_1_360.jpg",
      title:"萨佐简约时尚羊毛双面尼大衣",
      money:498,
      OriginalPrice:798
    },
    {
      img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/112/288612/1_main_288612_360.jpg",
      title:"萨佐温婉优雅亮钻仿貂绒大衣",
      money:238,
      OriginalPrice:638
    },
    {
      img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/38/288538/1_main_11_360.jpg",
      title:"箴美典雅切尔西牛皮女靴（加赠羊皮包*1件）",
      money:299,
      OriginalPrice:599
    }
  ]
  res.send(arr);
});
//美妆断货网
router.get('/outStock', function(req, res, next) {
  var arr = [
      {
          img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/128/282628/1_main_01_360.jpg",
          title:"亚瑟蒂莉麦卢卡蜂蜜羊奶皂套组100g*12块",
          money:298,
          OriginalPrice:598
      },
      {
        img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/296/285296/1_main_285296_360.jpg",
        title:"韩国原装进口Vprove熨斗小橙瓶冻龄精华安瓶30ml*5瓶",
        money:699,
        OriginalPrice:899
      },
      {
        img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/239/276239/1_main_276239_360.jpg",
        title:"以色列进口涵佩即时抚纹霜 5ml*3只*3盒",
        money:899,
        OriginalPrice:1099
      },
      {
        img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/239/276239/1_main_276239_360.jpg",
        title:"奥地利国宝STYX诗蒂克活力龙精油舒柔按摩乳50ml*5",
        money:999,
        OriginalPrice:1399
    },
    {
      img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/487/259487/1_main_259487_360.jpg",
      title:"日本花印纳豆弹润眼霜30g*6支（原装进口）",
      money:699,
      OriginalPrice:1299
    },
    {
      img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/334/246334/1_main_246334a_360.jpg",
      title:"美国雅诗兰黛 新款红石榴日晚霜2件套装（日霜50ml+晚霜50ml）",
      money:798,
      OriginalPrice:1098
    },
    {
      img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/74/244074/1_main_01_360.jpg",
      title:"（跨境）xhekpon径纹霜40ml*2支",
      money:198,
      OriginalPrice:598
    }
  ]
  res.send(arr);
});
// 优选好物
router.get('/goodThings', function(req, res, next) {
  var arr = [
      {
          img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/306/261306/1_main_261306xx_1280.jpg",
          title:"中国紫米之乡普洱墨江紫米家庭组 210g*36袋",
          money:279,
          OriginalPrice:499
      },
      {
        img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/125/286625/1_main_1_1280.jpg",
        title:"KEHEAL科西便携式旅行手持挂烫机小型家用H1",
        money:369,
        OriginalPrice:389
      },
      {
        img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/374/288374/1_main_288374_1280.jpg",
        title:"御品斋燕窝黑芝麻丸 9g*12丸*15瓶",
        money:399,
        OriginalPrice:399
      },
      {
        img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/491/288491/1_main_11_1280.jpg",
        title:"通奇正镇痛磁疗贴买3盒送2盒（共10片*5盒）",
        money:298,
        OriginalPrice:348
    },
    {
      img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/18/278018/1_main_278018_1280.jpg",
      title:"Shark鲨客蒸汽除菌拖把P2",
      money:499,
      OriginalPrice:699
    },
    {
      img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/221/296721/1_main_295721_1280.jpg",
      title:"仙果树突尼斯软籽石榴 4个 单果450g以上  礼盒装",
      money:59,
      OriginalPrice:68
    },
    {
      img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/487/287987/1_main_287987_1280.jpg",
      title:"宏惠舌尖上的汽锅蒸锅升级款",
      money:599,
      OriginalPrice:799
    },
    {
      img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/154/285154/1_main_285154_1280.jpg",
      title:"碧源生物林蛙油软胶囊 100粒*6瓶",
      money:1980,
      OriginalPrice:2980
    },
    {
      img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/426/282926/1_main_282926_1280.jpg",
      title:"格林斯通云南野生葛根粉 260g*10盒",
      money:299,
      OriginalPrice:399
    },
    {
      img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/314/284314/1_main_286314_1280.jpg",
      title:"滇美香格里拉苦荞茶 500g*8袋",
      money:299,
      OriginalPrice:399
    },
    {
      img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/227/282227/1_main_282227_1280.jpg",
      title:"TOPUS钛度多功能破壁料理辅食机破壁机HB-K16新款升级",
      money:599,
      OriginalPrice:799
    },
    {
      img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/393/284893/1_main_284893_1280.jpg",
      title:"冰岛进口野生十年红筋参 400g*15包 5-6根/包 （固形物≥95%）赠鲍汁20g*40袋",
      money:799,
      OriginalPrice:999
    },
    {
      img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/52/284552/1_main_3_1280.jpg",
      title:"千金小暖中腰精油内裤三条组(内赠精油膏*1件）",
      money:99,
      OriginalPrice:199
    },
    {
      img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/170/280670/1_main_280670_1280.jpg",
      title:"哈仕奇保温水具五件套（保温壶2L+旅行壶1.1L+焖烧罐900ml+保温杯500ml+养生壶1个）",
      money:398,
      OriginalPrice:498
    },
    {
      img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/314/284314/1_main_286314_1280.jpg",
      title:"滇美香格里拉苦荞茶 500g*8袋",
      money:299,
      OriginalPrice:399
    },
    {
      img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/427/287427/1_main_1_1280.jpg",
      title:"库思特智能恒温对流式取暖器S2（湖南卫视《亲爱的客栈》同款）",
      money:799,
      OriginalPrice:799
    },
    {
      img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/117/278617/1_main_111_1280.jpg",
      title:"莎曼尼护腰护颈乳胶套组（床垫5cm*1件+乳胶被*1件+保护套*1件）1.8M",
      money:999,
      OriginalPrice:1899
    },
    {
      img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/155/285155/1_main_285155_1280.jpg",
      title:"绿森尚品桑葚干 120g*15瓶",
      money:298,
      OriginalPrice:398
    },
    {
      img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/15/286515/1_main_1_1280.jpg",
      title:"好易点(Hooeasy)高端智能晾衣机T6S",
      money:1799,
      OriginalPrice:1999
    },
    {
      img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/161/277161/1_main_277161_1280.jpg",
      title:"立兴FD冻干玉米粉 160g*10盒",
      money:299,
      OriginalPrice:399
    },
    {
      img:"https://ecimg.happigo.com/data/upload/shop/store/goods/1/28/278528/1_main_278528_1280.jpg",
      title:"中恩中科严选祐糖强化营养素谷物膳食 12g*10袋*6盒",
      money:499,
      OriginalPrice:699
    },
  ]
  res.send(arr);
});

//热销
module.exports = router;
