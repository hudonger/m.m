import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import NProgress from 'nprogress'
import toast from './components/toast'
import VueLazyload from 'vue-lazyload'
import './libs/rem'
import 'nprogress/nprogress.css'
import './assets/styles/reset.css'
import './assets/styles/base.scss'
import './assets/fonts/iconfont.css'
import './assets/styles/animate.css'

if (process.env.NODE_ENV !== 'production') require('./mock')

Vue.use(toast)

NProgress.configure({ showSpinner: false })
Vue.prototype.$progress = NProgress

Vue.use(VueLazyload, {
  loading: require('./assets/images/load.svg')
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
