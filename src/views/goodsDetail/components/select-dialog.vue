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
          <span>{{price}}</span>
        </div>
        <div class="total">
          <span>库存：</span>
          <span>{{stock}}</span>
        </div>
      </div>
    </div>

    <div v-for="option in buyOption" :key="option.cfg_id" class="layout">
      <div class="title">{{option.name}}</div>
      <ul class="content">
        <li
          v-for="(v, i) in option.list"
          :key="v.value_id"
          class="item"
          @click="handleSelected($event, option, i)"
        >
          {{v.name}}
        </li>
      </ul>
    </div>

    <div class="count-wrap layout">
      <div class="title">数量</div>
      <div class="btns">
        <a href="javascript:;" @click="handleLess" :class="{'disable': count === 1}">-</a>
        <div class="count">{{count}}</div>
        <a href="javascript:;" @click="handlePlus" :class="{'disable': count === stock}">+</a>
      </div>
    </div>
  </div>
</template>

<script>
import { buy_option, goods_info } from "@/mock/sku.js";

export default {
  props: ['selectImage', 'defaultPrice'],
  data() {
    return {
      selectImg: this.selectImage,
      price: this.defaultPrice,
      count: 1,
      stock: -1,
      buyOption: buy_option, // 选项
      goodsInfo: goods_info, // 所有选择方式的组合
      selectedPropList: [], // 选中的组合
      selectedSku: null,
    };
  },
  methods: {
    handleHide() {
      this.$emit("hide");
    },
    initStock() {
      this.stock = this.goodsInfo.reduce((prev, cur) => {
        return isNaN(prev) ? prev.stock + cur.stock : prev + cur.stock;
      });
    },
    handleSelected(e, option, index) {
      const propList = this.selectedPropList;
      this.count = 1;
      this.addClass(e, index);
      // 处理重复点击
      const filterVal = propList.findIndex(v => v.value_id === option.list[index].value_id);
      if (filterVal !== -1) {
        this.initStock();
        this.selectImg = this.selectImage;
        this.price = this.defaultPrice;
        e.target.classList.remove('active');
        propList.splice(filterVal, 1);
        return;
      }
      if (propList.length < this.buyOption.length) {
        // 处理重复添加的数据
        const filterCfg = propList.findIndex(v => v.cfg_id === option.cfg_id);
        if (filterCfg !== -1) {
          propList.splice(filterCfg, 1)
        }
        propList.push({
          cfg_id: option.cfg_id,
          value_id: option.list.find((v, i) => i === index).value_id
        });
        propList.sort((a, b) => {
          return a.cfg_id - b.cfg_id;
        })
      } else {
        const currentIndex = propList.findIndex(v => v.cfg_id === option.cfg_id);
        propList[currentIndex].value_id = option.list[index].value_id;
      }
      if (propList.length === this.buyOption.length) {
        // 根据propList查找sku
        this.selectedSku = this.goodsInfo.find(item => {
          return item.prop_list.every((v, i) => {
            return v.cfg_id === propList[i].cfg_id && v.value_id === propList[i].value_id;
          });
        })
        console.log(this.selectedSku);

        this.selectImg = this.selectedSku.img_url;
        this.stock = this.selectedSku.stock;
        this.price = this.selectedSku.price;
      }
    },
    // 给选中的选项添加class
    addClass(e, index) {
      const target = e.target;
      const parent = target.parentNode;
      const child = parent.children;
      for (let i = 0; i < child.length; i++) {
        child[i].classList.remove("active");
      }
      target.classList.add("active");
    },
    handlePlus () {
      if (!this.selectedSku) {
        alert('请先选择商品规格');
        return;
      }
      this.count++;
      if (this.count >= this.selectedSku.stock) {
        this.count = this.selectedSku.stock;
      }
      this.price = this.selectedSku.price * this.count;
    },
    handleLess () {
      this.count--;
      if (this.count < 1) {
        this.count = 1;
      }
      this.price = this.selectedSku.price * this.count;
    }
  },
  mounted() {
    // 初始化库存
    this.initStock();
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
      .active {
        color: #fb7299;
        border: 1px solid #fb7299;
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
      .disable {
        background: #f1f1f1;
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
