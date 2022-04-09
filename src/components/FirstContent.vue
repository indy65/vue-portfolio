<template>
  <div id="home" class="v-container">
    <div class="container">

   
    <div class="row">
      <div class="col-md-6 col-12 text-left">
       
          <h1>João</h1>
          <h1>Cerqueira</h1>
          <h2 style="color: rgb(31, 221, 238)">Front end Developer</h2>
          <h4>
            Front end developer with javascript as the main focus and every
            framework/library within it
          </h4>

          <button ><a href="#social" style="text-decoration:none;color:black">Get in touch</a></button>
     
      </div>

      <div class="col-md-6 col-12 text-center align-bottom">
        
        <img src="computer.png" style="width:70%" alt="">
        
      </div>
    </div>
     </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
:root{
  --blue: rgb(31, 221, 238)

}
button {
  width: 10rem;
  height: 3rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 25px;
  background-color:rgb(31, 221, 238);
  border: none;
}
h1 {
  text-align: left;
  padding: 0;
  margin: 0;
  font-size: clamp(3rem,6vw,8rem);
}
.align-bottom {
      align-self: end;
}
.text-center {
  text-align: center;
}
.text-left {
  text-align: left;
}
.v-container {
  font-family: Red Hat Display, sans-serif;
  padding-top: 100px;
  color: white;
  width: 100%;
  background-color: #1f1f1f;
  min-height: 100vh;
}
.row {
  padding-top: 100px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.v-col {
  margin: 0 30px 0 30px;
  flex: 1 40px;
}
</style>