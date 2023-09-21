<template>
    <div>
        <h1>Progetti sviluppati in <span class="bg-red-200" >{{ id }}</span></h1>
    </div>


</template>

<script setup>

const {id} = useRoute().params;

definePageMeta({
    layout: 'developing'
})

</script>

<style scoped>

</style>