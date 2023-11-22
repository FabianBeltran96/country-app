<script setup>
const props = defineProps({
  country: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="card">
    <img class="photo" src="" alt="" />
    <div class="footer-card">
      <!-- <img class="flag" :src="'https://flagsapi.com/' + props.country.code + '/flat/64.png'" alt="" /> -->
      <div class="details">
        <p class="country">{{ props.country.name }}</p>
        <p class="continent">{{ props.country.continent.name }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  /* border: 1px solid red; */
}

.card {
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);
  margin: 8px;
  border-radius: 32px;
  overflow: hidden;
}

.photo {
  width: 100%;
  height: 200px;
}

.footer-card {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
}

.footer-card .flag {
  width: 48px;
  height: 48px;
}

.details {
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.details p {
  margin: 8px;
  width: 100%;
  text-align: center;
}

.country {
  font-size: 16px;
  font-weight: bold;
}

.continent {
  font-size: 12px;
}
</style>
