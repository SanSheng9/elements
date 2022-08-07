<template>
  <Navbar></Navbar>
  <slot></slot>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "default",
  components: {
    Navbar: Navbar,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.default {
  position: relative;
  overflow: hidden;
}
</style>
