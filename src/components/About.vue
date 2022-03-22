<template>
  <div class="v-container">
    <div class="row">
    <div class="col">
      <h2 class="text-fluid">
        Im João Cerqueira from Portugal and im a Front end developer who's goal
        is to become the javascript master and a reliable programer
      </h2>

      <h2 class="text-fluid">
        I focus mainly on javascript framerworks such as Vuejs and React while
        styling my UI with mainly bootstrap and pure CSS
      </h2>

      <h2 class="text-fluid">
        Always keeping an eye open for the new ways of coding by building small
        projects, curious? check out my git repository &#128516; !
      </h2>
      <h1 class="text-fluid">Moving on to the spicy stuff 👇</h1>
      <button>
        <a href="./Joao_Cerqueira_CV.pdf" style="text-decoration: none" download
          >download cv</a
        >
      </button>
    </div>
    <div class="col text-center">
   <!--<img src="../assets/profile.png" alt="" style="max-width: 60%" />-->
   <img src="detective.png" alt="" style="width: 70%" />
    
    
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
.text-fluid{
  font-size: clamp(1rem,2vw,2rem);
}
</style>