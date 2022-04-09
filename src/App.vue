<template>
  <div ref="container" class="v-container">
    <div v-if="danger" class="danger">
      <h1 class="dangerText">WARNING!!!</h1>
    </div>
    <Header />
    <FirstContent />
    <div class="row col-6 text-center m-auto">
      <div class="col mb-2">
        <button
          class="button btn"
          :disabled="exploded"
          @click="createElement()"
        >
          {{
            exploded == true
              ? "Lets not do that again &#128517;"
              : clickCount > 43
              ? "PLEASE STOP!"
              : clickCount > 25
              ? "Lets take it easy....."
              : "Add cool stuff"
          }}
        </button>
      </div>
      <div class="col mb-2">
        <button
          class="button btn"
          :disabled="exploded || flyingObjects.length < 1"
          @click="removeElements()"
        >
          Back to boring
        </button>
      </div>
    </div>

    <About />
    <div
      v-for="(animation, index) in flyingObjects"
      :key="index"
      class="ghost"
      :class="animation.class"
      style="color: white; position: absolute; opacity: 0.2"
      :style="{
        top: animation.y + 'px',
        left: animation.x + 'px',
        backgroundColor: animation.color,
        animationDuration: animation.duration + 's',
      }"
    ></div>
    <Specialties />
    <SocialMedia />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import FirstContent from "./components/FirstContent.vue";
import About from "./components/About.vue";
import Specialties from "./components/Specialties.vue";
import SocialMedia from "./components/SocialMedia.vue";
import FlyingObjects from "./flyingObjects.js";

export default {
  name: "App",
  components: {
    Specialties,
    About,
    Header,
    FirstContent,
    SocialMedia,
  },
  data() {
    return {
      flyingObjects: [],
      danger: false,
      clickCount: 0,
      exploded: false,
    };
  },
  methods: {
    createElement() {
      this.clickCount++;
      let container = this.$refs.container;
      for (let i = 0; i < 10; i++) {
        let objectAux = new FlyingObjects(
          container.offsetWidth,
          container.offsetHeight
        );
        this.flyingObjects.push(objectAux);
       
      }
    },
    removeElements() {
      this.clickCount = 0;
      this.flyingObjects = [];
      this.danger=false
    },
  },
  watch: {
    clickCount() {
      if (this.clickCount > 53) {
        this.danger = true;
      }
      if (this.clickCount > 80) {
        this.danger = false;
        this.clickCount = 0;
        this.flyingObjects = [];
        this.exploded = true;
        setTimeout(() => {
          this.exploded = false;
        }, 5000);
      }
    },
  },
  created() {
    fetch("https://api.countapi.xyz/hit/mygithubcounter/randomkey").then(response=>response.json()).then(data=>console.log(data))
  },
  mounted() {
  },
};
</script>

<style>
*,
p,
h1,
h2,
h3,
h4,
h5 {
  font-weight: bolder;
  font-family: Red Hat Display, sans-serif;
}
body {
  padding: 0;
  margin: 0;
}
.v-container {
  position: relative;
  background-color: #2f2f2f;
  overflow: hidden;
}
#app {
  height: 1900px;
}
.ghost > * {
  animation: fly 25s linear infinite;
  z-index: 99999999999;
  pointer-events: none;
  opacity: 0.5;
}
.circular {
  animation: fly linear infinite;
  pointer-events: none;
  z-index: 99999999;
  width: 5vh;
  height: 5vh;
  border-radius: 50%;
}
.square {
  animation: fly linear infinite;
  pointer-events: none;
  z-index: 99999999;
  width: 5vh;
  height: 5vh;
}
.danger {
  animation: danger 1s linear infinite;
  pointer-events: none;
  z-index: 9999999999999999;
  position: fixed;
  width: 100vw;
  height: 100vh;
  border: solid red;
  box-shadow: inset 0px 0px 50px 20px #ff0000;
}
.dangerText {
  pointer-events: none;
  position: fixed;
  top: 25%;
  left: 25%;
  z-index: 9999999999999999;
  font-size: clamp(3rem,10vw,10rem);
  color: red;
}
.button {
  font-family: Red Hat Display, sans-serif;
  font-weight: bolder;
  color: black;
  background-color: rgb(31, 221, 238);
  min-width: 160px;
}

@keyframes fly {
  0% {
    transform: translate(-200%, 110vh) rotateZ(0deg);
    opacity: 1;
  }

  12.5% {
    transform: translate(120vw, -120%) rotateZ(20deg);
  }

  25% {
    transform: translate(-200%, 50vh) scale(1.75) rotateZ(-20deg);
  }

  37.5% {
    transform: translate(-200%, -120%) rotateZ(-40deg);
    opacity: 0.5;
  }

  50% {
    transform: translate(100vw, 50vh) rotateZ(0deg);
  }

  62.5% {
    transform: translate(20vw, 100vh) rotateZ(20deg);
  }
  75% {
    transform: translate(200%, 100vh) rotateZ(20deg);
    opacity: 0.25;
  }
  87.5% {
    transform: translate(50vw, -200%) scale(1.75) rotateZ(20deg);
  }

  100% {
    transform: translate(-200%, 110vh) rotateZ(0deg);
    opacity: 1;
  }
}

@keyframes danger {
  0% {
    box-shadow: inset 0px 0px 50px 50px #ff0000;
  }

  50% {
    box-shadow: inset 0px 0px 50px 100px #ff0000;
  }
  100% {
    box-shadow: inset 0px 0px 50px 50px #ff0000;
  }
}
</style>
