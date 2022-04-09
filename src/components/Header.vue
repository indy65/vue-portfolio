<template>
  <div class="v-container">
    <div class="v-row">
      <div class="col align-self-center" style="color:rgb(31, 221, 238)"> <button class="btn">
            <a
              href="Joao_Cerqueira_CV.pdf"
              style="text-decoration: none;color:black;"
              download
              >Download cv</a
            >
          </button></div>
      <div class="col align-self-center">
        <div class="row text-center">
          <div class="col-6 col-sm-3 ">
            <a class="tab-item" href="#home"><h3 class="v-navItem">Home</h3></a>
          </div>
          <div class="col-6 col-sm-3">
            <a class="tab-item" href="#about"><h3 class="v-navItem">About</h3></a>
          </div>
          <div class="col-6 col-sm-3">
            <a class="tab-item" href="#tools"><h3 class="v-navItem">Tools</h3></a>
          </div>
          <div class="col-6 col-sm-3">
            <a class="tab-item" href="#social"><h3 class="v-navItem">Social</h3></a>
          </div>
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
};
</script>

<style scoped>
.text-center{
  text-align: center;
}
.text-left{
  text-align: left;
}
.v-container {
  font-family: Red Hat Display, sans-serif;
  color: white;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  height: 70px;
  z-index: 9999;
}
.v-row {
  margin: auto;
  width: 70%;
  display: flex;
  justify-content: space-between;
  height: 70px;
}
.v-col {
  
  margin: 0 30px 0 30px;
  flex: 1 40px;
}

.v-navItem{
  font-weight: bolder;
  font-size: clamp(1rem,2vw,3rem);
}
.v-navItem:hover{
  
  color: rgb(31, 221, 238);
  cursor: pointer;
}
button{
   background-color: rgb(31, 221, 238);
}
.tab-item{
  color: white;
  text-decoration: none;

  
}

</style>