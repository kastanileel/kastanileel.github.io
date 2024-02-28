<template>
  <div class="shader-page">
      <div class="header">
        <img src="/pb.png" alt="kastanileel" class="profile-image">
        <h1>Shader Library</h1>
      </div>
      <div class="entries">
        <ShaderLibraryEntry v-for="entry in entries" :link="entry.link" :title="entry.title"
                            :description="entry.description" :dark="entry.id % 2 === 1"/>
      </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import ShaderLibraryEntry from "../components/ShaderLibraryEntry.vue";

const entries = ref([
  {
    id: 2,
    link: "https://www.shadertoy.com/embed/DlVyWy?gui=true&t=10&paused=true&muted=true",
    title: "Reflection Test",
    description: "Testing reflections and shadows in raymarching. Also rotating SDFs when intersecting smoothly looks awesome!",
  },
  {
    id: 1,
    link: "https://www.shadertoy.com/embed/mlsBDl?t=10&paused=true&muted=true",
    title: "Sylized Sunset over the Sea",
    description: "A stylized sunset over the sea. The waves are simulated through sin-waves. The shiny outline is achieved by using a neat trick.",
  },
  {
    id: 0,
    link: "https://www.shadertoy.com/embed/DllBDB?gui=true&t=10&paused=true&muted=true",
    title: "First Raymarcher with Phong Shading",
    description: "My first raymarcher with phong shading. I really got a soft spot for the way SDFs intersect! ",
  }
])


</script>

<style scoped>


.shader-page {
  padding: 2rem;
  font-family: "Fira Code Medium", monospace;
  color: #333;
  background-color: #f8f8f8;

  justify-content: center; /* Center children horizontally */
  align-items: center; /* Center children vertically */
  width: 100%;
  /* This makes sure your page takes the full viewport height */
}



.header {
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
  width: 100%; /* Ensure the header takes full width */
}


.profile-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

h1 {
  font-size: 2.5rem;
  margin: 0;
  text-align: center; /* Center the text */
}

.entries {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  min-height: 400px;
  gap: 20px;
}


</style>
