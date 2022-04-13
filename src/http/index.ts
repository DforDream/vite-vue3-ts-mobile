import Request from './request';

const request = new Request({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 1000 * 10,
  interceptors:{
    requestInterceptors: (config) =>{
      console.log('实例请求拦截器');
      return config
    },
    responseInterceptors: (res) => {
      console.log('实例响应拦截器');
      return res
    }
  },
})

export function cancelRequest(url:string){
  return request.cancelRequest(url)
}
export function cancelAllRequest(){
  return request.cancelAllRequest()
}

export default request;