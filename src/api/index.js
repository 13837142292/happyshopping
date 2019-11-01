//封装函数

//1.获取banner图
import axios from "axios"
//默认地址，会自动进行拼接
axios.defaults.baseURL="http://127.0.0.1:3000/"

//数据拦截
axios.interceptors.response.use(function (response){
    return response.data;
},function(error){
  return Promise.reject(error);
})
// 首页获取轮播图   index---
export function getIndexBanner(){
  return axios.get("banner");
}
//获取今日活动图    
export function getTodayList(){
  return axios.get('activity');
}
//获取美妆馆
export function getBeautyMakeup(){
  return axios.get('beautyMakeup');
}
//获取养生厨房
export function getKitchen(){
  return axios.get('kitchen');
}
//获取电子电器
export function getElectronic(){
  return axios.get('electronic');
}
// 服饰新鲜货
export function getAfresh(){
  return axios.get('afresh');
}
//美妆断货网
export function getOutStock(){
  return axios.get('outStock');
}
//获取热销
export function getSellwell(){
  return axios.get('sellwell');
}
//获取新品
export function getNews(){
  return axios.get('news');
}
//获取优选好物列表 index--end
export function getCarefullList(){
  return axios.get('goodThings');
}

//获取banner图
export function getshoppingCart(){
   return  axios.get("shoppingCart/shoppingCart")
}

//classifySort
//获取左侧列表
export function getleftList(){
  return axios.get("classifySort/leftList")
}




