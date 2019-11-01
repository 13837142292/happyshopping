var express = require('express');
var router = express.Router();

/* GET leftlist*/
router.get('/leftList', function (req, res, next) {
  arr = [
    {
      id: 1,
      tit: "个护美妆",
    },
    {
      id: 2,
      tit: "食品健康"
    },
    {
      id: 3,
      tit: "餐厨日用",
    },
    {
      id: 4,
      tit: "服装配饰"
    },
    {
      id: 5,
      tit: "布艺家纺",
    },
    {
      id: 6,
      tit: "家电数码",
    },
    {
      id: 7,
      tit: "母婴呵护",
    },
    {
      id: 8,
      tit: "芒果汽车",
    },
    {
      id: 9,
      tit: "品牌馆",
    }
  ]
  res.send(arr);
});
// get rightList
router.get('/rightList', function (req, res, next) {
  var id = req.query.id;
  var arr = [];
  if (id == 1) {
    arr = [
      {
        title: "面部护理",
        list: [
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/93.png",
            msg: "面膜"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/90.png",
            msg: "乳液面霜"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/94.png",
            msg: "精华"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/96.png",
            msg: "护肤套装"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/97.png",
            msg: "防晒隔离"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/89.png",
            msg: "爽肤水"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/95.png",
            msg: "洁面乳"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/88.png",
            msg: "眼部护理"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/92.png",
            msg: "眼膜"
          },
        ]
      },
      {
        title: "香水彩妆",
        list: [
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/121.png",
            msg: "唇膏唇彩"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/126.png",
            msg: "遮瑕"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/127.png",
            msg: "粉底粉饼"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/125.png",
            msg: "睫毛膏"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/124.png",
            msg: "眉笔"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/122.png",
            msg: "眼影/眼线"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/128.png",
            msg: "彩妆工具"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/120.png",
            msg: "卸妆"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/117.png",
            msg: "女士香水"
          },
        ]
      },
      {
        title: "美发护发",
        list: [
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/99.png",
            msg: "洗发水"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/100.png",
            msg: "护发素"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/101.png",
            msg: "洗护套装"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/103.png",
            msg: "卷发棒"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/104.png",
            msg: "电吹风"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/102.png",
            msg: "染发"
          },
        ]
      },
      {
        title: "身体护理",
        list: [
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class/1100/05889626701031510.jpg",
            msg: "私密护理"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class/1100/05889626398551421.jpg",
            msg: "手工皂"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class/1100/05889610014611514.jpg",
            msg: "美容养颜"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class/1100/05889610872282857.jpg",
            msg: "磨砂膏"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/110.png",
            msg: "沐浴露"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/108.png",
            msg: "手足护理"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/109.png",
            msg: "身体乳"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/105.png",
            msg: "香薰精油"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/113.png",
            msg: "卫生巾"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/106.png",
            msg: "纤体瘦身"
          },
        ]
      },
      {
        title: "美容工具",
        list: [
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/137.png",
            msg: "美容仪"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/139.png",
            msg: "洁面仪"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/140.png",
            msg: "理发器"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/133.png",
            msg: "剃须刀"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/132.png",
            msg: "剃毛器"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/134.png",
            msg: "喷雾器"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/138.png",
            msg: "美容配件"
          }
        ]
      },
      {
        title: "口腔护理",
        list: [
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/114.png",
            msg: "牙刷"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/115.png",
            msg: "牙膏"
          }
        ]
      }

    ]
  } else if (id == 2) {
    arr = [
      {
        title: "饮料冲饮",
        list: [
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class/1093/05912118169295012.jpg",
            msg: "牛奶/酸奶"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/71.png",
            msg: "麦片/代餐粉"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class/1093/05912118743188649.jpg",
            msg: "蜂蜜"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class/1093/05756605421698748.jpg",
            msg: "冲调饮品"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/68.png",
            msg: "红糖/黑糖"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/70.png",
            msg: "咖啡"
          },
        ]
      },
      {
        title: "粮油调味",
        list: [
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/72.png",
            msg: "米面"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/73.png",
            msg: "五谷"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/74.png",
            msg: "食用油"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class/1094/05705601004101141.jpg",
            msg: "速食食品"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/76.png",
            msg: "南北干货"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/77.png",
            msg: "调料"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class/1094/05612086593355496.jpg",
            msg: "腊味"
          },
        ]
      },
      {
        title: "酒水茗茶",
        list: [
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/64.png",
            msg: "白酒"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/65.png",
            msg: "进口红酒"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class/1092/05596782712795776.jpg",
            msg: "国产红酒"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class/1092/05779835045862004.jpg",
            msg: "啤酒"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/62.png",
            msg: "黑茶/普洱"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/61.png",
            msg: "红茶/绿茶"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/63.png",
            msg: "花草茶"
          },
        ]
      },
      {
        title: "休闲食品",
        list: [
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/55.png",
            msg: "坚果/果干"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/56.png",
            msg: "饼干糕点"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/57.png",
            msg: "糖果/巧克力"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/58.png",
            msg: "零食"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/59.png",
            msg: "麻辣零食"
          },
        ]
      },
      {
        title: "营养保健",
        list: [
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/84.png",
            msg: "红枣/枸杞"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/81.png",
            msg: "女性保养"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/83.png",
            msg: "阿胶/燕窝"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/86.png",
            msg: "传统滋补"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/85.png",
            msg: "基础保健"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/82.png",
            msg: "瘦身/酵素"
          },
        ]
      },
      {
        title: "生鲜食品",
        list: [
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/78.png",
            msg: "新鲜果蔬"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/79.png",
            msg: "肉类"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/80.png",
            msg: "家禽蛋类"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class/1095/05596782259518399.jpg",
            msg: "大闸蟹"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class/1095/05612341740621245.jpg",
            msg: "生鲜水产"
          },
        ]
      }
    ]
  } else if (id == 3) {
    arr = [
      {
        title: "厨房电器",
        list: [
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/28.png",
            msg: "净水设备"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/31.png",
            msg: "烤箱/微波炉"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/143.png",
            msg: "电饭煲"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/144.png",
            msg: "电压力/电蒸锅"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/30.png",
            msg: "炉具"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/20.png",
            msg: "榨汁/原汁机"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/21.png",
            msg: "料理/研磨机"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/19.png",
            msg: "破壁/豆浆机"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/22.png",
            msg: "酵素/酸奶机"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/29.png",
            msg: "养生/电水壶"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/23.png",
            msg: "吐司/煮蛋器"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/24.png",
            msg: "面包/面包机"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/149.png",
            msg: "电炖/电火锅"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class/1066/05632975234985642.jpg",
            msg: "消毒/保洁柜"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/32.png",
            msg: "洗碗机"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/33.png",
            msg: "烟灶消热"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/25.png",
            msg: "冰淇淋机"
          }
        ]
      },
      {
        title: "健康保健",
        list: [
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class/1132/05860209410121325.jpg",
            msg: "健身用品"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class/1132/05860209658195857.jpg",
            msg: "保健按摩"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/170.png",
            msg: "运动电子"
          },
        ]
      },
      {
        title: "烹饪锅具",
        list: [
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/142.png",
            msg: "透明锅"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/146.png",
            msg: "炒锅/煎锅"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/147.png",
            msg: "汤锅/奶锅"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/141.png",
            msg: "大牌锅具"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/145.png",
            msg: "高速快锅"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/148.png",
            msg: "煲"
          },
        ]
      },
      {
        title: "清洁收纳",
        list: [
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/156.png",
            msg: "清洁用品"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/157.png",
            msg: "收纳用品"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/158.png",
            msg: "晾晒置物"
          },
        ]
      },
      {
        title: "厨房用具",
        list: [
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/10.png",
            msg: "刀"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/11.png",
            msg: "砧板/托盘"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/11.png",
            msg: "保鲜盒/罐"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/12.png",
            msg: "米箱"
          },
        ]
      },
      {
        title: "生活用品",
        list: [
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/150.png",
            msg: "个人清洁"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/151.png",
            msg: "厨房用品"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/152.png",
            msg: "日常用品"
          },
        ]
      },
      {
        title: "餐饮用具",
        list: [
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/1.png",
            msg: "碗碟"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/2.png",
            msg: "筷勺/刀叉"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/4.png",
            msg: "运动水杯"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/8.png",
            msg: "保温杯壶"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/9.png",
            msg: "焖烧罐"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/3.png",
            msg: "凉水壶/马克杯"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/5.png",
            msg: "玻璃杯"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/6.png",
            msg: "红酒杯"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/7.png",
            msg: "茶具/咖啡杯"
          },
        ]
      },
      {
        title: "家庭建材",
        list: [
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/159.png",
            msg: "照片灯具"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/161.png",
            msg: "卫浴用品"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/202.png",
            msg: "其他"
          },
        ]
      },
      {
        title: "厨房配件",
        list: [
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/18.png",
            msg: "保温饭盒"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/13.png",
            msg: "置物架"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/15.png",
            msg: "冰箱收纳"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/14.png",
            msg: "调料收纳"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/16.png",
            msg: "厨房小工具"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/17.png",
            msg: "厨房清洁"
          },
        ]
      },
      {
        title: "户外休闲",
        list: [
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/165.png",
            msg: "伞具"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/166.png",
            msg: "户外用品"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/167.png",
            msg: "背包"
          },
        ]
      }
    ]
  } else if (id == 4) {
    arr = [
      {
        title: "女士服装",
        list: [
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/200.png",
            msg: "上衣"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class/1134/05961342514835034.jpg",
            msg: "裙装"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/174.png",
            msg: "裤装"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/175.png",
            msg: "外套"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/176.png",
            msg: "羽绒/羊绒"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/177.png",
            msg: "皮草/大衣"
          },
        ]
      },
      {
        title: "男士服装",
        list: [
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/171.png",
            msg: "上衣"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class/1133/05961333859145020.jpg",
            msg: "下装"
          },
        ]
      },
      {
        title: "内衣",
        list: [
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/181.png",
            msg: "文胸"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/182.png",
            msg: "内裤"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/183.png",
            msg: "裤袜"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/184.png",
            msg: "家居服"
          },
        ]
      },
      {
        title: "鞋靴",
        list: [
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/49.png",
            msg: "男鞋"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/50.png",
            msg: "女鞋"
          },
        ]
      },
      {
        title: "箱包",
        list: [
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/185.png",
            msg: "旅行箱"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/186.png",
            msg: "双肩包"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/187.png",
            msg: "单肩包"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/188.png",
            msg: "钱包"
          },
        ]
      },
      {
        title: "眼镜配饰",
        list: [
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/189.png",
            msg: "眼镜"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/190.png",
            msg: "配饰"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/201.png",
            msg: "其他"
          },
        ]
      },
      {
        title: "运动/户外",
        list: [
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/179.png",
            msg: "运动服饰"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/180.png",
            msg: "泳衣"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/178.png",
            msg: "其他"
          },
        ]
      },
      {
        title: "钟表",
        list: [
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/53.png",
            msg: "男表"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/54.png",
            msg: "女表"
          },
        ]
      },
      {
        title: "珠宝藏品",
        list: [
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/51.png",
            msg: "珠宝饰品"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/52.png",
            msg: "投资收藏"
          }
        ]
      }
    ]

  } else if (id == 5) {
    arr = [
      {
        title: "床品套件",
        list: [
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/34.png",
            msg: "枕头"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/35.png",
            msg: "套件"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/36.png",
            msg: "被子"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/37.png",
            msg: "床垫/床罩"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/38.png",
            msg: "薄被毯子"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/39.png",
            msg: "凉席"
          },
        ]
      },
      {
        title: "布艺软饰",
        list: [
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/40.png",
            msg: "窗帘"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/41.png",
            msg: "地垫"
          },
        ]
      },
      {
        title: "抱枕靠背",
        list: [
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/42.png",
            msg: "抱枕"
          }
        ]
      },
      {
        title: "毛巾浴巾",
        list: [
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/43.png",
            msg: "毛巾"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/44.png",
            msg: "浴巾"
          },
        ]
      }
    ]

  } else if (id == 6) {
    arr = [
      {
        title: "生活家电",
        list: [
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/46.png",
            msg: "冷暖家电"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/45.png",
            msg: "清洁电器"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/47.png",
            msg: "照明电器"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/48.png",
            msg: "净化加湿器"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class/1076/05979257110657456.jpg",
            msg: "健康电器"
          },
        ]
      },
      {
        title: "大家电",
        list: [
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/191.png",
            msg: "冰箱空调"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/192.png",
            msg: "洗衣机"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/193.png",
            msg: "电视机"
          },
        ]
      },
      {
        title: "手机通讯",
        list: [
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/194.png",
            msg: "智能手机"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/195.png",
            msg: "耳机音箱"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/196.png",
            msg: "数码配件"
          },
        ]
      },
      {
        title: "电脑影音",
        list: [
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/197.png",
            msg: "电脑"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/198.png",
            msg: "音响"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/199.png",
            msg: "电脑配件"
          },
        ]
      }
    ]

  } else if (id == 7) {
    arr = [
      {
        title: "婴幼护理",
        list: [
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/207.png",
            msg: "婴幼护理"
          },
        ]
      },
      {
        title: "孕童服饰",
        list: [
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/209.png",
            msg: "孕童服饰"
          }
        ]
      },
      {
        title: "早教玩具",
        list: [
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/210.png",
            msg: "早教玩具"
          }
        ]
      }
    ]

  } else if (id == 8) {
    arr = [
      {
        title: "汽配周边",
        list: [
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/129.png",
            msg: "行车记录"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/130.png",
            msg: "手机吸盘"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/common/goods_class_sub/131.png",
            msg: "车载香水"
          },

        ]
      }
    ]
  } else if (id == 9) {
    arr = [
      {
        title: "个护美妆",
        list: [
          {
            img: "https://ecimg.happigo.com/data/upload/shop/brand/05134417343720876.jpg",
            msg: "京城之霜"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/brand/05221798162552746.jpg",
            msg: "兰芝"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/brand/05127512174986573.jpg",
            msg: "御泥坊"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/brand/05971632446068369.jpg",
            msg: "雅诗兰黛"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/brand/05515326926166662.jpg",
            msg: "WHOO后"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/brand/05439537713883786.jpg",
            msg: "吕"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/brand/05512054391361660.jpg",
            msg: "韩后"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/brand/05515302238371228.jpg",
            msg: "SK-II"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/brand/05755629141133584.jpg",
            msg: "兰蔻"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/brand/05515424796975362.jpg",
            msg: "诗蒂兰"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/brand/05440156373435330.jpg",
            msg: "洛神诗"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/brand/05515352458209148.jpg",
            msg: "森田"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/brand/05515454058718115.jpg",
            msg: "玉兰油"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/brand/05651779227188151.jpg",
            msg: "美迪惠尔"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/brand/05755631819223168.jpg",
            msg: "资生堂"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/brand/05751344502596428.jpg",
            msg: "雪花秀"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/brand/05507519001811274.jpg",
            msg: "欧莱雅loreal"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/brand/05127407522960401.jpg",
            msg: "韩束"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/brand/05715757343386179.jpg",
            msg: "雅顿"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/brand/05705526583229428.jpg",
            msg: "科颜氏"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/brand/05515333580138374.jpg",
            msg: "迪奥"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/brand/05705525160590779.jpg",
            msg: "蝶翠诗"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/brand/05715757588067357.jpg",
            msg: "纪梵希"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/brand/05439502266591044.jpg",
            msg: "蒂佳婷"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/brand/05860086978812949.jpg",
            msg: "高姿"
          },
          {
            img: "https://ecimg.happigo.com/data/upload/shop/brand/05883592877514354.jpg",
            msg: "青彩"
          },
        ]
      }
    ]
  }

  res.send(arr);
});
//搜索页面
router.get('/serchList', function (req, res, next) {
  arr = [
    {
      title: "热门搜索",
      con: [
        {
          id: 1,
          txt: "羽绒服"
        },
        {
          id: 2,
          txt: "大衣"
        },
        {
          id: 3,
          txt: "洗发水"
        },
        {
          id: 4,
          txt: "蚕丝被"
        },
        {
          id: 5,
          txt: "牛尔"
        },
        {
          id: 6,
          txt: "雅诗兰黛"
        },
        {
          id: 7,
          txt: "眼霜"
        },
        {
          id: 8,
          txt: "面膜"
        },
      ]
    },
    {
      title: "热门分类",
      con: [
        {
          id: 1,
          txt: "面膜"
        },
        {
          id: 2,
          txt: "女性保养"
        },
        {
          id: 3,
          txt: "牛奶/酸奶"
        },
        {
          id: 4,
          txt: "新鲜果蔬"
        },
        {
          id: 5,
          txt: "炒锅/煎锅"
        },
        {
          id: 6,
          txt: "清洁用品"
        },
        {
          id: 7,
          txt: "羽绒/羊绒"
        },
        {
          id: 8,
          txt: "生鲜水产"
        },
      ]
    }
  ];
  res.send(arr);
});
//排序列表
router.get('/sortList', function (req, res, next) {
  var serchcon = req.query.serchcon;
  var title = req.query.title;
  console.log(serchcon)
  console.log(title == '综合');
  var arr = [];
  console.log(serchcon == "雅诗兰黛")
  if (serchcon == "羽绒服") {

    arr = [
      {
        img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/309/279809/1_main_279809_360.jpg",
        dract: "三防面料 穿搭有型 ",
        detail: "加拿大SaintDyfan强防寒95%白鹅绒服（男款）",
        rectPrice: "￥1699",
        price: "￥1999",
      },
      {
        img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/309/279809/1_main_279809_360.jpg",
        dract: "三防面料 穿搭有型 ",
        detail: "加拿大SaintDyfan强防寒95%白鹅绒服（男款）",
        rectPrice: "￥1699",
        price: "￥1999",
      },
      {
        img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/309/279809/1_main_279809_360.jpg",
        dract: "三防面料 穿搭有型 ",
        detail: "加拿大SaintDyfan强防寒95%白鹅绒服（男款）",
        rectPrice: "￥1699",
        price: "￥1999",
      },
      {
        img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/309/279809/1_main_279809_360.jpg",
        dract: "三防面料 穿搭有型 ",
        detail: "加拿大SaintDyfan强防寒95%白鹅绒服（男款）",
        rectPrice: "￥1699",
        price: "￥1999",
      },
      {
        img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/309/279809/1_main_279809_360.jpg",
        dract: "三防面料 穿搭有型 ",
        detail: "加拿大SaintDyfan强防寒95%白鹅绒服（男款）",
        rectPrice: "￥1699",
        price: "￥1999",
      },
      {
        img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/309/279809/1_main_279809_360.jpg",
        dract: "三防面料 穿搭有型 ",
        detail: "加拿大SaintDyfan强防寒95%白鹅绒服（男款）",
        rectPrice: "￥1699",
        price: "￥1999",
      },
      {
        img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/309/279809/1_main_279809_360.jpg",
        dract: "三防面料 穿搭有型 ",
        detail: "加拿大SaintDyfan强防寒95%白鹅绒服（男款）",
        rectPrice: "￥1699",
        price: "￥1999",
      },
      {
        img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/309/279809/1_main_279809_360.jpg",
        dract: "三防面料 穿搭有型 ",
        detail: "加拿大SaintDyfan强防寒95%白鹅绒服（男款）",
        rectPrice: "￥1699",
        price: "￥1999",
      },
      {
        img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/309/279809/1_main_279809_360.jpg",
        dract: "三防面料 穿搭有型 ",
        detail: "加拿大SaintDyfan强防寒95%白鹅绒服（男款）",
        rectPrice: "￥1699",
        price: "￥1999",
      },
      {
        img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/309/279809/1_main_279809_360.jpg",
        dract: "三防面料 穿搭有型 ",
        detail: "加拿大SaintDyfan强防寒95%白鹅绒服（男款）",
        rectPrice: "￥1699",
        price: "￥1999",
      },
      {
        img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/309/279809/1_main_279809_360.jpg",
        dract: "三防面料 穿搭有型 ",
        detail: "加拿大SaintDyfan强防寒95%白鹅绒服（男款）",
        rectPrice: "￥1699",
        price: "￥1999",
      },
      {
        img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/309/279809/1_main_279809_360.jpg",
        dract: "三防面料 穿搭有型 ",
        detail: "加拿大SaintDyfan强防寒95%白鹅绒服（男款）",
        rectPrice: "￥1699",
        price: "￥1999",
      }
    ]
  } else if (serchcon == "雅诗兰黛") {

    if (title == "综合") {
      arr = [
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/399/285899/1_main_285899_360.jpg",
          dract: "休护肌底 时刻年轻 ",
          detail: "(跨境)美国雅诗兰黛高能小棕瓶面部精华20ml",
          rectPrice: "￥529",
          price: "￥837",
        },
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/356/255856/1_main_255856_360.jpg",
          dract: "不怕蓝光 任性刷屏 ",
          detail: "(跨境)美国雅诗兰黛 新款特润抗蓝光眼霜15ml",
          rectPrice: "￥398",
          price: "￥597",
        },
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/38/272538/1_main_272538_360.jpg",
          dract: "温和清洁 舒适清新 ",
          detail: "(跨境)美国雅诗兰黛净莹柔肤洁面乳30ml*3支",
          rectPrice: "￥99",
          price: "￥132",
        },
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/402/279902/1_main_279902_360.jpg",
          dract: "雕琢年轻轮廓 ",
          detail: "(跨境)美国雅诗兰黛弹性紧实晚霜15ml+日霜15ml+眼霜5ml",
          rectPrice: "￥218",
          price: "￥327",
        },
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/261/283761/1_main_02_360.jpg",
          dract: "滋润着色 饱满丰唇 ",
          detail: "(跨境)美国雅诗兰黛花漾倾慕红管限量唇膏260蔷薇色/1.2g*2支",
          rectPrice: "￥99",
          price: "￥148",
        },
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/270/273270/1_main_273270_360.jpg",
          dract: "释放肌肤活力 ",
          detail: "(跨境)美国雅诗兰黛特润修护肌透精华露15ml",
          rectPrice: "￥149",
          price: "￥224",
        },
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/271/273271/1_main_273271_360.jpg",
          dract: "清透润泽好吸收 ",
          detail: "(跨境)美国雅诗兰黛赋活原生液50ml*2瓶",
          rectPrice: "￥218",
          price: "￥327",
        },
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/273/273273/1_main_273273_360.jpg",
          dract: "不见干松纹 ",
          detail: "(跨境)美国雅诗兰黛多效智妍精华面霜15ml*2瓶",
          rectPrice: "￥198",
          price: "￥297",
        },

      ]
    }
    if (title == "销售") {
      arr = [
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/309/279809/1_main_279809_360.jpg",
          dract: "三防面料 穿搭有型 ",
          detail: "加拿大SaintDyfan强防寒95%白鹅绒服（男款）",
          rectPrice: "￥1699",
          price: "￥1999",
        },
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/309/279809/1_main_279809_360.jpg",
          dract: "三防面料 穿搭有型 ",
          detail: "加拿大SaintDyfan强防寒95%白鹅绒服（男款）",
          rectPrice: "￥1699",
          price: "￥1999",
        },
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/309/279809/1_main_279809_360.jpg",
          dract: "三防面料 穿搭有型 ",
          detail: "加拿大SaintDyfan强防寒95%白鹅绒服（男款）",
          rectPrice: "￥1699",
          price: "￥1999",
        },
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/309/279809/1_main_279809_360.jpg",
          dract: "三防面料 穿搭有型 ",
          detail: "加拿大SaintDyfan强防寒95%白鹅绒服（男款）",
          rectPrice: "￥1699",
          price: "￥1999",
        },
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/309/279809/1_main_279809_360.jpg",
          dract: "三防面料 穿搭有型 ",
          detail: "加拿大SaintDyfan强防寒95%白鹅绒服（男款）",
          rectPrice: "￥1699",
          price: "￥1999",
        },
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/309/279809/1_main_279809_360.jpg",
          dract: "三防面料 穿搭有型 ",
          detail: "加拿大SaintDyfan强防寒95%白鹅绒服（男款）",
          rectPrice: "￥1699",
          price: "￥1999",
        },
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/309/279809/1_main_279809_360.jpg",
          dract: "三防面料 穿搭有型 ",
          detail: "加拿大SaintDyfan强防寒95%白鹅绒服（男款）",
          rectPrice: "￥1699",
          price: "￥1999",
        },
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/309/279809/1_main_279809_360.jpg",
          dract: "三防面料 穿搭有型 ",
          detail: "加拿大SaintDyfan强防寒95%白鹅绒服（男款）",
          rectPrice: "￥1699",
          price: "￥1999",
        },
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/309/279809/1_main_279809_360.jpg",
          dract: "三防面料 穿搭有型 ",
          detail: "加拿大SaintDyfan强防寒95%白鹅绒服（男款）",
          rectPrice: "￥1699",
          price: "￥1999",
        },
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/309/279809/1_main_279809_360.jpg",
          dract: "三防面料 穿搭有型 ",
          detail: "加拿大SaintDyfan强防寒95%白鹅绒服（男款）",
          rectPrice: "￥1699",
          price: "￥1999",
        },
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/309/279809/1_main_279809_360.jpg",
          dract: "三防面料 穿搭有型 ",
          detail: "加拿大SaintDyfan强防寒95%白鹅绒服（男款）",
          rectPrice: "￥1699",
          price: "￥1999",
        },
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/309/279809/1_main_279809_360.jpg",
          dract: "三防面料 穿搭有型 ",
          detail: "加拿大SaintDyfan强防寒95%白鹅绒服（男款）",
          rectPrice: "￥1699",
          price: "￥1999",
        }
      ]
    }
    if (title == "新品") {
      arr = [
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/402/279902/1_main_279902_360.jpg",
          dract: "雕琢年轻轮廓 ",
          detail: "(跨境)美国雅诗兰黛弹性紧实晚霜15ml+日霜15ml+眼霜5ml",
          rectPrice: "￥218",
          price: "￥327",
        },
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/402/279902/1_main_279902_360.jpg",
          dract: "雕琢年轻轮廓 ",
          detail: "(跨境)美国雅诗兰黛弹性紧实晚霜15ml+日霜15ml+眼霜5ml",
          rectPrice: "￥218",
          price: "￥327",
        },
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/402/279902/1_main_279902_360.jpg",
          dract: "雕琢年轻轮廓 ",
          detail: "(跨境)美国雅诗兰黛弹性紧实晚霜15ml+日霜15ml+眼霜5ml",
          rectPrice: "￥218",
          price: "￥327",
        },
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/402/279902/1_main_279902_360.jpg",
          dract: "雕琢年轻轮廓 ",
          detail: "(跨境)美国雅诗兰黛弹性紧实晚霜15ml+日霜15ml+眼霜5ml",
          rectPrice: "￥218",
          price: "￥327",
        },
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/402/279902/1_main_279902_360.jpg",
          dract: "雕琢年轻轮廓 ",
          detail: "(跨境)美国雅诗兰黛弹性紧实晚霜15ml+日霜15ml+眼霜5ml",
          rectPrice: "￥218",
          price: "￥327",
        },
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/402/279902/1_main_279902_360.jpg",
          dract: "雕琢年轻轮廓 ",
          detail: "(跨境)美国雅诗兰黛弹性紧实晚霜15ml+日霜15ml+眼霜5ml",
          rectPrice: "￥218",
          price: "￥327",
        },
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/402/279902/1_main_279902_360.jpg",
          dract: "雕琢年轻轮廓 ",
          detail: "(跨境)美国雅诗兰黛弹性紧实晚霜15ml+日霜15ml+眼霜5ml",
          rectPrice: "￥218",
          price: "￥327",
        },
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/402/279902/1_main_279902_360.jpg",
          dract: "雕琢年轻轮廓 ",
          detail: "(跨境)美国雅诗兰黛弹性紧实晚霜15ml+日霜15ml+眼霜5ml",
          rectPrice: "￥218",
          price: "￥327",
        },
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/402/279902/1_main_279902_360.jpg",
          dract: "雕琢年轻轮廓 ",
          detail: "(跨境)美国雅诗兰黛弹性紧实晚霜15ml+日霜15ml+眼霜5ml",
          rectPrice: "￥218",
          price: "￥327",
        },
      ]
    }
    if (title == "价格上") {
      arr = [
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/356/255856/1_main_255856_360.jpg",
          dract: "不怕蓝光 任性刷屏 ",
          detail: "(跨境)美国雅诗兰黛 新款特润抗蓝光眼霜15ml",
          rectPrice: "￥398",
          price: "￥597",
        },
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/356/255856/1_main_255856_360.jpg",
          dract: "不怕蓝光 任性刷屏 ",
          detail: "(跨境)美国雅诗兰黛 新款特润抗蓝光眼霜15ml",
          rectPrice: "￥398",
          price: "￥597",
        },
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/356/255856/1_main_255856_360.jpg",
          dract: "不怕蓝光 任性刷屏 ",
          detail: "(跨境)美国雅诗兰黛 新款特润抗蓝光眼霜15ml",
          rectPrice: "￥398",
          price: "￥597",
        },
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/356/255856/1_main_255856_360.jpg",
          dract: "不怕蓝光 任性刷屏 ",
          detail: "(跨境)美国雅诗兰黛 新款特润抗蓝光眼霜15ml",
          rectPrice: "￥398",
          price: "￥597",
        },
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/356/255856/1_main_255856_360.jpg",
          dract: "不怕蓝光 任性刷屏 ",
          detail: "(跨境)美国雅诗兰黛 新款特润抗蓝光眼霜15ml",
          rectPrice: "￥398",
          price: "￥597",
        },
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/356/255856/1_main_255856_360.jpg",
          dract: "不怕蓝光 任性刷屏 ",
          detail: "(跨境)美国雅诗兰黛 新款特润抗蓝光眼霜15ml",
          rectPrice: "￥398",
          price: "￥597",
        },
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/356/255856/1_main_255856_360.jpg",
          dract: "不怕蓝光 任性刷屏 ",
          detail: "(跨境)美国雅诗兰黛 新款特润抗蓝光眼霜15ml",
          rectPrice: "￥398",
          price: "￥597",
        },
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/356/255856/1_main_255856_360.jpg",
          dract: "不怕蓝光 任性刷屏 ",
          detail: "(跨境)美国雅诗兰黛 新款特润抗蓝光眼霜15ml",
          rectPrice: "￥398",
          price: "￥597",
        },
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/356/255856/1_main_255856_360.jpg",
          dract: "不怕蓝光 任性刷屏 ",
          detail: "(跨境)美国雅诗兰黛 新款特润抗蓝光眼霜15ml",
          rectPrice: "￥398",
          price: "￥597",
        },
      ]
    }
    if (title == "价格下") {
      arr = [
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/261/283761/1_main_02_360.jpg",
          dract: "滋润着色 饱满丰唇 ",
          detail: "(跨境)美国雅诗兰黛花漾倾慕红管限量唇膏260蔷薇色/1.2g*2支",
          rectPrice: "￥99",
          price: "￥148",
        },
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/261/283761/1_main_02_360.jpg",
          dract: "滋润着色 饱满丰唇 ",
          detail: "(跨境)美国雅诗兰黛花漾倾慕红管限量唇膏260蔷薇色/1.2g*2支",
          rectPrice: "￥99",
          price: "￥148",
        },
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/261/283761/1_main_02_360.jpg",
          dract: "滋润着色 饱满丰唇 ",
          detail: "(跨境)美国雅诗兰黛花漾倾慕红管限量唇膏260蔷薇色/1.2g*2支",
          rectPrice: "￥99",
          price: "￥148",
        },
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/261/283761/1_main_02_360.jpg",
          dract: "滋润着色 饱满丰唇 ",
          detail: "(跨境)美国雅诗兰黛花漾倾慕红管限量唇膏260蔷薇色/1.2g*2支",
          rectPrice: "￥99",
          price: "￥148",
        },
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/261/283761/1_main_02_360.jpg",
          dract: "滋润着色 饱满丰唇 ",
          detail: "(跨境)美国雅诗兰黛花漾倾慕红管限量唇膏260蔷薇色/1.2g*2支",
          rectPrice: "￥99",
          price: "￥148",
        },
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/261/283761/1_main_02_360.jpg",
          dract: "滋润着色 饱满丰唇 ",
          detail: "(跨境)美国雅诗兰黛花漾倾慕红管限量唇膏260蔷薇色/1.2g*2支",
          rectPrice: "￥99",
          price: "￥148",
        },
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/261/283761/1_main_02_360.jpg",
          dract: "滋润着色 饱满丰唇 ",
          detail: "(跨境)美国雅诗兰黛花漾倾慕红管限量唇膏260蔷薇色/1.2g*2支",
          rectPrice: "￥99",
          price: "￥148",
        },
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/261/283761/1_main_02_360.jpg",
          dract: "滋润着色 饱满丰唇 ",
          detail: "(跨境)美国雅诗兰黛花漾倾慕红管限量唇膏260蔷薇色/1.2g*2支",
          rectPrice: "￥99",
          price: "￥148",
        },
        {
          img: "https://ecimg.happigo.com/data/upload/shop/store/goods/1/261/283761/1_main_02_360.jpg",
          dract: "滋润着色 饱满丰唇 ",
          detail: "(跨境)美国雅诗兰黛花漾倾慕红管限量唇膏260蔷薇色/1.2g*2支",
          rectPrice: "￥99",
          price: "￥148",
        },
      ]
    }
  }
  res.send(arr);
});
module.exports = router;
