<script setup>
import SideBar from './components/SideBar.vue'
</script>

<template>
  <div id="app">
    <SideBar id="sidebar" classmsg="Welcome to Your Vue.js App" />
    <SideBar id="header" classmsg="Welcome to Your Vue.js App" />
    <SideBar id="main" classmsg="Welcome to Your Vue.js App" />
  </div>
</template>


<style>
* {
  color: #2c3e50;
  border: 0px solid red;
}

body {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
</style>

<style scoped>
#app {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 3fr;
  grid-template-areas:
    "sidebar header"
    "sidebar main"
}

#sidebar {
  grid-area: sidebar;
}

#header {
  grid-area: header;
}

#main {
  grid-area: main;
}
</style>
