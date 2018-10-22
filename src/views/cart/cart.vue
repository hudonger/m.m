<template>
  <div class="cart-page">
    <div class="header">
      <i class="iconfont icon-fanhui" @click="$router.back()"></i>
      <span>购物车</span>
    </div>
    <div class="list" v-if="cartList.length">
      <scroll ref="scroll">
        <div class="item" v-for="(item, index) in cartList" :key="index">
          <div class="checkbox">
            <i :class="['iconfont', item.isClick ? 'icon-yes_fill active' : 'icon-yuancircle46']" @click="item.isClick = !item.isClick"></i>
          </div>
          <img :src="item.img" alt="商品">
          <div class="desc">
            <div class="name">{{item.name}}</div>
            <div class="price">￥{{item.price}}</div>
          </div>
        </div>
      </scroll>
    </div>
    <div class="footer">
      <div class="info">
        <div class="checkbox" @click="checkAll = !checkAll">
          <i :class="['iconfont', checkAll ? 'icon-yes_fill active' : 'icon-yuancircle46']"></i>
          <span>全选</span>
        </div>
        <span class="total">合计：￥{{total}}</span>
      </div>
      <div class="submit-btn">去结算</div>
    </div>
  </div>
</template>

<script>
import Scroll from '@/components/scroll/scroll';
import { getCartList } from "@/api/cart";

export default {
  components: {
    Scroll
  },
  data() {
    return {
      cartList: [],
      checkAll: false,
      total: 0
    };
  },
  activated() {
    this.$refs.scroll.enable()
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.$refs.scroll.disable();
  },
  beforeDestroy() {
    this.$refs.scroll.disable();
  },
  methods: {
    loadList() {
      getCartList().then(res => {
        res.list.forEach(item => {
          item.isClick = false;
        })
        this.cartList = res.list;
      });
    }
  },
  mounted() {
    this.loadList();
  }
};
</script>

<style lang="scss" scoped>
.cart-page {
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 100px;
  z-index: 10;
  background: #fff;
  color: #2b343b;
  overflow-y: scroll;
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    line-height: 100px;
    font-size: 32px;
    padding-left: 45px;
    box-shadow: 1px 1px 20px #eee;
    background: #fff;
    .iconfont {
      font-weight: bold;
      margin-right: 42px;
      font-size: 26px;
    }
  }
  .list {
    font-size: 24px;
    height: calc(100vh - 100px - 92px);
    .item {
      display: flex;
      align-items: center;
      padding: 30px 0;
      .checkbox {
        padding: 0 25px;
        .iconfont {
          color: #ccc;
          font-size: 42px;
        }
        .active {
          color: #20cc85;
        }
      }
      img {
        width: 210px;
        height: 140px;
        border-radius: 12px;
        overflow: hidden;
        margin-right: 30px;
      }
      .desc {
        height: 140px;
        padding: 20px 0;
        font-weight: bold;
        .name {
          font-size: 28px;
        }
        .price {
          padding-top: 24px;
          color: #F01414;
        }
      }
    }
  }
  .footer {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 92px;
    background: #fff;
    .info {
      flex: 1;
      display: flex;
      align-items: center;
      border-top: 1px solid #eee;
      font-size: 30px;
      .checkbox {
        display: flex;
        align-items: center;
        padding: 0 3px 0 25px;
        .iconfont {
          color: #ccc;
          font-size: 42px;
          margin-right: 3px;
        }
        .active {
          color: #20cc85;
        }
        span {
          color: #ccc;
        }
      }
      .total {
        font-weight: bold;
        margin-left: 72px;
      }
    }
    .submit-btn {
      flex: 0 0 230px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      background: #F01414;
    }
  }
}
</style>
