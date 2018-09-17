<template>
  <div class="search-container" :style="{ backgroundColor: theme }">
    <!-- <i class="iconfont icon-gouwuche"></i> -->
    <img class="logo" src="@/assets/images/logo.svg">
    <input type="text">
    <i class="iconfont icon-sousuo"></i>
  </div>
</template>

<script>
export default {
  props: {
    theme: {
      default: '#d50b26'
    }
  }
}
</script>

<style lang="scss">
.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 85px;
  font-size: 28px;
  .logo {
    width: 42px;
    height: 42px;
  }
  i {
    color: #fff;
    font-weight: 500;
    font-size: 36px;
  }
  input {
    width: 558px;
    height: 56px;
    border-radius: 60px;
    margin: 0 30px;
    padding: 0 20px;
    color: #fff;
    background: rgba($color: #000000, $alpha: 0.1);
  }
}
</style>
