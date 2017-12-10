<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from './components/Home';

export default {
	name: 'app',
	components: {
		Home
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
	background-color: #4caf50;
}
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #ffffff;
	position: relative;
	top: 10rem;
}
</style>
