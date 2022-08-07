<template>
  <div class="navbar">
    <div class="wrapper">
      <div class="nav">
        <p class="navigation-text">navigation</p>
      </div>
      <div class="logo" @click="$router.push('/')">
        <div class="logo-elem">
          <div class="wrapper-logo-elem">
            <div class="cross">
              <img src="@/assets/svg/logo/cross.svg" alt="" />
            </div>
            <div class="fire-left">
              <img
                :class="{ deactivate: fire_on }"
                class="fire-img"
                src="@/assets/svg/logo/fire-left.svg"
                alt=""
              />
              <img
                :class="{ activate: fire_on }"
                class="fire-img-active"
                src="@/assets/svg/logo/fire-active.svg"
                alt=""
              />
            </div>
            <div class="water-right">
              <img
                class="water-img"
                :class="{ deactivate: water_on }"
                src="@/assets/svg/logo/water-right.svg"
                alt=""
              />
              <img
                class="water-img-active"
                :class="{ activate: water_on }"
                src="@/assets/svg/logo/water-active.svg"
                alt=""
              />
            </div>
            <div class="air-up">
              <img
                class="air-img"
                :class="{ deactivate: air_on }"
                src="@/assets/svg/logo/air-up.svg"
                alt=""
              />
              <img
                class="air-img-active"
                :class="{ activate: air_on }"
                src="@/assets/svg/logo/air-active.svg"
                alt=""
              />
            </div>
            <div class="earth-down">
              <img
                class="earth-img"
                :class="{ deactivate: earth_on }"
                src="@/assets/svg/logo/earth-down.svg"
                alt=""
              />
              <img
                class="earth-img-active"
                :class="{ activate: earth_on }"
                src="@/assets/svg/logo/earth-active.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="logo-word">
          <p>ELEMENTALS</p>
        </div>
      </div>
      <div class="buttons">
        <div class="liked" @click="count_likes++">
          <img src="@/assets/svg/liked.svg" alt="" />
          <!--          <div class="count-likes" :style="{ right: count_right_likes + 'px' }">-->
          <!--            {{ count_likes }}-->
          <!--          </div>-->
        </div>
        <div class="bucket" @click="count_bucket++">
          <img src="@/assets/svg/bucket.svg" alt="" />
          <!--          <div-->
          <!--            class="count-bucket"-->
          <!--            :style="{ right: count_right_bucket + 'px' }"-->
          <!--          >-->
          <!--            {{ count_bucket }}-->
          <!--          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
  props: {},
  data() {
    return {
      count_likes: 8,
      count_right_likes: 1,
      count_bucket: 8,
      count_right_bucket: 3,
      fire_on: false,
      air_on: false,
      water_on: false,
      earth_on: false,
      color: this.$store.getters.getElement,
    };
  },
  computed: {
    element() {
      return this.$store.state.element;
    },
  },
  watch: {
    color: function (NewValue) {
      // Fire
      if (NewValue === 1) {
        (this.fire_on = true),
          (this.air_on = false),
          (this.water_on = false),
          (this.earth_on = false);
      }
      // Water
      if (NewValue === 2) {
        (this.water_on = true),
          (this.air_on = false),
          (this.fire_on = false),
          (this.earth_on = false);
      }
      // Air
      if (NewValue === 3) {
        (this.water_on = false),
          (this.air_on = true),
          (this.fire_on = false),
          (this.earth_on = false);
      }
      // Earth
      if (NewValue === 4) {
        (this.water_on = false),
          (this.air_on = false),
          (this.fire_on = false),
          (this.earth_on = true);
      }
    },
    // count_likes: function (NewValue, OldValue) {
    //   if (NewValue === 10 && OldValue === 9) {
    //     this.count_right_likes -= 2;
    //   }
    //   if (NewValue === 9 && OldValue === 10) {
    //     this.count_right_likes += 2;
    //   }
    // },
    // count_bucket: function (NewValue, OldValue) {
    //   if (NewValue === 10 && OldValue === 9) {
    //     this.count_right_bucket -= 2;
    //   }
    //   if (NewValue === 9 && OldValue === 10) {
    //     this.count_right_bucket += 2;
    //   }
    // },
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  min-width: 100%;
  max-height: 130px;
  background-color: white;
  padding-bottom: 30px;
  top: 0;
  padding-top: 30px;
  border-bottom: 1px solid #eaeaea;
}
.wrapper {
  display: flex;
  align-content: center;
  justify-content: space-around;
  align-items: center;
}
.navigation-text {
  color: #6b6565;
  font-size: 28px;
  font-family: "Jura", sans-serif;
  font-weight: 300;
  line-height: 33px;
  text-align: center;
  letter-spacing: 0.04em;
}
.logo {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.logo-word {
  font-family: "Jura", serif;
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 38px;
  /* identical to box height */
  text-align: center;
  letter-spacing: 0.04em;
  margin-left: 8px;
}
.buttons {
  display: flex;
}
.liked {
  margin-right: 6px;
  position: relative;
}
/*.liked::before {*/
/*  content: "";*/
/*  background-color: #6b6565;*/
/*  position: absolute;*/
/*  top: 5px;*/
/*  left: 29px;*/
/*  min-width: 10px;*/
/*  min-height: 10px;*/
/*  border-radius: 100%;*/
/*}*/
.bucket {
  position: relative;
}
/*.bucket::before {*/
/*  content: "";*/
/*  background-color: #6b6565;*/
/*  position: absolute;*/
/*  top: 5px;*/
/*  left: 27px;*/
/*  min-width: 10px;*/
/*  min-height: 10px;*/
/*  border-radius: 100%;*/
/*}*/
.bucket img {
  max-width: 70%;
}
.count-bucket,
.count-likes {
  position: absolute;
  color: white;
  font-size: 8px;
}
.count-likes {
  top: 5px;
}
.count-bucket {
  top: 5px;
}
img {
  max-width: 73%;
}
.logo-elem {
  margin-top: 8px;
}
.wrapper-logo-elem {
  position: relative;
}
.fire-left,
.water-right,
.air-up,
.earth-down,
.cross {
  position: relative;
}
.fire-left {
  top: -37px;
  left: -11px;
}
.water-right {
  top: -35px;
  right: -35px;
}
.air-up {
  top: -62px;
  left: 11px;
}
.earth-down {
  bottom: 10px;
  left: 12px;
}
.fire-img-active,
.fire-img,
.water-img,
.water-img-active,
.air-img,
.air-img-active,
.earth-img,
.earth-img-active {
  position: absolute;
  transition: 0.3s ease;
}
.fire-img-active,
.water-img-active,
.air-img-active,
.earth-img-active {
  opacity: 0;
}
.deactivate {
  opacity: 0;
}
.activate {
  opacity: 100%;
}
.fire-img-active.activate {
  -webkit-box-shadow: 0px 5px 5px -5px rgba(243, 121, 34, 1);
  -moz-box-shadow: 0px 5px 5px -5px rgba(243, 121, 34, 1);
  box-shadow: 0px 5px 5px -5px rgba(243, 121, 34, 1);
}
.water-img-active.activate {
  -webkit-box-shadow: 0px -5px 5px -5px rgba(33, 184, 217, 1);
  -moz-box-shadow: 0px -5px 5px -5px rgba(33, 184, 217, 1);
  box-shadow: 0px -5px 5px -5px rgba(33, 184, 217, 1);
}
.air-img-active.activate {
  -webkit-box-shadow: 0px 5px 5px -5px rgba(200, 221, 222, 1);
  -moz-box-shadow: 0px 5px 5px -5px rgba(200, 221, 222, 1);
  box-shadow: 0px 5px 5px -5px rgba(200, 221, 222, 1);
}
.earth-img-active.activate {
  -webkit-box-shadow: 0px -5px 5px -5px rgba(77, 210, 75, 1);
  -moz-box-shadow: 0px -5px 5px -5px rgba(77, 210, 75, 1);
  box-shadow: 0px -5px 5px -5px rgba(77, 210, 75, 1);
}
</style>
