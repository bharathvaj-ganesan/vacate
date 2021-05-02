<template>
  <div>
    <a href="https://github.com/bharathvaj1995/vacate"
      ><img
        style="position: absolute; top: 0; right: 0; border: 0"
        src="https://camo.githubusercontent.com/a6677b08c955af8400f44c6298f40e7d19cc5b2d/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677261795f3664366436642e706e67"
        alt="Hit Star on GitHub"
        data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png"
    /></a>
    <div id="app">
      <Home />
      <ProductHuntBadge />
    </div>
  </div>
</template>

<script>
import Home from "./components/Home";
import ProductHuntBadge from "./components/ProductHuntBadge";

export default {
  name: "app",
  components: {
    Home,
    ProductHuntBadge
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 61%;
  height: 100vh;
  width: 100vw;
  background-image: url("./assets/pattern.png");
  background-color: #4caf50;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  position: relative;
  top: 15rem;
}
</style>
