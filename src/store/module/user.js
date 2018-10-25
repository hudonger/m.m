import {login} from '@/api/user'
import { setToken, getToken } from '@/libs/util'

export default {
  state: {
    userInfo: JSON.parse(localStorage.getItem('userInfo')),
    token: getToken()
  },
  mutations: {
    setUserInfo (state, value) {
      state.userInfo = value
      localStorage.setItem('userInfo', JSON.stringify(value))
    },
    setToken (state, token) {
      state.token = token
      setToken(token)
    }
  },
  actions: {
    // 登陆
    handleLogin({commit}, {user, password}) {
      return new Promise((resolve, reject) => {
        login({user, password}).then(res => {
          commit('setUserInfo', res.data)
          commit('setToken', res.data.name)
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },

    // 退出
    handleLogout ({ commit }) {
      return new Promise((resolve, reject) => {
        commit('setUserInfo', '')
        commit('setToken', '')
        resolve()
      })
    }
  }
}
