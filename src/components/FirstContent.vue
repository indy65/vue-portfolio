<template>
  <div class="container">
      <div class="row">
          <div class="col"><h1>TARD</h1></div>
          <div class="col"><h1>TARD</h1></div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
    padding-top: 70px;
    color: white;
  width: 100%;
  background-color: #1F1F1F;
  height: 1000px;
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