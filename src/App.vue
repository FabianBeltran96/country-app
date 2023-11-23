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
  height: 100%;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

#app {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 3fr;
  grid-template-areas:
    'sidebar main'
    'sidebar main';
}

#sidebar {
  grid-area: sidebar;
}
</style>
