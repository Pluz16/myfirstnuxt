<template>
    <header class="shadow-sm bg-lime-50">
    <div class="font-bold p-6">
        <h1>Portfolio di Francesco Punta</h1>
    </div>

    <nav class="container mx-auto p-4 flex justify-between">
        <ul class="flex gap-4">
            <li> <NuxtLink to="/">Home</NuxtLink></li>
            <li> <NuxtLink to="/about">About Me</NuxtLink></li>
            <li> <NuxtLink to="/developing" class="btn">Progetti</NuxtLink></li>
        </ul>
        </nav>
    </header>

    <!-- output del contenuto -->
        <div class="container mx-auto p-4">
            <slot />
            
        </div>



</template>

<script setup>

</script>

<style scoped>
    h1{
        text-decoration: double;
    }

    .router-link-exact-active{
        color: rgb(60, 36, 4);
    }
</style>