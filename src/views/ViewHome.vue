<script setup>
import CardComponent from '@/components/CardComponent.vue';
import { ref } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

const { result , loading, error} = useQuery(gql`
    query {
    countries {
        name
        continent{
        name
        }
    }
    }
`)

</script>

<template>
    <div class="container">
        <header>
            <section>
                <div class="input">
                    <label for="country">Pais</label>
                    <input type="text" id="country" name="country" placeholder="Escribe el pais" />
                </div>
                <div class="search">
                    <button>
                        <img src="../assets/search.svg" />
                        <span>
                            Buscar
                        </span>
                    </button>

                </div>
            </section>
        </header>
        <main>
            <div v-for="(country, index) in result.countries" :key="index">
                <CardComponent :country=country />
            </div>
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
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: #E3F4FE;
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

label {
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
    background-color: #039BFF;
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
</style>
