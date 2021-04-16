import axios from 'axios'
import { ElMessage } from 'element-plus'
import router from '../router'
const http = axios.create({
  baseURL: 'http://localhost:3000/admin/api'
})
// 添加请求拦截器
http.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if (sessionStorage.token) {
    config.headers.Authorization = 'Bearer ' + sessionStorage.token
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

http.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (err) {
  // 对响应错误做点什么
  ElMessage.error(err.response.data.message)
  console.log('111');
  if(err.response.status === 401) {
    console.log('111');
    router.push('/login')
  }
  return Promise.reject(err);

});

export default http