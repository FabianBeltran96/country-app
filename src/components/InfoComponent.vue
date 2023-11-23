<script setup>
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

const props = defineProps({
  country: {
    type: String,
    required: true
  }
})

const { result, loading, error } = useQuery(
  gql`
    query ListCountries($continentFilter: [String!]) {
      countries(filter: { code: { in: $continentFilter } }) {
        name
        code
        capital
        continent {
          name
        }
        languages {
          name
        }
        currencies
        awsRegion
      }
    }
  `,
  () => ({ continentFilter: [props.country] })
)
</script>

<template>
  <div class="info-container">
    <div class="info-card">
      <div class="header-card">
        <img
          class="flag"
          :src="'https://flagsapi.com/' + result.countries[0].code + '/flat/64.png'"
          alt=""
        />
        <div class="details">
          <p class="country">{{ result.countries[0].name }}</p>
          <p class="continent">{{ result.countries[0].continent.name }}</p>
        </div>
      </div>
      <div class="body-card">
        <p class="country">Capital: {{ result.countries[0].capital }}</p>
        <p class="continent">Languages: {{ result.countries[0].languages[0].name }}</p>
        <p class="continent">Currency: {{ result.countries[0].currencies[0] }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  /* border: 1px solid red; */
}

.info-container {
  width: 600px;
  height: 400px;
  margin: 24px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);
}

.info-card {
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.info-card .flag {
  width: 48px;
  height: 48px;
}

.header-card {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
}
</style>
