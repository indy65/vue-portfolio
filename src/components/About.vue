<template>
  <div id="about" class="v-container">
      <div class="col-8 m-auto">
    <div class="row justify-content-center">
        <div class="col-xl-6 order-2 order-xl-1 ">
          <p class="text-fluid">
            Im João Cerqueira from Portugal and im a Front end developer who's
            goal is to become the javascript master and a reliable programer
          </p>

          <p class="text-fluid">
            I focus mainly on javascript framerworks such as Vuejs and React
            while styling my UI with mainly bootstrap and pure CSS
          </p>

          <p class="text-fluid">
            Always keeping an eye open for the new ways of coding by building
            small projects, curious? check out my git repository &#128516; !
          </p>
          
        </div>
        <div class="col-xl-6 text-center order-1 order-xl-2 mb-5 ">
          <!--<img src="../assets/profile.png" alt="" style="max-width: 60%" />-->
          <img src="detective.png" alt="" class="img-fluid" />
        </div>
       
      </div>
       <div class="col-12 text-end pt-5">
         <h1 class=" text-center">Moving on to the spicy stuff 👇</h1>
                   
        </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.v-container {
  font-family: Red Hat Display, sans-serif;
  padding-top: 100px;
  color: white;
  width: 80%;
  margin: auto;

  height: 100vh;
}
.v-row {
  padding-top: 100px;
  margin: auto;
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.v-col {
  margin: 0 30px 0 30px;
  flex: 1 40px;
}
.text-fluid {
  font-size: clamp(1rem,1.3vw,1.3rem);
  /*font-family: "Lucida Console", "Courier New", monospace;*/
}
h1{
   -webkit-text-stroke: 2px black;
    color:rgb(31, 221, 238);
}

</style>