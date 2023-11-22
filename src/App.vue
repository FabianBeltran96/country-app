<script setup>
import SidebarComponent from '@/components/SidebarComponent.vue'
</script>

<template>
  <div id="app">
    <SidebarComponent id="sidebar" />
    <router-view></router-view>
  </div>
</template>

<style>
* {
  /* border: 1px solid red; */
}

body {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

#app {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 2fr;
  grid-template-areas:
    "sidebar main"
    "sidebar main"
}

#sidebar {
  grid-area: sidebar;
}
</style>

