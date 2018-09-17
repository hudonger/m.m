<template>
  <transition name="fade" appear @after-leave="afterLeave">
    <div v-show="visible" class="toast">
      <span>{{content}}</span>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      visible: true
    }
  },
  props: {
    content: {
      type: String,
      required: true
    }
  },
  methods: {
    afterLeave() {
      this.$emit('closed')
    }
  }
};
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  font-size: 32px;
  padding: 16px 32px;
  color: #fff;
  border-radius: 8px;
  background: rgba($color: #222, $alpha: 0.8);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
