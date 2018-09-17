import Vue from 'vue';
import Component from './fn-toast';

const ToastConstructor = Vue.extend(Component);

const toast = (options) => {
  const {
    duration,
    ...rest
  } = options

  const instance = new ToastConstructor({
    propsData: { ...rest },
    data: {
      duration: duration === undefined ? 1500 : duration
    }
  });

  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);

  instance.vm.$on('closed', () => {
    document.body.removeChild(instance.vm.$el);
    instance.vm.$destroy()
  })

  return instance.vm;
};

export default toast;
