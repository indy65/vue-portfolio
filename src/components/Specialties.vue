<template>
  <div class="v-container text-center"> 
    <h2 class="display-1 pb-5">What makes me happy</h2>
      <div class="row justify-content-center pt-5">
         
          <div class="item col-md-3 col-sm-6 m-4 card"><img src="https://logospng.org/download/react/logo-react-256.png" alt="" style="width:50%;"> </div>
          <div class="item col-md-3 col-sm-6 m-4 card"><img src="https://cdn.iconscout.com/icon/free/png-256/vue-282497.png" alt="" style="width:50%;"></div>
          <div class="item col-md-3 col-sm-6 m-4 card"><img src="https://www.svgrepo.com/show/303293/bootstrap-4-logo.svg" alt="" style="width:50%;">  </div>
          <div class="item col-md-3 col-sm-6 m-4 card"><img src="https://iconape.com/wp-content/files/vr/353405/svg/javascript-js-seeklogo.com.svg" alt="" style="width:50%;">  </div>
          <div class="item col-md-3 col-sm-6 m-4 card"><img src="https://logospng.org/download/css-3/logo-css-3-256.png" alt="" style="width:50%;"> </div>
          <div class="item col-md-3 col-sm-6 m-4 card"><img src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-html-logo-0.png" alt="" style="width:50%;"> </div>

      </div>
      <p id="tard"></p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
img{
  margin: auto;
}
.v-container {
  font-family: Red Hat Display, sans-serif;
  padding-top: 100px;
  color: white;
  background-color: #1f1f1f;
  height: 100vh;
}
.v-row {
  padding-top: 100px;
 width: 80%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.card{
  text-align: center;
  height: 150px;
  border: solid rgb(31, 221, 238);
  border-radius: 25px;
  box-shadow: 5px 10px 40px #2f2f2f inset;
}
.v-col {
  margin: 0 30px 0 30px;
  flex: 1 40px;
}
h2{
  color:rgb(31, 221, 238);
}
.item{
  max-width:200px;
  justify-content: center;
  text-align: center;
}
</style>