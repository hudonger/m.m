const host = 'http://rap2api.taobao.org/app/mock/25075';

const url = {
  login: '/api/login',
  register: '/api/register',
  navList: '/api/navList',
  homePage: '/api/homePage',
}

Object.keys(url).forEach(key => {
  url[key] = host + url[key]
})

export default url
