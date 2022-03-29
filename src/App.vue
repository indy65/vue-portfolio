<template>
  <div class="v-container">
<Header/>
<FirstContent/>
<About/>
<Specialties/>
<SocialMedia/>
  </div>
</template>

<script>

import Header from "./components/Header.vue"
import FirstContent from "./components/FirstContent.vue"
import About from "./components/About.vue"
import Specialties from "./components/Specialties.vue"
import SocialMedia from "./components/SocialMedia.vue"
export default {
  name: 'App',
  components: {
    Specialties,
    About,
    Header,
    FirstContent,
    SocialMedia,
  }
}
</script>

<style>
*,p,h1,h2,h3,h4,h5{
 
  font-weight: bolder;
  font-family: Red Hat Display, sans-serif;
 
}
body{
padding: 0;
margin: 0;
}
.v-container{
background-color: #2F2F2F;
}
#app {
  
height: 1900px;
}
</style>
