<template>
  <div id="app">
    <transition
      name="fade"
      mode="out-in"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <keep-alive>
        <router-view/>
      </keep-alive>
    </transition>

    <!-- 底部导航栏 -->
    <navigation />
  </div>
</template>

<script>
import Navigation from "./components/navigation/navigation";

export default {
  name: "App",
  components: {
    Navigation
  }
};
</script>

<style lang="scss">
#app {
  position: relative;
  width: 100%;
  height: 100%;
  padding-bottom: 92px;
}
</style>
