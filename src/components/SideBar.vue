<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  msg: String
})

console.log('hello script setup')
</script>

<template>
  <div class="hello">
    {{ props.msg }}
  </div>
</template>

<style scoped>
.hello {
  color: red;
}

</style>
