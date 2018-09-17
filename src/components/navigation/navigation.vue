<template>
  <div v-show="show" class="navigation">
    <router-link
      :to="{name: nav.link}"
      tag="div"
      class="nav-item"
      active-class="active"
      v-for="nav in navigation"
      :key="nav.name"
      @click.native="handleShow(nav.name)"
    >
      <i class="iconfont" :class="nav.icon"></i>
      <span>{{nav.name}}</span>
    </router-link>
  </div>
</template>

<script>
import bus from "@/libs/bus.js";

export default {
  data() {
    return {
      navigation: [
        {
          name: "首页",
          link: "home",
          icon: "icon-shouye"
        },
        {
          name: "分类",
          link: "category",
          icon: "icon-fenlei1"
        },
        {
          name: "购物车",
          link: "cart",
          icon: "icon-gouwuche"
        },
        {
          name: "我的",
          link: "user",
          icon: "icon-wode"
        }
      ],
      currentIndex: 0,
      show: true,
      isLoad: false
    };
  },
  methods: {
    handleShow(name) {
      if (!this.isLoad && name === "分类") {
        this.show = false;
      }
    }
  },
  mounted() {
    bus.$on("onRouter", val => {
      this.navigation[0].link = val;
    });

    bus.$on("loaded", val => {
      this.show = val;
      this.isLoad = val;
    });
  }
};
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 9;
  width: 100%;
  height: 92px;
  box-shadow: 0 -1px 20px #e0e0e0;
  background: #fff;
  .nav-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #a8a8a8;
    i {
      font-size: 40px;
    }
    span {
      padding-top: 10px;
      font-size: 18px;
    }
  }
  .active {
    color: #2b343b;
    font-weight: bold;
  }
}
</style>
