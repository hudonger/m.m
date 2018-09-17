import Toast from './toast.vue';
import toast from './function';

// 定义全局组件
export default (Vue) => {
  Vue.component(Toast.name, Toast)
  Vue.prototype.$toast = toast
}
