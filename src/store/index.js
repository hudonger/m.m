import Vue from 'vue'
import Vuex from 'vuex'

import app from './module/app'
import home from './module/home'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // some code
  },
  modules: {
    app,
    home
  }
})
