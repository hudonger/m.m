import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import { getToken } from '@/libs/util'

Vue.use(Router)

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  const token = getToken()
  if (token && to.name === 'login') {
    next(from.fullPath)
  } else {
    next()
  }
})

export default router
