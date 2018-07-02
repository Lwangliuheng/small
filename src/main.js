// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import store from './vuex/index'
import 'element-ui/lib/theme-chalk/index.css'
import '@/style/reset.css'
import 'viewerjs/dist/viewer.css'
Vue.prototype.ajaxUrl = "/boot-pub-survey-video"
//Vue.prototype.ajaxUrl = "/boot-pub-survey-video/"

// http请求拦截器
var loadinginstace = ''
axios.interceptors.request.use(config => {
  console.log(config.url)
  // element ui Loading方法
// if(config.url == '/boot-pub-survey-manage/monitor/v1/overview'){
//   loadinginstace = "";
// }else if(config.url == '/boot-pub-survey-manage/pub/survey/v1/page'){
//   loadinginstace = "";
// }else if(config.url == '/boot-pub-survey-manage/survey-detail/v1/photo/page'){
//   loadinginstace = "";
// }else if(config.url == '/boot-pub-survey-manage/pubsurvey/manage/department/v1/14/citys'){
//   loadinginstace = "";
// }
// 上传身份证
if(config.url == '/boot-pub-survey-video/small_claim/v1/savePhoto'){
  loadinginstace = ElementUI.Loading.service({ fullscreen: true })
}
// 小额签名
if(config.url == '/boot-pub-survey-video/small_claim/v1/sign'){
  loadinginstace = ElementUI.Loading.service({ fullscreen: true })
}
if(config.url == '/boot-pub-survey-video/survey_single/v1/query'){
  loadinginstace = ElementUI.Loading.service({ fullscreen: true })
}
if(config.url == '/boot-pub-survey-video/survey_single/v1/sign'){
  loadinginstace = ElementUI.Loading.service({ fullscreen: true })
}
if(config.url == '/boot-pub-survey-manage/pub/survey/v1/action'){
  loadinginstace = ElementUI.Loading.service({ fullscreen: true })
}
if(config.url == '/boot-pub-survey-manage/pub/survey/v1/page'){
  loadinginstace = ElementUI.Loading.service({ fullscreen: true })
}
  return config
}, error => {

  ElementUI.Message.error({
    message: '加载超时'
  })
  return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => {// 响应成功关闭loading

  if (loadinginstace) {
    loadinginstace.close()
    loadinginstace = '';
  }
  if (data.data.rescode == 300) {
    router.push('/')
  }
  return data
}, error => {
  console.log(error)
  // loadinginstace.close()
  ElementUI.Message.error({
    message: '加载失败'
  })
  return Promise.reject(error)
})

Vue.config.productionTip = false;
Vue.use(ElementUI);
// Vue.use(axios);
Vue.prototype.$ajax = axios;

// router.beforeEach((to, from, next) => {
//   var ajaxUrl = "/boot-pub-survey-manage";
//   next()
// });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  template: '<App/>',
  components: { App }
});
