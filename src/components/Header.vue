<template>
  <div class="container">
    <div class="row">
      <div class="col" style="color:rgb(31, 221, 238)"><h1>LOGO</h1></div>
      <div class="col">
        <div class="row">
          <div class="col">
            <h3 class="navItem">Home</h3>
          </div>
          <div class="col">
            <h3 class="navItem">About</h3>
          </div>
          <div class="col">
            <h3 class="navItem">Projects</h3>
          </div>
          <div class="col">
            <h3 class="navItem">Contacts</h3>
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
.container {
  font-family: Red Hat Display, sans-serif;
  color: white;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  height: 70px;
}
.row {
  margin: auto;
  width: 70%;
  display: flex;
  justify-content: space-between;
}
.col {
  
  margin: 0 30px 0 30px;
  flex: 1 40px;
}

.navItem:hover{
  font-weight: bold;
  color: rgb(31, 221, 238);
  cursor: pointer;
}

</style>