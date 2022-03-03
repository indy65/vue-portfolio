<template>
  <div class="container">
    <div class="row">
        <div class="col"><h1>LOGO</h1></div>
      <div class="col">
          <div class="row">
        <div class="col">
          <h3>tard</h3>
        </div>
        <div class="col">
          <h3>tard</h3>
        </div>
        <div class="col">
          <h3>tard</h3>
        </div>
        <div class="col">
          <h3>tard</h3>
        </div></div>
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
.container {
    color: white;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  height: 70px;
}
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.col {
  margin: 0 30px 0 30px;
 
  text-align: center;
  flex: 1 40px;
}
</style>