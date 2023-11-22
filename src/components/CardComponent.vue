<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    country: {
        type: Object,
        required: true
    }
})

</script>

<template>
    <div class="card">
        <img class="photo" src="" alt="">
        <div class="footer-card">
            <img class='flag' src="" alt="">
            <div class="details">
                <p>{{ props.country.name }}</p>
                <p>{{ props.country.continent.name }}</p>
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
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.card .photo {
    width: 100%;
    height: 200px;
}

.footer-card {
    display: flex;
    justify-content: center;
    align-items: center;

}

.footer-card .flag {
    width: 20px;
    height: 20px;
}

.details {
    margin: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
</style>
