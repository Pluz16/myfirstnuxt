<template>
    <header>
    <div>
        <h1>Portfolio di Francesco Punta</h1>
    </div>

    <nav>
        <h2>Linguaggi</h2>
        <ul>
            <li><NuxtLink to="/developing">Progetti</NuxtLink></li>
            <li><NuxtLink to="/developing/Js">Js</NuxtLink></li>
            <li><NuxtLink to="/developing/Vue">Vue</NuxtLink></li>
            <li><NuxtLink to="/developing/Nuxt">Nuxt</NuxtLink></li>
            <li><NuxtLink to="/developing/Tailwind">Tailwind</NuxtLink></li>
        </ul>
        </nav>
    </header>

    <!-- output del contenuto -->
        <div>
            <slot />
            
        </div>


        <footer>
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