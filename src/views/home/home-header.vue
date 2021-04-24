<template>
  <div class="home_header">
    <img src="../../assets/logo.png" alt="" />
    <van-dropdown-menu>
      <van-dropdown-item
        :value="value"
        :options="categories"
        @change="change"
      />
    </van-dropdown-menu>
  </div>
</template>

<script>
export default {
  props: {
    value: Number,
  },
  data() {
    return {
      categories: [
        { text: "全部课程", value: -1 },
        { text: "NODE课程", value: 0 },
        { text: "VUE课程", value: 1 },
        { text: "REACT课程", value: 2 },
      ],
    };
  },
  methods: {
    change(newValue) {
      this.$emit("input", newValue);
    },
  },
};
</script>
<style lang="scss" scoped>
.home_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  background: $background;
  padding: 0 20px;
  img {
    width: 30px;
    height: 30px;
  }
}
</style>