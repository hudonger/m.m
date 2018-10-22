import Mock from 'mockjs'
import { login, register } from './response/user'
import { navList, recommend } from './response/home'
import { category, goodsList, modelDetail } from './response/category'
import { cart } from './response/cart'

// const MOCK_URL = 'http://192.168.1.145:8080'
// Mock.mock(MOCK_URL + '/api/getUserInfo', getUserInfo)

// login
Mock.mock(/\/login/, login)
Mock.mock(/\/register/, register)

// home
Mock.mock(/\/navList/, navList)
Mock.mock(/\/recommend/, recommend)

// category
Mock.mock(/\/category/, category)
Mock.mock(/\/goodsList/, goodsList)
Mock.mock(/\/modelDetail/, modelDetail)

// cart
Mock.mock(/\/cart/, cart)

export default Mock
