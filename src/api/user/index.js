import fetch from '@/libs/fetch';

// 登录
export const login = (data) => {
  return fetch({
    url: '/api/login',
    method: 'post',
    data
  })
}

// 注册
export const register = (data) => {
  return fetch({
    url: '/api/register',
    method: 'post',
    data
  })
}
