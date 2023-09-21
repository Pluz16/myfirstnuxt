<template>
    <header class="shadow-md bg-emerald-200 ">
    <div>
        <h1 class="p-6 font-bold">Portfolio di Francesco Punta</h1>
    </div>

    <nav class="container mx-4 p-4 ">
        <ul class="container flex gap-4">
            <li><NuxtLink to="/developing">Progetti</NuxtLink></li>
            <li><NuxtLink to="/developing/Js">Js</NuxtLink></li>
            <li><NuxtLink to="/developing/Vue">Vue</NuxtLink></li>
            <li><NuxtLink to="/developing/Nuxt">Nuxt</NuxtLink></li>
            <li><NuxtLink to="/developing/Tailwind">Tailwind</NuxtLink></li>
        </ul>
        </nav>
    </header>

    <!-- output del contenuto -->
        <div class="container mx-4 p-4">
            <slot />
            
        </div>


        <footer class="container mx-auto p-4 fle justify-between border-t-2">
            <ul>
                <li> <NuxtLink to="/">Home</NuxtLink></li>
                <li> <NuxtLink to="/about">About Me</NuxtLink></li>
            </ul>
        </footer>


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