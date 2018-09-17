<template>
  <div class="home-page">
    <div ref="scroll" class="scroll-wrapper">
      <div>
        <div class="search-wrapper" :style="{ backgroundColor: themeList[currentIndex] }">
          <img class="logo" src="@/assets/images/logo.svg">
          <div class="textarea"></div>
          <i class="iconfont icon-sousuo"></i>
        </div>
        <div class="header-nav">
          <ul>
            <li v-for="(item, index) in navList" :key="item.page_id" @click="handleTabs(item.name, index)">{{item.name}}</li>
          </ul>
          <div ref="underline" class="underline" :style="{backgroundColor: themeList[currentIndex], left: `${navItemWidth / 2}px`}"></div>
        </div>

        <transition :name="transitionName" mode="out-in">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { getNavList } from "@/api/home";
import bus from "@/libs/bus";

export default {
  name: 'home',
  data() {
    return {
      scroll: null,
      navList: [],
      themeList: ["#d50b26", "#8bc34a", "#9447eb", "#ffa000"],
      bannerList: [],
      currentIndex: 0,
      screenWidth: document.documentElement.clientWidth,
      navItemWidth: document.documentElement.clientWidth / 4,
      transitionName: ""
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.currentIndex = to.meta.index;
    });
  },
  created() {
    this.loadNavList();
  },
  mounted() {
    this.initScroll();
  },
  activated() {
    this.scroll.enable()
    this.scroll.refresh();
    this.$nextTick(() => {
      this.$refs.underline.style.transform = `translate3d(${this.currentIndex * this.navItemWidth}px, 0, 0)`;
    });
  },
  deactivated() {
    this.scroll.disable();
  },
  beforeDestroy() {
    this.scroll.disable();
  },
  methods: {
    // 加载 navList
    loadNavList() {
      getNavList().then(res => {
        this.navList = res.data.list;
      });
    },

    initScroll() {
      this.scroll = new BScroll(this.$refs.scroll, {
        click: true,
        scrollbar: {
          fade: true
        }
      });
    },

    // 处理 nav 导航条的切换
    handleTabs(name, index) {
      if (name === "推荐") {
        this.$router.push({
          name: "recommend"
        });
        bus.$emit('onRouter', "recommend");
      } else if (name === "食品") {
        this.$router.push({
          name: "food"
        });
        bus.$emit('onRouter', "food");
      } else if (name === "数码") {
        this.$router.push({
          name: "digital"
        });
        bus.$emit('onRouter', "digital");
      } else if (name === "运动") {
        this.$router.push({
          name: "sport"
        });
        bus.$emit('onRouter', "sport");
      }

      this.transitionName = index > this.currentIndex ? "bounce-left" : "bounce-right";

      this.currentIndex = index;
      this.$refs.underline.style.transform = `translate3d(${this.currentIndex * this.navItemWidth}px, 0, 0)`;
    }
  }
};
</script>

<style lang="scss">
.home-page {
  position: relative;
  height: 100%;
  .scroll-wrapper {
    height: 100%;
    overflow: hidden;
  }
  .search-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 85px;
    font-size: 28px;
    .logo {
      width: 42px;
      height: 42px;
    }
    i {
      color: #fff;
      font-weight: 500;
      font-size: 36px;
    }
    .textarea {
      width: 558px;
      height: 56px;
      border-radius: 60px;
      margin: 0 30px;
      padding: 0 20px;
      color: #fff;
      background: rgba($color: #000000, $alpha: 0.1);
    }
  }
  .header-nav {
    position: relative;
    height: 96px;
    ul {
      display: flex;
    }
    li {
      flex: 1;
      font-size: 28px;
      font-weight: 700;
      color: #222;
      text-align: center;
      line-height: 96px;
    }
    .underline {
      position: absolute;
      bottom: 15px;
      width: 32px;
      height: 8px;
      margin-left: -16px;
      border-radius: 10px;
      transition: transform 0.2s;
    }
  }
}

.bounce-left-enter,
.bounce-right-leave-to {
  transform: translateX(100%);
}
.bounce-left-enter-active,
.bounce-left-leave-active,
.bounce-right-enter-active,
.bounce-right-leave-active {
  transition: transform 0.2s;
}
.bounce-left-enter-to,
.bounce-left-leave,
.bounce-right-enter-to,
.bounce-right-leave {
  transform: translateX(0);
}
.bounce-left-leave-to,
.bounce-right-enter {
  transform: translateX(-100%);
}
</style>
