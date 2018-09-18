<template>
  <div class="goods-list-page">
    <search-header :title="$route.params.name" bg="linear-gradient(143deg, #2945cb 20%, #2b83f9 81%, #3a9dff)"></search-header>
    <div class="content" ref="scroll">
      <div class="scroll-wrapper">
        <div class="goods" v-for="item in goodsList" :key="item.id">
          <img :src="item.img" alt="goods">
          <div class="desc">{{item.desc}}</div>
          <div class="name">{{item.name}}</div>
          <div class="price">￥{{item.price}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchHeader from "@/components/search-header/search-header";
import BScroll from "better-scroll";
import { getCategoryList } from "@/api/category";

export default {
  components: {
    SearchHeader
  },
  data() {
    return {
      id: -1,
      goodsList: [],
      scroll: null
    };
  },
  methods: {
    loadList() {
      getCategoryList(this.id).then(res => {
        if (res.code === 1) {
          this.goodsList = res.goodsList;
          console.log(res.goodsList);
          this.initScroll();
        }
      });
    },
    initScroll() {
      this.scroll = new BScroll(this.$refs.scroll, {
        click: this.click
      });
    }
  },
  activated() {
    this.id = this.$route.params.id;
    this.loadList();
  }
};
</script>

<style lang="scss" scoped>
.goods-list-page {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 99;
  background: #fff;
  .content {
    position: absolute;
    top: 100px;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    overflow: hidden;
    .scroll-wrapper {
      display: flex;
      flex-wrap: wrap;
      padding: 20px 12px;
      .goods {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 50%;
        img {
          width: 346px;
          height: 346px;
          border-radius: 12px 12px 0 0;
        }
        div {
          width: 346px;
          text-align: left;
          padding: 0 12px;
          font-size: 24px;
        }
        .desc {
          background: rgba(99, 99, 99, 0.6);
          color: #fff;
          line-height: 66px;
          border-radius: 0 0 12px 12px;
        }
        .name {
          color: #222;
          font-size: 28px;
          line-height: 52px;
        }
        .price {
          color: #af181f;
          line-height: 42px;
        }
      }
    }
  }
}
</style>
