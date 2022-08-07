<template>
  <div class="elements-description">
    <body class="body">
      <div class="wrapper">
        <div class="joystick">
          <div class="up" @click="goUp">
            <Arrow :color="arrow_color_top"></Arrow>
          </div>
          <div class="down" @click="goDown">
            <Arrow :color="arrow_color_bottom"></Arrow>
          </div>
        </div>
        <div class="main">
          <div v-for="girl in girls" :key="girl.name" class="girls">
            <div class="wrapper-girls">
              <div class="text-block">
                <div class="desc">
                  <div class="title">
                    <p>{{ girl.title }}</p>
                  </div>
                  <div class="text">
                    <p>{{ girl.text }}</p>
                  </div>
                </div>
                <div class="services">
                  <div class="title">
                    <p @click="$store.commit('changeElement', 1)">SERVICES</p>
                  </div>
                  <div class="section-block">
                    <div v-for="sum in girl.price" :key="sum" class="section">
                      <div class="hours"><p>for 1 hour</p></div>
                      <div class="price">
                        <div class="num">${{ sum }}</div>
                        <div class="icon">
                          <img src="@/assets/svg/bucket.svg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="img-block">
                <img :src="require(`../assets/svg/${girl.img}`)" alt="" />
                <div class="under-img">
                  <div class="name">
                    <p>{{ girl.name }}</p>
                  </div>
                  <div class="icon-like">
                    <img src="@/assets/svg/liked.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import Arrow from "@/assets/svg/ArrowJoystick.vue";

export default {
  name: "ElementsDescription",
  components: {
    Arrow: Arrow,
  },
  data() {
    return {
      girls: [
        {
          title: "WITCH OF FIRE",
          text: "Lina discovered her abilities in early childhood, already at the age of 10 she masterfully controlled them. It can make a fire, calm it down, direct it in various directions. Throughout her life, she has saved many people, animals, cities and forests.",
          price: [129, 449, 899, 1999],
          img: "fire-lina.svg",
          name: "Lina Lee",
        },
        {
          title: "WITCH OF WATER",
          text: "Amanda has lived off the shores of the Atlantic Ocean since birth. Once there was a tsunami in her town - then she showed her abilities for the first time. On that day, Amanda saved about 10,000 residents of this town. It can cause water flows, calm them, direct them in various directions. Capable of stopping tsunamis and floods.",
          price: [139, 529, 999, 2199],
          img: "water-amanda.svg",
          name: "Amanda Blue",
        },
        {
          title: "WITCH OF AIR",
          text: "Katara found her abilities in adolescence and it was then that she began to use them to their full potential. More than once she sent hurricanes to her city so as not to write test papers. It can easily manage weather conditions - send and disperse clouds, thunderstorms, storms. The force of the wind can move huge objects from their places.",
          price: [139, 519, 999, 2199],
          img: "air-katara.svg",
          name: "Katara May",
        },
        {
          title: "WITCH OF EARTH",
          text:
            "Olga was born and raised in Russia. At home and in the world, she is considered the best witch of the earth. The peculiarity of Olga is that she owns not only the elements of the earth, but also she knows how to influence flora and fauna.\n" +
            "It can help with changing the landscape, pacifying flora and fauna.",
          price: [139, 529, 999, 2199],
          img: "earth-olga.svg",
          name: "Olga Petrova",
        },
      ],
      arrow_color_top: "#dfdfdf",
      arrow_color_bottom: "black",
      navbar_color: 1,
      click_up: 0,
      click_down: 0,
      color_fire: false,
    };
  },
  created() {
    //setTimeout(this.startWithFire, 5);
    window.addEventListener("scroll", this.onScroll);
    if (window.scrollY === 0) {
      this.$store.commit("changeElement", 1);
    }
  },
  unmounted() {
    window.removeEventListener("scroll", this.onScroll);
    this.$store.commit("changeElement", 0);
  },
  methods: {
    onScroll() {
      console.log(window.scrollY);
      if (window.scrollY < 600) {
        this.arrow_color_top = "#dfdfdf";
        this.navbar_color = 1;
      } else {
        this.arrow_color_top = "black";
        this.navbar_color = 0;
      }
      if (window.scrollY >= 600 && window.scrollY < 1550) {
        this.navbar_color = 2;
      }
      if (window.scrollY >= 1550 && window.scrollY < 2400) {
        this.navbar_color = 3;
      }
      if (window.scrollY >= 2400) {
        this.arrow_color_bottom = "#dfdfdf";
        this.navbar_color = 4;
      } else {
        this.arrow_color_bottom = "black";
      }
      this.$store.commit("changeElement", this.navbar_color);
    },
    goUp() {
      // console.log("get up");
      if (this.navbar_color === 2) {
        console.log("error up");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      if (this.navbar_color === 3) {
        window.scrollTo({ top: 1130, behavior: "smooth" });
      }
      if (this.navbar_color === 4) {
        window.scrollTo({ top: 2100, behavior: "smooth" });
      }
    },
    goDown() {
      if (this.navbar_color === 1) {
        window.scrollTo({ top: 1130, behavior: "smooth" });
        console.log("get down");
      }
      if (this.navbar_color === 2) {
        window.scrollTo({ top: 2100, behavior: "smooth" });
        console.log("get down");
      }
      if (this.navbar_color === 3) {
        window.scrollTo({ top: 2763, behavior: "smooth" });
        console.log("get down");
      }
    },
  },
  // watch: {
  //   navbar_color: function (newColor) {
  //     this.$store.commit("changeElement", newColor);
  //   },
  // },
};
</script>

<style scoped>
.body {
  padding-top: 140px;
}
.elements-description body {
  max-width: 1440px;
  margin: 0 auto;
}
.wrapper {
}
.joystick {
  position: fixed;
  margin-left: 20px;
  margin-top: 70px;
}
.joystick .up {
  transform: rotate(200grad);
  cursor: pointer;
}
.joystick .down {
  margin-top: 70vh;
  cursor: pointer;
}
.main {
  margin-left: 150px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 350px;
}
.girls:last-child {
  border: none;
}
.girls {
  min-height: 50vh;
  margin-bottom: 80px;
  border-bottom: 1px solid #eaeaea;
  padding-top: 150px;
  padding-bottom: 70px;
}
.wrapper-girls {
  display: flex;
}
.text-block {
  flex: 0 0 50%;
  margin-right: 54px;
}
.services {
  margin-top: 8px;
}
.services .title {
  margin-bottom: 4px;
}
.section-block {
  display: flex;
  flex-direction: column;
  font-family: "Jura", sans-serif !important;
}
.section-block p {
  font-family: "Jura", sans-serif !important;
}
.section {
  display: flex;
  justify-content: space-between;
  background-color: rgba(217, 217, 217, 0.55);
  margin-bottom: 12px;
  max-height: 43px;
}
.hours {
  font-size: 32px;
}
.price {
  display: flex;
  align-items: center;
}
.price .num {
  font-size: 32px;
  margin-right: 6px;
}
.title {
  font-size: 38px;
  text-decoration: underline;
}
.text {
  font-size: 30px;
}
.img-block {
  flex: 0 0 500px;
}
.img-block img {
  width: 100%;
}
.under-img {
  display: flex;
}
.under-img .name {
  font-size: 32px;
  flex: 0 0 85%;
  text-align: center;
  margin-left: 12px;
}
.under-img .icon-like {
  flex: 0 1 15%;
}
.icon-like img {
  width: 80%;
}
</style>
