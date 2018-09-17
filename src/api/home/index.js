import fetch from '@/libs/fetch';

// 获取首页导航
export const getNavList = () => {
  return fetch({
    url: '/api/navList'
  })
}

// 获取首页 推荐 数据
export const getRecommend = () => {
  return fetch({
    url: '/api/recommend'
  })
}

// 获取首页 食品 数据
export const getFood = () => {
  return fetch({
    url: '/api/food'
  })
}

// 获取首页 数码产品 数据
export const getDigital = () => {
  return fetch({
    url: '/api/digital'
  })
}

// 获取首页 运动产品 数据
export const getSport = () => {
  return fetch({
    url: '/api/sport'
  })
}
