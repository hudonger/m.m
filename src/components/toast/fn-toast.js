import Toast from './toast.vue';

export default {
  extends: Toast,
  mounted() {
    this.createTimer();
  },
  methods: {
    createTimer() {
      if(this.duration) {
        this.timer = setTimeout(() => {
          this.visible = false
        }, this.duration)
      }
    },
    clearTimer() {
      if(this.timer) {
        clearTimeout(this.timer);
      }
    }
  },
  beforeDestroy() {
    this.clearTimer();
  }
}
