<template>
  <div class="onload-wrapper">
    <div class="side"></div>
    <div class="list">
      <div class="header"></div>
      <div class="item" v-for="(item, index) in 12" :key="index"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.onload-wrapper {
  display: flex;
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #fff;
  .side {
    flex: 0 0 176px;
    width: 176px;
    height: 100%;
    background: #f4f4f4;
  }
  .list {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
    .header {
      width: 100%;
      height: 180px;
      background: #f4f4f4;
    }
    .item {
      width: 150px;
      height: 150px;
      margin: 10px;
      background: #f4f4f4;
    }
  }
}
</style>
