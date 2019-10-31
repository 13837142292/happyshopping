//封装函数


import axios from "axios"
//默认地址，会自动进行拼接
axios.defaults.baseURL="http://127.0.0.1:3000/"

//数据拦截
axios.interceptors.response.use(function (response){
    return response.data;
},function(error){
  return Promise.reject(error);
})
// 首页获取轮播图
export function getIndexBanner(){
  return axios.get("banner");
}
//获取今日活动图
export function getTodayList(){
  return axios.get('activity');
}


//获取购物车信息
export function getshoppingCart(){
   return  axios.get("shoppingCart/shoppingCart")
}

//classifySort
//获取左侧列表
export function getleftList(){
  return  axios.get("classifySort/leftList")
}
//获取右侧列表
export function getrightList(id){
  return  axios.get("classifySort/rightList?id="+id)
}
//获取搜索列表
export function getserchList(){
  return  axios.get("classifySort/serchList")
}
//获取排序列表
export function getsortList(con){
  return  axios.get("classifySort/sortList?serchcon="+con)
}




