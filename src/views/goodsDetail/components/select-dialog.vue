<template>
  <div class="select-wrap" @scroll.prevent>
    <div class="header">
      <i class="close iconfont icon-guanbi" @click="handleHide"></i>
      <div class="img-wrap">
        <img :src="selectImg">
      </div>
      <div class="info">
        <div class="price">
          <span>价格：￥</span>
          <span>999</span>
        </div>
        <div class="total">
          <span>库存：</span>
          <span>120</span>
        </div>
      </div>
    </div>
    <div class="commodity-size layout">
      <div class="title">尺码</div>
      <div class="content">
        <div class="item">41</div>
        <div class="item">41.5</div>
        <div class="item">42</div>
        <div class="item">42.5</div>
        <div class="item">43</div>
        <div class="item">44</div>
      </div>
    </div>
    <div class="commodity-color layout">
      <div class="title">颜色</div>
      <div class="content">
        <div class="item">黑红</div>
        <div class="item">墨绿</div>
      </div>
    </div>
    <div class="count-wrap layout">
      <div class="title">数量</div>
      <div class="btns">
        <a href="javascript:;">-</a>
        <div class="count">{{count}}</div>
        <a href="javascript:;">+</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectImg: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      fade: "fadeIn",
      count: 1
    };
  },
  methods: {
    handleHide() {
      this.$emit("hide");
    }
  }
};
</script>

<style lang="scss" scoped>
.select-wrap {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 1000px;
  background: #fff;
  border-radius: 32px 32px 0 0;
  padding: 30px;
  color: #555;
  overflow-y: scroll;
  .header {
    display: flex;
    align-items: flex-end;
    position: relative;
    .close {
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 30px;
      color: #bebebe;
    }
    .img-wrap {
      width: 188px;
      height: 188px;
      background: #f6f6f6;
      text-align: center;
      img {
        height: 188px;
      }
    }
    .info {
      margin-left: 12px;
      font-size: 28px;
      .price {
        font-size: 32px;
        padding-bottom: 20px;
        color: #fb7299;
      }
    }
  }
  .layout {
    margin-top: 36px;
    .title {
      font-size: 28px;
      padding: 10px 0;
    }
    .content {
      display: flex;
      flex-wrap: wrap;
      font-size: 24px;
      .item {
        height: 56px;
        line-height: 56px;
        padding: 0 20px;
        border: 1px solid #b4b4b4;
        margin: 20px 26px 0 0;
      }
    }
  }
  .count-wrap {
    .btns {
      display: flex;
      margin-top: 30px;
      font-size: 32px;
      a {
        display: block;
        color: #555;
        width: 88px;
        height: 64px;
        line-height: 64px;
        text-align: center;
        border: 1px solid #b4b4b4;
      }
      .count {
        width: 120px;
        height: 64px;
        line-height: 64px;
        text-align: center;
        border-top: 1px solid #b4b4b4;
        border-bottom: 1px solid #b4b4b4;
      }
    }
  }
}
</style>
