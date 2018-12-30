<template>
  <div class="goods-list-page">
    <search-header :title="title"></search-header>
    <div class="content" ref="scroll">
      <div class="scroll-wrapper">
        <div class="goods" v-for="item in goodsList" :key="item.id" @click="toDetail(item.id)">
          <img :src="item.img" alt="goods">
          <div class="title">{{item.title}}</div>
          <div class="bottom">
            <div class="price">￥<span>{{item.price}}</span></div>
            <div class="label" v-show="item.label">{{item.label}}</div>
          </div>
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
      title: '',
      goodsList: [],
      scroll: null
    };
  },
  activated() {
    if (this.scroll) {
      this.scroll.enable();
      this.scroll.refresh();
    }
    if (this.id !== Number(this.$route.params.id)) {
      this.id = Number(this.$route.params.id);
      this.loadList();
    }
  },
  mounted() {
    this.title = this.$route.params.name
  },
  deactivated() {
    this.scroll.disable();
  },
  beforeDestroy() {
    this.scroll.disable();
  },
  methods: {
    loadList() {
      getCategoryList(this.id).then(res => {
        if (res.code === 1) {
          this.goodsList = res.goodsList;
          this.initScroll();
        }
      });
    },
    initScroll() {
      this.scroll = new BScroll(this.$refs.scroll, {
        click: true
      });
    },
    toDetail(id) {
      this.$router.push({
        name: 'goodsDetail',
        params: { id }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.goods-list-page {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 99;
  background: #f4f4f4;
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
      justify-content: space-between;
      padding: 20px 20px;
      .goods {
        position: relative;
        width: 345px;
        height: 524px;
        background: #fff;
        border-radius: 12px;
        margin-bottom: 20px;
        overflow: hidden;
        img {
          width: 345px;
          height: 345px;
        }
        .title {
          color: #222;
          font-size: 32px;
          line-height: 42px;
          padding: 10px 20px;
          max-height: 100px;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .bottom {
          display: flex;
          justify-content: space-between;
          padding: 20px 20px 0;
          .price {
            color: #f01414;
            font-size: 24px;
            span {
              font-size: 36px;
            }
          }
          .label {
            height: 32px;
            line-height: 32px;
            padding: 0 10px;
            color: #fb7299;
            border: 1px solid #fb7299;
          }
        }
      }
    }
  }
}
</style>
