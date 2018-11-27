import axios from 'axios'
import qs from 'qs'

// const env = process.env.NODE_ENV //判断环境
// let baseURL = env == 'development'? '/api' : '/'


let baseURL = 'xxxxx'  //服务器地址

const instance = axios.create({
  baseURL,
  timeout: 15000,
});

const xhr = {
  get(url, data, config) {
    return new Promise((resolve, reject) => {
      instance.get(url, {params: data}, config).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  fetch(url, data, config,methods){
    return new Promise((resolve,reject)=>{
      instance[methods](url, data, config).then(res=>{
        resolve(res)
      }).catch(err=>{
        reject(err)
      })
    })
  },
  post(url, data, config){
    return this.fetch(url, data,config,'post')
  }
}


//请求拦截器新增非get请求添加请求头和token
instance.interceptors.request.use(config=>{
  if (config.method !== 'get'){
    config.data = qs.stringify(config.data)
  }
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  let token = window.localStorage.getItem('token') || window.sessionStorage.getItem('token')
  if (token) {
    config.headers.common['token'] = token
  }
  return config;
},error => {
  return Promise.reject(error)
})

export default xhr
