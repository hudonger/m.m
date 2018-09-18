import fetch from '@/libs/fetch';

// 获取商品分类
export const getCategory = () => {
  return fetch({
    url: '/api/category'
  })
}

// 根据分类id 获取分类列表
export const getCategoryList = (id) => {
  return fetch({
    url: '/api/goodsList',
    method: 'post',
    data: {
      list_id: id
    }
  })
}
