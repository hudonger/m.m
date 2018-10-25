<template>
  <div class="user-page">
    <div class="header">
      <div class="user-wrap">
        <img class="avatar" src="@/assets/images/user.png" alt="头像">
        <div class="name">{{userInfo ? userInfo.name : '点击登录'}}</div>
      </div>
      <div class="icon-wrap">
        <i class="iconfont icon-xiaoxi"></i>
        <i class="iconfont icon-saoyisao"></i>
        <i class="iconfont icon-shezhi"></i>
      </div>
    </div>
    <div class="user-info" @click="$router.push('/login')">
      <img class="avatar" :src="userInfo ? avatar.in : avatar.out" alt="头像">
      <div class="name">{{userInfo ? userInfo.name : '点击登录'}}</div>
    </div>

    <div class="space"></div>

    <div class="link-list">
      <div class="item">
        <i class="iconfont icon-dingdan"></i>
        <div class="link">我的订单</div>
      </div>
      <div class="item">
        <i class="iconfont icon-gouwuche"></i>
        <div class="link">购物车</div>
      </div>
      <div class="item">
        <i class="iconfont icon-dizhiguanli"></i>
        <div class="link">地址管理</div>
      </div>
      <div class="item">
        <i class="iconfont icon-youhuiquan"></i>
        <div class="link">优惠券</div>
      </div>
    </div>

    <div class="space"></div>

    <div class="btn-wrap" v-show="userInfo">
      <m-button size="large" bg-color="#2b343b" txt-color="#fff" @click="loginout">退出登录</m-button>
    </div>
  </div>
</template>

<script>
import MButton from "@/components/button/button";
import { mapActions } from 'vuex';

const avatar = {
  in: require('@/assets/images/logo.png'),
  out: require('@/assets/images/user.png')
}

export default {
  components: {
    MButton
  },
  data() {
    return {
      avatar
    };
  },
  computed: {
    userInfo() {
      return this.$store.state.user.userInfo;
    }
  },
  methods: {
    ...mapActions(['handleLogout']),
    loginout() {
      this.handleLogout()
    }
  }
};
</script>

<style lang="scss" scoped>
.user-page {
  position: relative;
  width: 100%;
  height: 100%;
  background: #fff;
  color: #2b343b;
  .space {
    width: 100%;
    height: 16px;
    background: #f3f5f7;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 82px;
    padding: 0 32px;
    .user-wrap {
      display: flex;
      align-items: center;
      font-size: 30px;
      opacity: 0;
      img {
        width: 64px;
        height: 64px;
        margin-right: 10px;
      }
    }
    .icon-wrap {
      .iconfont {
        font-size: 46px;
        font-weight: bold;
        margin-left: 50px;
      }
    }
  }
  .user-info {
    display: flex;
    align-items: center;
    height: 162px;
    font-size: 42px;
    padding: 0 50px;
    img {
      width: 116px;
      height: 116px;
      margin-right: 32px;
    }
  }
  .link-list {
    .item {
      display: flex;
      align-items: center;
      height: 116px;
      font-size: 32px;
      .iconfont {
        flex: 0 0 116px;
        text-align: center;
      }
      .link {
        flex: 1;
        display: flex;
        align-items: center;
        height: 100%;
        border-bottom: 1px solid #e8ebed;
      }
    }
    .item:nth-of-type(1) {
      .iconfont {
        font-size: 52px;
      }
    }
    .item:nth-of-type(2) {
      .iconfont {
        font-size: 46px;
      }
    }
    .item:nth-of-type(3) {
      .iconfont {
        font-size: 52px;
      }
    }
    .item:nth-of-type(4) {
      .iconfont {
        font-size: 36px;
      }
      .link {
        border-bottom: none;
      }
    }
  }
  .btn-wrap {
    margin-top: 82px;
    padding: 0 80px;
    text-align: center;
  }
}
</style>
