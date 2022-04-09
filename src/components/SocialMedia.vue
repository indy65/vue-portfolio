<template>
  <div id="social" class="pt-5">
    <div class="container pt-5">
      <h1 class="text-center mb-5">How to get in touch with me and my work</h1>
      <div class="row m-auto text-center col-8">
        <div class="col">
          <a
            href="https://www.linkedin.com/in/jo%C3%A3o-cerqueira-b371b918b/"
            target="_blank"
          >
            <img
              src="https://freeiconshop.com/wp-content/uploads/edd/linkedin-flat.png"
              alt="Linkedin"
              style="max-width: 128px"
              title="Linkedin"
              class="w-100 animation"
          /></a>
        </div>
        <div class="col">
          <a href="" target="_blank">
            <img
              src="email.png"
              alt="Email"
              style="max-width: 128px;animation-delay:1s;"
              title="Email"
              class="w-100 animation"
              @click="openEmail()"
          /></a>
        </div>
        <div class="col">
          <a href="https://github.com/indy65" target="_blank">
            <img
              src="github.png"
              alt="Github"
              style="max-width: 128px;animation-delay:2s;"
              title="Github"
              class="w-100 animation"
          /></a>
        </div>
        <div class="col-12 text-center mt-5">
          <img src="question.png" alt="" />
        </div>
      </div>
    </div>
   
  </div>
</template>

<script>
export default {
  methods:{
    openEmail(){
       window.location = "mailto:joaocerqueira65@hotmail.com";
    }
  }
};
</script>

<style scoped>
#social {
  min-height: 100vh;
  position: relative;
}
p {
  color: white;
}
h1 {
  color: rgb(31, 221, 238);
}
.rights{
  color: black;
  font-size: 12px;
  position: absolute;
  bottom: 0;
  left: 0;
}
.animation{
 animation: float 5s linear infinite;
 
}

@keyframes float{

  0%{transform: translateY(0px);}
  50%{transform: translateY(30px);}
  100%{transform: translateY(0px);}
}

</style>