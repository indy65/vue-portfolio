<template>
  <div class="container">
    <div class="row">
      <div class="col text-left">
       
          <h1>João</h1>
          <h1>Cerqueira</h1>
          <h2 style="color: rgb(31, 221, 238)">Front end Developer</h2>
          <h4>
            Front end developer with javascript as the main focus and every
            framework within it
          </h4>

          <button v-on:click="funcao()">Get in touch</button>
     
      </div>

      <div class="col text-center align-bottom">
        <img src="/detective.png" style="width:70%" alt="">
        
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
  font-size: 6rem;
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
.container {
  font-family: Red Hat Display, sans-serif;
  padding-top: 100px;
  color: white;
  width: 100%;
  background-color: #1f1f1f;
  height: 100vh;
}
.row {
  padding-top: 100px;
  margin: auto;
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.col {
  margin: 0 30px 0 30px;
  flex: 1 40px;
}
</style>