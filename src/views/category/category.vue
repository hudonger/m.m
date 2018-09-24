<template>
  <div class="category-page">
    <transition
      name="fade"
      mode="out-in"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <on-load v-show="!loadStatus"></on-load>
    </transition>

    <search-header title="分类"></search-header>

    <div class="category-wrapper" v-if="dataList.length">
      <!-- 侧边栏 -->
      <div class="side-menu" ref="sideScroll">
        <ul>
          <li
            v-for="(item, index) in dataList"
            :key="item.label"
            :class="currentIndex === index ? 'active' : ''"
            @click="scrollToCategory(index)"
          >
            {{item.label}}
          </li>
        </ul>
      </div>

      <div class="type-list" ref="listScroll" @touchStart="scrollType = 3">
        <div>

          <div class="list-item" v-for="item in dataList" :key="item.label">
            <div class="title">{{item.content.title}}</div>
            <div class="content">
              <div
                class="categorys"
                v-for="(v, i) in item.content.list"
                :key="i"
                @click="toList(v.category_id, v.name)"
              >
                <img :src="v.img" alt="categorys">
                <span>{{v.name}}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OnLoad from "./components/onLoad";
import SearchHeader from "@/components/search-header/search-header";
import { getCategory } from "@/api/category";
import bus from "@/libs/bus.js";
import Bscroll from "better-scroll";
import { css } from '../../libs/util';

export default {
  components: {
    OnLoad,
    SearchHeader
  },
  data() {
    return {
      loadStatus: false,
      currentIndex: 0,
      topList: [],
      listScroll: null,
      scrollType: 3,
      dataList: []
    };
  },
  activated() {
    if (this.listScroll) {
      this.listScroll.enable();
      this.listScroll.refresh();
    }
  },
  deactivated() {
    this.listScroll.disable();
  },
  beforeDestroy() {
    this.listScroll.disable();
  },
  methods: {
    // 加载分类数据
    loadCategory() {
      getCategory().then(res => {
        setTimeout(() => {
          this.loadStatus = true;
          bus.$emit("loaded", true);
        }, 200);

        this.dataList = res.data;
        this.$nextTick(() => {
          this.initListScroll();
          this.handleListScroll();
        })
      });
    },
    // 初始化分类列表
    initListScroll() {
      this.listScroll = new Bscroll(this.$refs.listScroll, {
        click: true,
        probeType: this.scrollType
      });
    },
    // 侧边栏点击事件
    scrollToCategory(index) {
      this.scrollType = 0;
      this.currentIndex = index;
      let listItem = document.querySelectorAll(".list-item");
      this.listScroll.scrollTo(0, -this.topList[index], 200);
    },
    // 处理分类列表滚动
    handleListScroll() {
      let listItem = document.querySelectorAll(".list-item");
      listItem.forEach((item, index) => {
        this.topList.push(item.offsetTop);
      });

      let wrapper = this.$refs.listScroll;
      let laseEl = listItem[listItem.length - 1];
      let wrapperHeight = css(wrapper, 'height');
      let lastElHeight = css(laseEl, 'height');
      if (lastElHeight < wrapperHeight) {
        css(laseEl, 'height', wrapperHeight);
        this.listScroll.refresh();
      }

      this.listScroll.on("scroll", (pos) => {
        this.topList.forEach((item, index) => {
          if (pos.y <= -(item - 100)) {
            this.currentIndex = index;
          }
        })
      });
    },

    // 处理路由跳转
    toList(id, name) {
      this.$router.push({
        name: 'goodsList',
        params: {id, name}
      })
    }
  },
  mounted() {
    this.loadCategory();
  }
};
</script>

<style lang="scss" scoped>
.category-page {
  position: relative;
  width: 100%;
  height: 100%;
  .category-wrapper {
    display: flex;
    width: 100%;
    height: calc(100% - 100px);
    .side-menu {
      flex: 0 0 158px;
      width: 158px;
      height: 100%;
      background: #f4f4f4;
      overflow: hidden;
      ul {
        width: 100%;
        li {
          width: 100%;
          height: 90px;
          line-height: 90px;
          text-align: center;
          font-size: 24px;
          color: #2b343b;
        }
        .active {
          font-size: 32px;
          color: #fb7299;
          background: #fff;
        }
      }
    }
    .type-list {
      flex: 1;
      height: 100%;
      overflow: hidden;
      .list-item {
        padding: 30px;
        .title {
          font-size: 32px;
          font-weight: bold;
        }
        .content {
          display: flex;
          flex-wrap: wrap;
          .categorys {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 24px;
            width: 33.33333%;
            padding-top: 38px;
            img {
              width: 100px;
              height: 100px;
              margin-bottom: 20px;
            }
          }
        }
      }
    }
  }
}
</style>
