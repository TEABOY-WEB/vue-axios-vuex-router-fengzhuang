import axios from 'axios';
import store from '../store';
import * as Types from '@/store/action-types'

class HttpServer {
  constructor() {
    this.baseURL = process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:7001';
    this.timeout = 3000;
    this.queue = {};
  }
  setInterceptor(instance, url) {
    instance.interceptors.request.use((config) => {

      if (Object.keys(this.queue).length == 0) {
        //当队列中有任务时，开启loading
      }
      let token = localStorage.getItem('token');
      if (token) {
        config.headers.authorization = token;
      }
      //记录请求的取消函数
      let CancelToken = axios.CancelToken;
      config.cancelToken = new CancelToken((c) => {
        //c就是当前取消请求的token，可以存放到vuex中，当页面切换或者组件销毁时执行
        store.commit(Types.SET_TOKEN, c)
      });
      this.queue[url] = true;
      return config; //这里时扩展请求配置
    })
    instance.interceptors.response.use((res) => {
      delete this.queue[url];
      if (Object.keys(this.queue).length == 0) {
        //当队列中的任务全部执行完成后，取消loading；
      }
      if (res.data.err === 0) {
        return res.data.data;
      } else {
        if (Object.keys(this.queue).length == 0) {
          //当队列中的任务全部执行完成后，取消loading；
        }
        return Promise.reject(res.data);
      }
    }, (err) => {
      return Promise.reject(err);
    })
  }
  request(options) {
    let instance = axios.create();
    let config = {
      baseURL: this.baseURL,
      timeout: this.timeout,
      ...options
    }
    this.setInterceptor(instance, config.url);
    return instance(config);
  }
  get(url, data = {}) {
    return this.request({
      url,
      method: 'get',
      ...data
    })
  }
  post(url, data = {}) {
    return this.request({
      url,
      method: 'post',
      data
    })
  }
}

export default new HttpServer;