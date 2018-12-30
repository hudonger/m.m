import Cookies from 'js-cookie'
import config from '@/config'

export const TOKEN_KEY = 'token'

// 设置 cookie
export const setToken = token => {
  Cookies.set(TOKEN_KEY, token, {
    expires: config.cookieExpires || 1
  })
}

// 获取 cookie
export const getToken = () => {
  const token = Cookies.get(TOKEN_KEY)
  return token ? token : false
}

// 获取url参数
export const getUrlParam = name => {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  let result = window.location.search.substr(1).match(reg)
  return result ? decodeURIComponent(result[2]) : null
}

// 字段验证
export const validator = (type, value) => {
  const val = String(value).trim()

  // 手机验证
  if (type === 'phone') {
    return /^1[3|4|5|7|8|9][0-9]{9}$/.test(val)
  }

  // 邮箱验证
  if (type === 'email') {
    return /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(val)
  }
}

// 获取或者设置样式
export function css (el, attr, val) {
  if (arguments.length === 2) {
    val = getComputedStyle(el)[attr]
    return parseFloat(val)
  } else {
    if (attr === "opacity") {
      el.style.opacity = val
    } else {
      el.style[attr] = val + "px"
    }
  }
}
