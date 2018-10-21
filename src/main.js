import 'babel-polyfill'
if (process.env.NODE_ENV !== 'production') require('./mock')
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import './assets/styles/reset.css'
import './assets/styles/base.scss'
import './assets/fonts/iconfont.css'
import './assets/styles/animate.css'

NProgress.configure({ showSpinner: false })
Vue.prototype.$progress = NProgress

// 初始化 font-size
import './libs/rem'

// 全局提示插件
import toast from './components/toast'
Vue.use(toast)

// 图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  loading: require('./assets/images/load.svg')
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
