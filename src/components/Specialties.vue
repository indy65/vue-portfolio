<template>
  <div class="container">
      <div class="row">
          what i work with that makes me happy
          <div class="col">js frameworks such as vue and react</div>
          <div class="col">bootstrap js css html </div>

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
  width: 80%;
  margin: auto;

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