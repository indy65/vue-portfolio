<template>
  <div class="container"> 
    <h2>what i work with that makes me happy</h2>
      <div class="row">
         
          <div class="col card"><p>reaect</p><img src="https://logospng.org/download/react/logo-react-256.png" alt="" style="width:50%;"> </div>
          <div class="col card"><p>vue</p><img src="https://cdn.iconscout.com/icon/free/png-256/vue-282497.png" alt="" style="width:50%;"></div>
          <div class="col card"><p>bootstrap</p><img src="https://www.svgrepo.com/show/303293/bootstrap-4-logo.svg" alt="" style="width:50%;">  </div>
          <div class="col card"><p> js</p><img src="https://iconape.com/wp-content/files/vr/353405/svg/javascript-js-seeklogo.com.svg" alt="" style="width:50%;">  </div>
          <div class="col card"><p> css</p><img src="https://logospng.org/download/css-3/logo-css-3-256.png" alt="" style="width:50%;"> </div>
          <div class="col card"><p> html</p><img src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-html-logo-0.png" alt="" style="width:50%;"> </div>

      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
  font-family: Red Hat Display, sans-serif;
  padding-top: 100px;
  color: white;
  background-color: #1f1f1f;
  height: 100vh;
}
.row {
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
.col {
  margin: 0 30px 0 30px;
  flex: 1 40px;
}
h2{
  color:rgb(31, 221, 238);
}
</style>