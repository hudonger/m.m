<template>
  <div class="login-page">
    <div class="close">
      <i class="iconfont icon-fanhui" @click="handleClose"></i>
    </div>

    <div class="title">{{pageTitle}}</div>

    <div class="form">
      <div class="form-item">
        <input v-model.trim="userVal" type="text" placeholder="邮箱">
      </div>
      <div class="form-item">
        <input v-model="passwordVal" :type="passwordShow ? 'text' : 'password'" placeholder="密码">
        <i :class="['eye', 'iconfont', passwordShow ? 'icon-mimakejian' : 'icon-bukejian']" @click="passwordShow = !passwordShow"></i>
      </div>
    </div>

    <div class="btn-wrap">
      <m-button size="large" bg-color="#2b343b" txt-color="#fff" @click="handleSubmit">{{pageTitle}}</m-button>
    </div>

    <div class="to-register">
      <span>{{tipsText}}?</span>
      <a href="javascript:;" style="color: #16b5f9" @click="isLogin = !isLogin">&nbsp;{{linkTo}}</a>
    </div>

    <div v-show="isLogin" class="other-login">
      <div class="title">社交账号登录</div>
      <div class="icon-list">
        <i class="iconfont icon-wechat-fill"></i>
        <i class="iconfont icon-QQ"></i>
        <i class="iconfont icon-weibo"></i>
      </div>
    </div>

    <div v-show="loadStatus" class="loading-container">
      <loading></loading>
    </div>
  </div>
</template>

<script>
import MButton from "@/components/button/button";
import Loading from "@/components/loading/loading";
import { validator } from "@/libs/util";
import { login, register } from "@/api/user";
import { mapActions } from 'vuex';
import axios from 'axios';

export default {
  components: {
    MButton,
    Loading
  },
  data() {
    return {
      loginPage: {
        title: "登录",
        text: "没有账号",
        linkTo: "去注册"
      },
      registerPage: {
        title: "注册",
        text: "已有账号",
        linkTo: "去登录"
      },
      isLogin: true,
      loadStatus: false,
      userVal: "",
      passwordVal: "",
      passwordShow: false
    };
  },
  computed: {
    pageTitle() {
      return this.isLogin ? this.loginPage.title : this.registerPage.title;
    },
    tipsText() {
      return this.isLogin ? this.loginPage.text : this.registerPage.text;
    },
    linkTo() {
      return this.isLogin ? this.loginPage.linkTo : this.registerPage.linkTo;
    }
  },
  methods: {
    ...mapActions(['handleLogin']),

    handleClose() {
      this.$router.go(-1);
    },

    handleSuccess(res) {
      this.loadStatus = false;
      this.userVal = '',
      this.passwordVal = '',
      this.$toast({
        content: res.msg
      });
      this.$router.push('/user')
    },

    handleSubmit() {
      const result = this.formValidata();

      if (result.status) {
        this.loadStatus = true;
        const data = {
          user: this.userVal,
          password: this.passwordVal
        };

        if (this.isLogin) {
          this.handleLogin(data).then(res => {
            this.handleSuccess(res)
          })
        } else {
          this.handleLogin(data).then(res => {
            this.handleSuccess(res)
          })
        }
      } else {
        this.$toast({
          content: result.msg
        });
      }
    },

    formValidata() {
      const result = {
        status: false,
        msg: ""
      };

      if (!validator("email", this.userVal)) {
        result.msg = "邮箱格式不正确";
        return result;
      }

      if (!this.passwordVal) {
        result.msg = "密码不能为空";
        return result;
      }

      result.status = true;
      result.msg = "验证成功";
      return result;
    }
  }
};
</script>

<style lang="scss">
.login-page {
  position: relative;
  color: #2b343b;
  overflow: hidden;
  .close {
    margin-top: 77px;
    padding: 0 40px;
    i {
      display: block;
      font-size: 30px;
      font-weight: 700;
    }
  }
  .title {
    text-align: center;
    font-size: 46px;
    margin-top: 42px;
  }
  .form {
    margin-top: 100px;
    padding: 0 82px;
    .form-item {
      position: relative;
      height: 68px;
      border-bottom: 1px solid #e0e0e0;
      input::-webkit-input-placeholder {
        color: #b2b2b2;
      }
      input {
        display: block;
        width: 100%;
        height: 100%;
        font-size: 32px;
        color: #2b343b;
      }
      .eye {
        position: absolute;
        top: 50%;
        right: 24px;
        transform: translateY(-50%);
        font-size: 48px;
        color: #707477;
      }
    }
    .form-item + .form-item {
      margin-top: 70px;
    }
  }
  .btn-wrap {
    margin-top: 82px;
    padding: 0 80px;
    text-align: center;
  }
  .to-register {
    margin-top: 80px;
    font-size: 32px;
    text-align: center;
  }
  .other-login {
    margin-top: 220px;
    .title {
      font-size: 32px;
      margin-top: 0;
    }
    .icon-list {
      width: 100%;
      text-align: center;
      padding-top: 80px;
      i {
        color: #72777d;
        font-size: 72px;
        padding: 0 56px;
      }
    }
  }
  .loading-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
