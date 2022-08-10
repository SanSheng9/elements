<template>
  <div class="elements">
    <div class="wrapper">
      <div class="girls">
        <div
          class="fire"
          :style="{ opacity: style_elem_one }"
          @mouseover="mouseOver(1)"
          @mouseleave="mouseOver(0)"
          @click="goElem(1)"
        >
          <img src="@/assets/svg/fire.svg" alt="" />
          <p>fire</p>
        </div>
        <div
          class="air"
          :style="{ opacity: style_elem_two }"
          @mouseover="mouseOver(2)"
          @mouseleave="mouseOver(0)"
          @click="goElem(2)"
        >
          <img src="@/assets/svg/air.svg" alt="" />
          <p>air</p>
        </div>
        <div
          class="water"
          :style="{ opacity: style_elem_three }"
          @mouseover="mouseOver(3)"
          @mouseleave="mouseOver(0)"
          @click="goElem(3)"
        >
          <img src="@/assets/svg/water.svg" alt="" />
          <p>water</p>
        </div>
        <div
          class="earth"
          :style="{ opacity: style_elem_four }"
          @mouseover="mouseOver(4)"
          @mouseleave="mouseOver(0)"
          @click="goElem(4)"
        >
          <img src="@/assets/svg/earth.svg" alt="" />
          <p>earth</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Elements",
  data() {
    return {
      no_hover_opacity: 50 + "%",
      hover_element: 0,
      style_elem_one: 100 + "%",
      style_elem_two: 100 + "%",
      style_elem_three: 100 + "%",
      style_elem_four: 100 + "%",
    };
  },
  methods: {
    mouseOver(num) {
      if (num === 0) {
        this.style_elem_one = 100 + "%";
        this.style_elem_two = 100 + "%";
        this.style_elem_three = 100 + "%";
        this.style_elem_four = 100 + "%";
      }
      if (num === 1) {
        this.style_elem_two = 50 + "%";
        this.style_elem_three = 50 + "%";
        this.style_elem_four = 50 + "%";
      }
      if (num === 2) {
        this.style_elem_one = 50 + "%";
        this.style_elem_three = 50 + "%";
        this.style_elem_four = 50 + "%";
      }
      if (num === 3) {
        this.style_elem_two = 50 + "%";
        this.style_elem_one = 50 + "%";
        this.style_elem_four = 50 + "%";
      }
      if (num === 4) {
        this.style_elem_two = 50 + "%";
        this.style_elem_three = 50 + "%";
        this.style_elem_one = 50 + "%";
      }
    },
    async goElem(num) {
      if (num === 1) {
        await this.$router.push("/elements");
        await window.scrollTo({ top: 0 });
      } else if (num === 2) {
        await this.$router.push("/elements");
        await window.scrollTo({ top: 1900 });
      } else if (num === 3) {
        await this.$router.push("/elements");
        await window.scrollTo({ top: 960 });
      } else if (num === 4) {
        await this.$router.push("/elements");
        await window.scrollTo({ top: 2775 });
      }
    },
  },
};
</script>

<style scoped>
.wrapper {
}
.girls {
  display: flex;
  justify-content: space-around;
}
@media (max-width: 1000px) {
  .girls {
    flex-direction: column;
    align-items: center;
    align-content: center;
  }
  .fire,
  .water,
  .air,
  .earth {
    margin-bottom: 100px;
  }
}
.girls p {
  font-size: 28px;
  text-transform: uppercase;
  text-align: center;
}
.fire,
.air,
.water,
.earth {
  max-height: 437px;
  position: relative;
  transition: all 0.5s ease;
}
.fire:hover,
.air:hover,
.water:hover,
.earth:hover {
  cursor: pointer;
}
.fire p {
  color: #e35c55;
}
.fire p:after {
  background-color: #e35c55;
}
.air p {
  color: #6c8e9a;
}
.air p:after {
  background-color: #6c8e9a;
}
.water p {
  color: #428371;
}
.water p:after {
  background-color: #428371;
}
.earth p {
  color: #4d3b34;
}
.earth p:after {
  background-color: #4d3b34;
}
.fire p,
.water p,
.air p,
.earth p {
  margin-top: 25px;
}
.fire p:after,
.water p:after,
.air p:after,
.earth p:after {
  content: "";
  position: absolute;
  width: 227px;
  height: 3px;
  top: 456px;
  left: 7px;
}
.elements {
  min-width: 100vw;
}
</style>
