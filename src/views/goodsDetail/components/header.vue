<template>
  <div class="detail-header">
    <div class="bg" :style="{'opacity': opacity}">商品详情</div>
    <div class="btn">
      <i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
      <i class="iconfont icon-fenxiang"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: ['opacity']
}
</script>

<style lang="scss" scoped>
.detail-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 99;
  height: 84px;
  font-size: 28px;
  .bg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #fff;
  }
  .btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0 15px;
  }
  .iconfont {
    display: block;
    width: 58px;
    height: 58px;
    line-height: 58px;
    text-align: center;
    color: #fff;
    border-radius: 50%;
    background: rgba(0, 0, 0, .6);
    font-size: 26px;
  }
}
</style>
