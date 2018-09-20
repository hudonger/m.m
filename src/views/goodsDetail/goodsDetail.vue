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
      <div class="section">
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
          <div class="specification">
            <div>
              <span>规格</span>
              <span>选择尺寸，颜色分类</span>
            </div>
            <i class="iconfont icon-jiantouyou"></i>
          </div>
        </div>
      </div>

      <div class="space"></div>

      <div class="section shop">
        <div class="left">
          <i class="iconfont icon-huiyuan"></i>
          <div>
            <div class="shop-name">会员购</div>
            <div class="shop-sum">在售商品2020件</div>
          </div>
        </div>
        <div class="right">
          <span>关注</span>
        </div>
      </div>

      <div class="space"></div>

      <div class="section detail">
        <div class="area-title">商品详情</div>
        <ul class="detail-info">
          <li>
            <span>比例</span>
            <span>1/4</span>
          </li>
          <li>
            <span>尺寸</span>
            <span>全高：约420mm</span>
          </li>
          <li>
            <span>系列</span>
            <span>手办系列</span>
          </li>
        </ul>
        <div class="detail-view">查看全部</div>
      </div>
      <div class="img-list">
        <img src="@/assets/images/kangna1.jpg">
        <img src="@/assets/images/kangna2.jpg">
        <img src="@/assets/images/kangna3.jpg">
        <img src="@/assets/images/kangna4.jpg">
        <img src="@/assets/images/tuoer1.jpg">
        <img src="@/assets/images/tuoer2.jpg">
        <img src="@/assets/images/tuoer3.jpg">
        <img src="@/assets/images/tuoer4.jpg">
      </div>

      <div class="space"></div>

      <div class="section notice">
        <div class="area-title">购买须知</div>
        <div class="notice-content">
          <h3>关于签收货：</h3>
          <p>1、在签收快件时，请本人亲自在不拆封商品包装的情况下，在快递前当面验货，确认无误后再签收。</p>
          <p>2、商品的退换请参考商品售后条款。</p>
          <h3>关于配送：</h3>
          <p>1、所有预售商品，如有邮费，需在补款时一并支付。</p>
          <p>2、商品的可配送区域为中国大陆地区（除特殊偏远地区）。</p>
          <p>3、平台统一采用搞规格包装和配送，最大程度保护商品在配送过程中的安全。</p>
        </div>
      </div>

      <div class="space"></div>

      <div class="section after-sale">
        <div class="area-title">售后</div>
        <div class="sale-content">
          <p>1、会员购承诺提供7天无理由退换货服务（特殊商品及类目除外且不影响二次销售）。</p>
          <p>2、手办模玩类商品均不支持7天无理由退换货，若出现掉件、脱胶、断件等极端情况，请联系客服。因为手办为手工制品，难免会有瑕疵点，敬请谅解。</p>
          <p>3、对于需要退货的商品，若用户以无理由形式退换货或拒签，来回运费均由用户承担。若商品提供包邮服务，用户仅承担退货运费。</p>
        </div>
      </div>
    </div>

    <div class="float-footer">
      <div class="icon">
        <i class="iconfont icon-kefu"></i>
        <i class="iconfont icon-gouwuche"></i>
      </div>
      <div class="btn">立即购买</div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

const imgList = [
  require("@/assets/images/kangna1.jpg"),
  require("@/assets/images/kangna3.jpg"),
  require("@/assets/images/tuoer1.jpg"),
  require("@/assets/images/tuoer4.jpg")
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

<style lang="scss" scoped src="./goodsDetail.scss"></style>
