var express = require('express');
var router = express.Router();
// 引入fs模块
var fs = require('fs'); 
let result={};
// 登录
router.post('/login',(req,res) => {
// 读取文件
 //2.1 从本地读取数据
 fs.readFile('../users.txt','utf-8',function(err,data){
  let arr;
  if(!err){
      arr=JSON.parse(data);//将本地数据转换为数组对象
      arr.push(req.body);//将新注册用户添加进去
  }else{
      console.log('读取失败:',err);
      arr=[];//读取失败，创建新数组，保存人员注册信息
      arr.push(req.body);           
  }
   //将数组(数据存入本地)
   console.log('最终数据：',arr);
   //2.2 将数存入本地
  fs.writeFile("../users.txt",JSON.stringify(arr),function(error){
      if(!error){
          result.code='200';
          result.msg="注册成功！";
          result.username=req.body.username;
      }else{
          result.code='403';
          result.msg='注册失败';                
      }
      res.send(JSON.stringify(result));
      res.end();
  });
});


  
      
});

module.exports = router;
