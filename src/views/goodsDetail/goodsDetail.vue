<template>
  <div class="detail-page">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="img in imgList" :key="img">
          <img :src="img">
        </div>
      </div>
      <div class="swiper-page">{{swiperIndex}}/{{imgList.length}}</div>
    </div>
    <div class="content">
      <div class="title">[追加限量] FOTS JAPAN 小林家的龙女仆 康娜&托尔 女仆Ver. 手办</div>
      <div class="desc">不得了 不得了</div>
      <div class="price"><span>全款</span>￥<span>520</span></div>
      <div class="info">
        <div class="brand">
          <div>
            <span>品牌</span>
            <span>FOTS JAPAN</span>
          </div>
          <i class="iconfont icon-jiantouyou"></i>
        </div>
        <span class="line-dashed"></span>
        <div class="works">
          <div>
            <span>作品</span>
            <span>小林家的龙女仆</span>
          </div>
          <i class="iconfont icon-jiantouyou"></i>
        </div>
        <span class="line-dashed"></span>
        <div class="type">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

const imgList = [
  require("@/assets/images/demo1.webp"),
  require("@/assets/images/demo3.webp"),
  require("@/assets/images/module1.webp"),
  require("@/assets/images/module4.webp")
];

export default {
  data() {
    return {
      imgList,
      swiperIndex: 1
    };
  },
  methods: {
    initSwiper() {
      this.swiper = new Swiper(".swiper-container", {
        on: {
          slideChangeTransitionStart: () => {
            this.swiperIndex = this.swiper.realIndex + 1;
          }
        }
      });
    }
  },
  mounted() {
    this.initSwiper();
  }
};
</script>

<style lang="scss" scoped>
.detail-page {
  position: relative;
  z-index: 99;
  width: 100%;
  height: 100%;
  background: #fff;
  overflow: hidden;
  .swiper-container {
    position: relative;
    width: 100%;
    height: 700px;
    background: #f6f6f6;
    .swiper-slide {
      text-align: center;
      img {
        height: 100%;
      }
    }
    .swiper-page {
      position: absolute;
      left: 50%;
      bottom: 20px;
      z-index: 9;
      transform: translateX(-50%);
      height: 35px;
      line-height: 35px;
      padding: 0 20px;
      color: #555;
      background: rgba($color: #fff, $alpha: 0.6);
      font-size: 20px;
      border-radius: 35px;
    }
  }
  .content {
    width: 100%;
    padding: 0 25px;
    .title {
      font-size: 32px;
      line-height: 42px;
      max-height: 100px;
      margin: 25px 0;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    .desc {
      color: #bebebe;
      font-size: 24px;
    }
    .price {
      color: #fb7299;
      padding: 25px 0;
      font-size: 22px;
      span:nth-of-type(1) {
        color: #616161;
        font-size: 28px;
      }
      span:nth-of-type(2) {
        font-size: 32px;
      }
    }
    .info {
      width: 100%;
      border-top: 1px solid #f4f4f4;
      border-bottom: 1px solid #f4f4f4;
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 82px;
        font-size: 20px;
        color: #bebebe;
        div {
          span:nth-of-type(2) {
            color: #222;
            padding-left: 25px;
          }
        }
      }
      .line-dashed {
        display: block;
        border-bottom: 1px dashed #eee;
      }
    }
  }
}
</style>
