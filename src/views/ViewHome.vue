<script setup>
import CardComponent from '@/components/CardComponent.vue'
import InfoComponent from '@/components/InfoComponent.vue'
import axios from 'axios'
import { ref, computed } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

function getCountries() {
  const { result, loading, error, refetch, onResult, onError } = useQuery(gql`
    query getCountries {
      countries {
        name
        code
        continent {
          name
        }
      }
    }
  `)
  return { result, loading, error }
}

const { result, loading, error } = getCountries()

const checkedContinent = ref([])
const openInfoCard = ref(false)
const nameCountry = ref('')

const currentPage = ref(1)
const itemsPerPage = ref(10)

const {
  result: resultByContinent,
  loading: loadingByContinent,
  error: errorByContinent
} = useQuery(
  gql`
    query ListCountriesByContinent($continentFilter: [String!]) {
      countries(filter: { continent: { in: $continentFilter } }) {
        name
        code
        continent {
          name
        }
      }
    }
  `,
  () => ({ continentFilter: checkedContinent.value })
)
const {
  result: resultByName,
  loading: loadingByName,
  error: errorByName
} = useQuery(
  gql`
    query ListCountriesByContinent($continentFilter: String) {
      countries(filter: { name: { regex: $continentFilter } }) {
        code
        name
        continent {
          name
        }
      }
    }
  `,
  () => ({ continentFilter: nameCountry.value })
)

const getCountryByContinent = computed(() => {
  return [result.value.countries[0]]
  // if (checkedContinent.value.length === 0 && nameCountry.value.length === 0) {
  //   return result.value.countries
  // } else if (checkedContinent.value.length !== 0 && nameCountry.value.length === 0) {
  //   return resultByContinent.value.countries
  // } else if (checkedContinent.value.length === 0 && nameCountry.value.length !== 0) {
  //   return resultByName.value.countries
  // } else {
  //   const countriesByName = new Set(resultByName.value.countries.map((country) => country.code))
  //   return resultByContinent.value.countries.filter((country) => countriesByName.has(country.code))
  // }
})


const displayedCountries = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return result.value.countries.slice(start, end)
})

const selectedCountry = ref({})

function openInfoCardFunction(country) {
  selectedCountry.value = country.code
  openInfoCard.value = !openInfoCard.value
}

function changePage(delta) {
  const newPage = currentPage.value + delta
  if (newPage >= 1 && newPage <= totalPages.value) {
    currentPage.value = newPage
  }
}

const totalPages = computed(() => {
  return Math.ceil(result.value.countries.length / itemsPerPage.value)
})
</script>

<template>
  <div class="container">
    <header>
      <section>
        <div class="input">
          <label for="country">Pais</label>
          <input type="text" v-model="nameCountry" id="country" name="country" placeholder="Escribe el pais" />
        </div>
        <div class="search">
          <button>
            <img src="../assets/search.svg" />
            <span> Buscar </span>
          </button>
        </div>
      </section>
    </header>

    <nav>
      <div class="continent-checkbox">
        <label for="africa">Africa</label>
        <input id="africa" value="AF" v-model="checkedContinent" type="checkbox" />
      </div>
      <div class="continent-checkbox">
        <label for="antartica">Antarctica</label>
        <input id="antartica" value="AN" v-model="checkedContinent" type="checkbox" />
      </div>
      <div class="continent-checkbox">
        <label for="asia">Asia</label>
        <input id="asia" value="AS" v-model="checkedContinent" type="checkbox" />
      </div>
      <div class="continent-checkbox">
        <label for="europe">Europe</label>
        <input id="europe" value="EU" v-model="checkedContinent" type="checkbox" />
      </div>
      <div class="continent-checkbox">
        <label for="nortAmerica">North America</label>
        <input id="nortAmerica" value="NA" v-model="checkedContinent" type="checkbox" />
      </div>
      <div class="continent-checkbox">
        <label for="oceania">Oceania</label>
        <input id="oceania" value="OC" v-model="checkedContinent" type="checkbox" />
      </div>
      <div class="continent-checkbox">
        <label for="southAmerica">South America</label>
        <input id="southAmerica" value="SA" v-model="checkedContinent" type="checkbox" />
      </div>
    </nav>
    <section>
      <button @click="changePage(-1)" :disabled="currentPage === 1">Anterior</button>
      <span>Página {{ currentPage }} de {{ totalPages }}</span>
      <button @click="changePage(1)" :disabled="currentPage === totalPages">Siguiente</button>
    </section>
    <main v-if="!loading">
      <div class="cards-container">
        <div v-for="(country, index) in displayedCountries" :key="index">
          <CardComponent :country="country" @click="openInfoCardFunction(country)" />
        </div>
      </div>
      <InfoComponent v-if="openInfoCard" :country="selectedCountry" />
    </main>
    <main v-else>
      <h1>Cargando...</h1>
    </main>

  </div>
</template>

<style scoped>
* {
  /* border: 1px solid red; */
}

.container {
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #e3f4fe;
}

header {
  width: 100%;
  margin: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

section {
  width: 80%;
  padding: 12px;
  border-radius: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.4);
}

.input {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.input label {
  font-size: 24px;
  font-weight: bold;
  margin: 0 0 0 3px;
  color: #787878;
}

/* unstyled input */
input {
  width: 50%;
  box-sizing: border-box;
  border: 1px solid white;
  border-radius: 4px;
}

nav {
  max-width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  flex-wrap: wrap;
}

.continent-checkbox {
  width: 100px;
  display: flex;
  flex-wrap: no-wrap;
  justify-content: center;
  align-items: center;
  margin: 0 12px;
  font-size: 12px;
  background-color: white;
  border-radius: 24px;
  padding: 12px;
  margin: 4px;
}

.search {
  width: 50%;
  margin: 0 12px 0 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.search img {
  filter: invert(100%);
  width: 24px;
  height: 24px;
}

.search button {
  background-color: #039bff;
  color: white;
  border: none;
  border-radius: 24px;
  padding: 12px;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.search button span {
  margin: 0 0 0 12px;
}

main {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: flex-start;
  align-content: stretch;
  flex-direction: row;
}

.cards-container {
  width: 150%;
  display: flex;
  flex-direction: columns;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
