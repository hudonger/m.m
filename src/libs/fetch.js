import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://rap2api.taobao.org/app/mock/25075',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

function fetch(params) {
  const is = params.method === 'get'
  return new Promise((resolve, reject) => {
    instance({
      url: params.url,
      method: params.method || 'get',
      params: is ? params.data : {},
      data: is ? {} : params.data
    }).then(res => {
      // some code 可以做一些状态码的处理
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

export default fetch
