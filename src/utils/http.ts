// axios基础的封装
import axios from 'axios'
import { ElMessage } from 'element-plus'
const httpInstance = axios.create({
  baseURL: '',
  timeout: 5000,
  headers: {
    "Content-Type": "application/json; charset=UTF-8;"
  },
  withCredentials: true, // 跨域请求时发送Cookie
})

// 拦截器
// axios请求拦截器
httpInstance.interceptors.request.use((config) => {
  config.headers = config.headers || {}
  if (localStorage.getItem('token')) {
    config.headers.token = localStorage.getItem('token') || ""
  }
  return config
})

// axios响应式拦截器
httpInstance.interceptors.response.use((res) => {
  const code: number = res.data.code
  if (code != 200) {
    return Promise.reject(res.data)
  }
  else {
    console.log("成功");
    return res.data;
  }
}, (err) => {
  console.log("错误");
  console.log(err);
  ElMessage({
    type: 'warning',
    message: err.response.data.message
  })
})
declare module 'axios' {
  interface AxiosInstance {
    (config: AxiosRequestConfig): Promise<any>
  }
}

export default httpInstance