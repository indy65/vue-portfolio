<template>
  <div class="container">
<Header/>
<FirstContent/>
<About/>
<Specialties/>
  </div>
</template>

<script>

import Header from "./components/Header.vue"
import FirstContent from "./components/FirstContent.vue"
import About from "./components/About.vue"
import Specialties from "./components/Specialties.vue"
export default {
  name: 'App',
  components: {
    Specialties,
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
background-color: #2F2F2F;
}
#app {
  
height: 1900px;
}
</style>
