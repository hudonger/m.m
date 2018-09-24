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

// 获取商品详情 (只写了两种 手办和服装)
export const getDetail = (type) => {
  return fetch({
    url: type === 'model' ? '/api/modelDetail' : '/api/clothingDetail',
    method: 'post',
    data: {
      type
    }
  })
}
