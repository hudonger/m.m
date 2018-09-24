<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>

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
  overflow: hidden;
}
</style>
