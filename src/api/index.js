//封装函数

//1.获取banner图
import axios from "axios"
//默认地址，会自动进行拼接
axios.defaults.baseURL="http://127.0.0.1:3000/shoppingCart/"

//数据拦截
axios.interceptors.response.use(function (response){
    return response.data;
},function(error){
  return Promise.reject(error);
})

//获取banner图
export function getshoppingCart(){
   return  axios.get("shoppingCart")
}




