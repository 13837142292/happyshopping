//封装函数

//1.获取banner图
import axios from "axios"
//默认地址，会自动进行拼接
axios.defaults.baseURL="http://127.0.0.1:3000/"

//数据拦截
axios.interceptors.response.use(
  config => {
    if (localStorage.getItem('Authorization')) {
      config.headers.Authorization = localStorage.getItem('Authorization');
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  })

//获取banner图
export function getshoppingCart(){
   return  axios.get("shoppingCart/shoppingCart")
}

//classifySort
//获取左侧列表
export function getleftList(){
  return axios.get("classifySort/leftList")
}
//获取账号密码
// export function logon(){
//   return axios.get("users/users")
// }




