<template>
  <div id="app">
    <div class="container">
      <h1 class="alignCenter">Learn - Programming Languages/Frameworks</h1>
      <nav>
        <router-link to="/aboutus/Mohammed">About Us</router-link>
        <router-link to="/aboutus">App info</router-link>
        <router-link to="/">Learn</router-link>
      </nav>      
      <br />
      <br />
      <router-view :key="$route.fullPath"></router-view>
    </div>
  </div>
</template>

<script>
import LearnComp from "./components/Learn.vue";

export default {
  name: "app",
  components: {
    LearnComp
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700");
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

body {
  background-color: #eeeeee;
  font-family: "Montserrat", sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
}
body,
html {
  margin: 0;
  height: 100%;
}
#app {
  width: 60%;
}
nav {
  padding: 20px 0;
}

nav a {
  padding: 10px;
  text-decoration: none;
  background: #fff;
  border-radius: 3px;
  color: rgb(0, 110, 255);
  font-weight: bold;
  margin-right: 10px;
  float: right;
}
h1.alignCenter {
  text-align: center;
}
</style>
