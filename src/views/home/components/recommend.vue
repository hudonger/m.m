<template>
  <div class="recommend-container">
    <div class="banner">
      <slider v-if="bannerList.length" class-name="recommend-slider">
        <div class="swiper-slide" v-for="item in bannerList" :key="item.img">
          <img :src="item.img">
        </div>
      </slider>
    </div>

    <div class="space"></div>

    <div class="recommend-list">
      <div class="title">猜你喜欢</div>
      <div class="list-item" v-for="item in recommendList" :key="item.id">
        <img v-lazy="item.img" :alt="item.desc">
        <div class="info">
          <div class="name">{{item.name}}</div>
          <div class="desc">{{item.desc}}</div>
          <div class="price">￥{{item.price}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from '@/components/slider/slider'
import { getRecommend } from "@/api/home"

export default {
  components: {
    Slider
  },
  data() {
    return {
      bannerList: [],
      recommendList: []
    }
  },
  created() {
    this.loadPageData()
  },
  methods: {
    loadPageData() {
      this.$progress.start()
      getRecommend().then(res => {
        this.bannerList = res.data.bannerList
        this.recommendList = res.data.recommendList
        this.$nextTick(() => {
          this.$progress.done()
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.recommend-container {
  position: relative;
  width: 100%;
  .banner {
    padding-bottom: 20px;
    overflow: hidden;
    .swiper-slide {
      width: 680px;
      border-radius: 12px;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
  }
  .space {
    height: 15px;
    background: #f3f5f7;
  }
  .recommend-list {
    color: #222;
    padding: 32px;
    .title {
      font-size: 24px;
      font-weight: 700;
    }
    .list-item {
      display: flex;
      width: 100%;
      padding-top: 32px;
      img {
        flex: 0 0 200px;
        width: 200px;
        height: 130px;
      }
      .info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 22px;
        font-size: 30px;
        .desc {
          width: 460px;
          color: #777;
          font-size: 26px;
          letter-spacing: 1px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        .price {
          color: #f01414;
          font-size: 26px;
        }
      }
    }
  }
}
</style>

