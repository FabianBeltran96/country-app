<script setup>
import SidebarComponent from '@/components/SidebarComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import MainComponent from '@/components/MainComponent.vue'
</script>

<template>
    <div id="home">
        <SidebarComponent id="sidebar" msg="Welcome to Your Vue.js App" />
        <HeaderComponent id="header" msg="Welcome to Your Vue.js App" />
        <MainComponent id="main" msg="Welcome to Your Vue.js App" />
    </div>
</template>

<style scoped>
#home {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 2fr;
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
