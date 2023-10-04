<template>
  <div class="project-card">
    <img :src="image" alt="Project Image" class="project-image">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <a :href="link" >View Project</a>

  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  id: Number,
  title: String,
  description: String,
  link: String,
  image: String
});

</script>

<style scoped>
.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
}

h2 {
  font-size: 1.5rem;
  margin: 0;
  text-align: center; /* Center the project title */
}

a {
  align-self: center; /* Center the link horizontally */
  color: #007BFF;
  text-decoration: none;
  transition: color 0.3s ease;
}
</style>
