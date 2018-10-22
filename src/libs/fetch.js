import axios from 'axios'

const instance = axios.create({
  // baseURL: 'http://rap2api.taobao.org/app/mock/25075',
  baseURL: 'http://192.168.1.145:8080',
  timeout: 5000
})

function fetch(params) {
  return new Promise((resolve, reject) => {
    instance({
      url: params.url,
      method: params.method || 'get',
      data: params.data
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

export default fetch
