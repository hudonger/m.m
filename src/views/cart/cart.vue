<template>
  <div class="cart-page">
    <div class="header">
      <i class="iconfont icon-fanhui" @click="$router.back()"></i>
      <span>购物车</span>
      <span class="edit">编辑</span>
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
            <div class="info">
              <div class="price">￥{{item.price}}</div>
              <div class="action">
                <div class="less">-</div>
                <div class="count">{{item.count}}</div>
                <div class="plus">+</div>
              </div>
            </div>
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
      <div class="submit-btn">{{handleBtn}}</div>
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
      total: 0,
      handleBtn: '去结算'
    };
  },
  activated() {
    if (!this.$refs.scroll) return;
    this.$refs.scroll.enable();
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
    padding: 0 45px;
    box-shadow: 1px 1px 20px #eee;
    background: #fff;
    .iconfont {
      font-weight: bold;
      margin-right: 42px;
      font-size: 26px;
    }
    .edit {
      float: right;
    }
  }
  .list {
    font-size: 24px;
    padding-top: 30px;
    height: calc(100vh - 100px - 92px);
    .item {
      display: flex;
      align-items: center;
      height: 200px;
      padding-bottom: 30px;
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
      }
      .desc {
        height: 140px;
        padding: 10px 30px;
        font-weight: bold;
        font-size: 28px;
        .info {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding-top: 20px;
          .price {
            color: #F01414;
          }
          .action {
            display: flex;
            font-weight: 500;
            font-size: 32px;
            color: #4b4b4b;
            div {
              width: 60px;
              height: 50px;
              line-height: 50px;
              text-align: center;
              border: 1px solid #9a9a9a;
            }
            .less {
              border-right: none;
              border-radius: 6px 0 0 6px;
            }
            .plus {
              border-left: none;
              border-radius: 0 6px 6px 0;
            }
            .count {
              font-size: 24px;
            }
          }
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
