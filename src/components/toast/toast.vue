<template>
  <transition
    appear
    enter-active-class="animated slideInUp"
    leave-active-class="animated fadeOut"
  >
    <div v-if="show" class="toast-container">
      <span>{{content}}</span>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'toast'
}
</script>

<style lang="scss" scoped>
.toast-container {
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 120px;
  width: 100%;
  font-size: 28px;
  color: #fff;
  animation-duration: 0.35s;
  span {
    display: block;
    max-width: 700px;
    padding: 30px 30px;
    border-radius: 12px;
    background: rgba($color: #000000, $alpha: 0.6);
    word-wrap: break-word; // 英文换行
    white-space: pre-wrap; // 中文换行
  }
}
</style>
