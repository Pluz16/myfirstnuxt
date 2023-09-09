<template>
    <div>
        <h1>Progetti sviluppati in {{ id }}</h1>
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