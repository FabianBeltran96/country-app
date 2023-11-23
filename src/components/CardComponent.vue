<script setup>
import { ref } from 'vue'
import axios from 'axios'

const props = defineProps({
  country: {
    type: Object,
    required: true
  }
})

console.log(props);
const photo = ref('')

// call a pixabay api to get a image of the country with rest api and axios
// axios.get('https://pixibay.com/api/?key=40852554-ec8f5e5ea22e521a184773e6a&q=' + props.country.name + '_cities&image_type=photo')
//   .then(function (response) {
//     // handle success
//     console.log(response.data.hits[0].largeImageURL);
//     const photo = document.querySelector('.photo')
//     photo.src = response.data.hits[0].largeImageURL

//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });

</script>

<template>
  <div class="card">
    <!-- <img class="photo" :src="photo.src" alt="" /> -->
    <img src="https://random.imagecdn.app/500/200">
    <div class="footer-card">
      <img class="flag" :src="'https://flagsapi.com/' + props.country.code + '/flat/64.png'" alt="" />
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
  width: 250px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);
  margin: 24px;
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
