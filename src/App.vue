<template>
  <div class="container">
<Header/>
<FirstContent/>
<About/>
  </div>
</template>

<script>

import Header from "./components/Header.vue"
import FirstContent from "./components/FirstContent.vue"
import About from "./components/About.vue"
export default {
  name: 'App',
  components: {
    About,
    Header,
    FirstContent,
  }
}
</script>

<style>
*{
  font-family: Red Hat Display, sans-serif;
}
body{
padding: 0;
margin: 0;
}
.container{

}
#app {
  background-color: #2F2F2F;
height: 1900px;
}
</style>
