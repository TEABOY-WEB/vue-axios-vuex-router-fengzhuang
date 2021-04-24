<template>
  <div class="wrapper">
    <HomeHeader v-model="currentCategory"></HomeHeader>
    {{ category }}
  </div>
</template>

<script>
import HomeHeader from "./home-header";
import { createNamespacedHelpers } from "vuex";
import * as Types from "@/store/action-types";
let {
  mapState: mapHomeState,
  mapMutations: mapHomeMutations,
  mapActions,
} = createNamespacedHelpers("home");
export default {
  methods: {
    ...mapHomeMutations([Types.SET_CATEGORY]),
    ...mapActions([Types.SET_SLIDERS]),
  },
  mounted() {
    this[Types.SET_SLIDERS]();
  },
  computed: {
    ...mapHomeState(["category", "slides"]),
    currentCategory: {
      get() {
        console.log("get");
        return this.category;
      },
      set(newValue) {
        console.log("set", newValue);
        this[Types.SET_CATEGORY](newValue);
      },
    },
  },
  components: {
    HomeHeader,
  },
  data() {
    return {
      value: -1,
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  flex: 1;
}
</style>