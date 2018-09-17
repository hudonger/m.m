import fetch from '@/libs/fetch';

// 获取商品分类列表
export const getCategory = () => {
  return fetch({
    url: '/api/category'
  })
}
