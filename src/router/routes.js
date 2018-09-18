export default [
  {
    path: '/',
    redirect: '/home'
  },
  // 登录/注册
  {
    path: '/login',
    name: 'login',
    component: () => import (/* webpackChunkName: "login" */ '@/views/login/login')
  },
  // 主页
  {
    path: '/home',
    name: 'home',
    redirect: '/home/recommend',
    component: () => import (/* webpackChunkName: "home" */ '@/views/home/home'),
    children: [
      // 推荐
      {
        path: 'recommend',
        name: 'recommend',
        meta: {
          index: 0,
          theme: '#d50b26'
        },
        component: () => import (/* webpackChunkName: "recommend" */ '@/views/home/components/recommend')
      },
      // 食品
      {
        path: 'food',
        name: 'food',
        meta: {
          index: 1,
          theme: '#8bc34a'
        },
        component: () => import (/* webpackChunkName: "food" */ '@/views/home/components/food')
      },
      // 数码
      {
        path: 'digital',
        name: 'digital',
        meta: {
          index: 2,
          theme: '#9447eb'
        },
        component: () => import (/* webpackChunkName: "digital" */ '@/views/home/components/digital')
      },
      // 运动
      {
        path: 'sport',
        name: 'sport',
        meta: {
          index: 3,
          theme: '#ffa000'
        },
        component: () => import (/* webpackChunkName: "sport" */ '@/views/home/components/sport')
      },
    ]
  },
  // 分类
  {
    path: '/category',
    name: 'category',
    component: () => import (/* webpackChunkName: "category" */ '@/views/category/category')
  },
  // 购物车
  {
    path: '/cart',
    name: 'cart',
    component: () => import (/* webpackChunkName: "cart" */ '@/views/cart/cart')
  },
  // 我的
  {
    path: '/user',
    name: 'user',
    component: () => import (/* webpackChunkName: "user" */ '@/views/user/user')
  },
  // 商品列表
  {
    path: '/category/:id',
    name: 'goodsList',
    component: () => import (/* webpackChunkName: "goodsList" */ '@/views/goodsList/goodsList')
  },
]
