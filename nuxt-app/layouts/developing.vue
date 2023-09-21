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

            <div class="bg-white shadow-md rounded-lg overflow-hidden">
                <img src="immagine_del_progetto.jpg" alt="Immagine del progetto" class="w-full h-32 object-cover object-center">
                <div class="px-6 py-4">
                    <div class="font-semibold text-lg mb-2">Nome del Progetto</div>
                    <p class="text-gray-600 text-sm">Breve descrizione del progetto Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <a href="link_alla_repo_github" class="text-blue-500 hover:underline">Repository GitHub</a>
                </div>
            </div>
            
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