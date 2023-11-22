<template>
  <div class="App">
    <NavBar />
  </div>
</template>

<script>
import NavBar from "./components/nav.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
:root {
  --Coleur-nav: rgb(244, 247, 246);
  --couleur-des: rgb(211, 223, 219);
  --Coleur-Expériance: rgb(192, 164, 39);
  --couleur-Propo: #a5e74f;
  --couleur-contour: rgb(29, 207, 124);
}
body {
  

  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
}
</style>