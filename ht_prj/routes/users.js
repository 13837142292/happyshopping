var express = require('express');
var router = express.Router();
// 引入fs模块
var fs = require('fs');
// 引入jwt token工具
const JwtUtil = require('../public/jwt.js');
// let result = {};
// 登录
router.post('/users', (req, res) => {
  // 读取文件
  //2.1 从本地读取数据
  fs.readFile('../users.txt', 'utf-8', function (err, data) {
    let arr;
    if (!err) {
      arr = JSON.parse(data);//将本地数据转换为数组对象
      console.log(req.body.username);
      var userName=req.body.username;
      for (var i = 0; i < arr.length; i++) {
        if (req.body.username == arr[i].username) {
          console.log(arr[i].username);
          if (req.body.password == arr[i].password) {
            console.log(arr[i].password);
            // 登陆成功，添加token验证
            // let _id = result._id.toString();

            // 将用户id传入并生成token
            let jwt = new JwtUtil();
            let token = jwt.generateToken(userName);
            // 将 token 返回给客户端
            res.send({ status: 200, msg: '登陆成功', token: token });
            res.end();
            return;
          } else {
            res.send({ status: 200, msg: '密码错误' })
            return;
            // res.end()
          }
        } else {
          res.send({ status: 200, msg: '用户名错误' })
          return;
          // res.end()
        }
      }
    } else {
      res.send(err);
      res.end();
    }
    // var userName = req.body.username;
    // var pass = req.body.password;

    //   if(userName=='admin'&& pass==123456){
    //     // 登陆成功，添加token验证
    //     // let _id = result._id.toString();

    //     // 将用户id传入并生成token
    //     let jwt = new JwtUtil();
    //     let token = jwt.generateToken(userName);
    //     // 将 token 返回给客户端
    //     res.send({status:200,msg:'登陆成功',token:token});
    //   }else{
    //     res.send({status:200,msg:'登陆失败'})
    //   }

  });
})

module.exports = router;
