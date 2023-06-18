<template>
  <div class="home">
    <NavBar></NavBar>
    <img alt="Vue logo" src="../assets/logo.png" class="logo" />
    <HelloWorld msg="Work cycle application" />
  </div>
  <!-- Background -->
  <img src="@/assets/Images/Background/Background2.jpeg" alt="" class="bgimg" />
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HomeBody.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    NavBar,
  },
};
</script>

<style scoped>
.logo {
  max-width: 500px;
}

@media screen and (max-width: 700px) {
  .logo {
    max-width: 300px;
  }
}
</style>
