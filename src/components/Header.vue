<template>
  <div class="v-container">
    <div class="v-row">
      <div class="col" style="color:rgb(31, 221, 238)"><h1>LOGO</h1></div>
      <div class="col">
        <div class="row">
          <div class="col ">
            <h3 class="v-navItem ">Home</h3>
          </div>
          <div class="col">
            <h3 class="v-navItem">About</h3>
          </div>
          <div class="col">
            <h3 class="v-navItem">Projects</h3>
          </div>
          <div class="col">
            <h3 class="v-navItem">Contacts</h3>
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
}
.v-row {
  margin: auto;
  width: 70%;
  display: flex;
  justify-content: space-between;
}
.v-col {
  
  margin: 0 30px 0 30px;
  flex: 1 40px;
}

.v-navItem{
  font-weight: bolder;
}
.v-navItem:hover{
  
  color: rgb(31, 221, 238);
  cursor: pointer;
}

</style>