<template>
  <div>
<Header/>
<FirstContent/>
  </div>
</template>

<script>

import Header from "./components/Header.vue"
import FirstContent from "./components/FirstContent.vue"
export default {
  name: 'App',
  components: {
    Header,
    FirstContent,
  }
}
</script>

<style>
body{
padding: 0;
margin: 0;
}
#app {
  background-color: #2F2F2F;
height: 1900px;
}
</style>
