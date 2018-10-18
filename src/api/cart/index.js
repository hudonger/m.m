import fetch from '@/libs/fetch';

// 获取商品分类
export const getCartList = () => {
  return fetch({
    url: '/api/cart'
  })
}
