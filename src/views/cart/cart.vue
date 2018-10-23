<template>
  <div class="cart-page">
    <div class="header">
      <i class="iconfont icon-fanhui" @click="$router.back()"></i>
      <span>购物车</span>
      <span class="edit" @click="handleEdit">{{editBtn}}</span>
    </div>
    <div class="list" v-if="cartList.length">
      <scroll ref="scroll">
        <div class="item" v-for="(item, index) in cartList" :key="index">
          <div class="checkbox">
            <i :class="['iconfont', item.isClick ? 'icon-yes_fill active' : 'icon-yuancircle46']" @click="handleClickItem(item)"></i>
          </div>
          <img :src="item.img" alt="商品">
          <div class="desc">
            <div class="name">{{item.name}}</div>
            <div class="info">
              <div class="price">￥{{item.price}}</div>
              <div class="action">
                <div class="less" @click="handleLess(item)">-</div>
                <div class="count">{{item.count}}</div>
                <div class="plus" @click="handlePlus(item)">+</div>
              </div>
            </div>
          </div>
        </div>
      </scroll>
    </div>
    <div class="footer">
      <div class="info">
        <div class="checkbox" @click="handleCheckAll">
          <i :class="['iconfont', checkAll ? 'icon-yes_fill active' : 'icon-yuancircle46']"></i>
          <span>全选</span>
        </div>
        <span class="total">合计：￥{{totalPrice}}</span>
      </div>
      <div class="submit-btn" @click="handleSubmit">{{submitBtn}}</div>
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
      editBtn: '编辑',
      submitBtn: '去结算',
      status: 'buy'
    };
  },
  activated() {
    this.loadList();
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
  computed: {
    totalPrice () {
      let total = 0;
      this.cartList.forEach(item => {
        if (item.isClick) {
          total += item.price;
        }
      })
      return total;
    }
  },
  methods: {
    // 加载购物车数据
    loadList() {
      getCartList().then(res => {
        res.list.forEach(item => {
          item.isClick = false;
          item.base = item.price;
        })
        this.cartList = res.list;
      });
    },

    handleClickItem(item) {
      item.isClick = !item.isClick;
      if (!item.isClick) {
        this.checkAll = false;
      } else {
        this.checkAll = this.cartList.every(item => {
          return item.isClick;
        })
      }
    },

    // 全选按钮
    handleCheckAll() {
      this.checkAll = !this.checkAll;
      this.cartList.forEach(item => {
        item.isClick = this.checkAll;
      })
    },

    // 减
    handleLess(data) {
      data.count--;
      if (data.count < 1) data.count = 1;
      data.price = data.base * data.count;
    },

    // 加
    handlePlus(data) {
      data.count++;
      data.price = data.base * data.count;
    },

    // 编辑
    handleEdit() {
      if (this.status === 'buy') {
        this.editBtn = '完成';
        this.submitBtn = '删除选中';
        this.status = 'edit';
      } else {
        this.editBtn = '编辑';
        this.submitBtn = '去结算';
        this.status = 'buy';
      }
    },

    // 提交
    handleSubmit() {
      if (this.status === 'buy') {
        const checked = this.cartList.some(item => item.isClick);
        console.log(checked);
      } else {
        this.cartList = this.cartList.filter(item => !item.isClick);
      }
    }
  }
};
</script>

<style lang="scss" scoped src="./cart.scss"></style>
