<script setup>
// import { defineProps } from 'vue';

// const props = defineProps({
//   msg: String
// })

console.log('hello script setup')
</script>

<template>
  <div class="container">
    <ul>
      <router-link tag="li" to="/">Home</router-link>
      <router-link tag="li" to="/viewone">View 1</router-link>
      <router-link tag="li" to="/viewtwo">View 2</router-link>
    </ul>
  </div>
</template>

<style scoped>
* {
  /* border: 1px solid red; */
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #ababab;
  font-size: 24px;
}
ul{
  width: 100%;
}

li {
  list-style-type: none;
  width: 80%;
  color: white;
  margin: 8px;
  padding: 8px;
  border-radius: 5px;
}

li:hover {
  background-color: white;
  color: rgb(135, 135, 135);
}

a {
  text-decoration: none;
  color: white;
}
</style>
