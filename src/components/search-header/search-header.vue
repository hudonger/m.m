<template>
  <div class="search-header">
    <i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
    <span>{{title}}</span>
    <i class="iconfont icon-sousuo"></i>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String(),
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .search-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100px;
    color: #fff;
    font-size: 36px;
    background: linear-gradient(30deg, #ff568a , #ff61c1);
    .iconfont {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 100%;
      font-size: 42px;
    }
  }
</style>
