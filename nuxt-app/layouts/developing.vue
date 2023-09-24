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

    <div class="container mx-4 p-4">
      <div v-for="repo in repositories" :key="repo.id">
        <div class="bg-white shadow-md rounded-lg overflow-hidden">
          <img :src="repo.owner.avatar_url" alt="Immagine del progetto" class="w-full h-32 object-cover object-center" />
          <div class="px-6 py-4">
            <div class="font-semibold text-lg mb-2">{{ repo.name }}</div>
            <p class="text-gray-600 text-sm">{{ repo.description }}</p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <a :href="repo.html_url" class="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Repository GitHub</a>
          </div>
        </div>
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
import { ref, onMounted } from 'vue';
import axios from 'axios';

const repository = ref({});
const projectImage = ref('');

// Effettua la richiesta all'API al momento del montaggio del componente
onMounted(() => {
  // TODO: Sostituisci 'Pluz16' e 'repository-name' con il tuo nome utente GitHub e il nome della tua repository
  axios.get('https://api.github.com/repos/Pluz16/repos', {
    headers: {
      Authorization: 'Bearer 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',
    },
  })
    .then(response => {
      // Aggiorna la variabile repository con le informazioni restituite dall'API
      repository.value = response.data;

      // Aggiorna l'immagine del progetto
      projectImage.value = response.data.image;

      // Mostra l'immagine del progetto
      const imageElement = document.querySelector('.w-full.h-32.object-cover.object-center');
      if (imageElement) {
        imageElement.src = projectImage.value;
      }
    })
    .catch(error => {
        console.error(error);
    });
});
</script>



<style scoped>
    h1{
        text-decoration: double;
    }

    .router-link-exact-active{
        color: rgb(60, 36, 4);
    }
</style>