<template>
  <div class="tagline">
    <div class="banner">
      <div class="wrapper-banner">
        <p>four elements, four sisters, endless possibilities</p>
      </div>
    </div>
  </div>
  <Elements class="elements-home" />
</template>

<script>
import Elements from "@/components/Elements.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {
    Elements: Elements,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.elements-home {
  max-width: 1440px;
  margin: 0 auto;
  max-height: 100vh;
  margin-top: 10vh !important;
  min-width: 100vw;
}
.tagline {
  margin-top: 200px;
}
.wrapper-banner {
  background: linear-gradient(
      89.97deg,
      rgba(211, 94, 81, 0.4) 0.02%,
      rgba(192, 220, 231, 0.69) 30.22%,
      rgba(96, 202, 183, 0.64) 70.3%,
      rgba(120, 104, 80, 0.63) 99.98%
    )
    top;
}
.banner p {
  font-size: 40px;
  text-align: center;
  padding-top: 16px;
  padding-bottom: 16.5px;
}
.tagline {
  margin-bottom: 66px;
}
/*.hr::after {*/
/*  content: "";*/
/*  position: absolute;*/
/*  top: 1px;*/
/*  left: 0px;*/
/*  background: white;*/
/*  height: 1px;*/
/*  width: 100vw;*/
/*}*/
@media (max-width: 890px) {
  .tagline {
    margin-top: 130px;
    margin-bottom: 0;
  }
}
</style>
