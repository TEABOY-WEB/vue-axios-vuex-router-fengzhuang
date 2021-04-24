<template>
  <div id="app">
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/lesson" icon="search">课程</van-tabbar-item>
      <van-tabbar-item to="/profile" icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
/**这里我们可以放置一些公共样式覆盖 */
#app {
  display: flex;
  .van-dropdown-menu__item {
    background: $background;
  }
  .van-dropdown-menu__title {
    color: $color;
  }
}
</style>
