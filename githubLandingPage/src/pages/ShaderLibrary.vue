<template>
  <div class="shader-page">
    <div class="content-wrapper">
      <div class="header">
        <img src="/pb.png" alt="kastanileel" class="profile-image">
        <h1>Shader Library</h1>
      </div>

    </div>
  </div></template>

<script setup lang="ts">
import { ref } from 'vue';
import ProjectCard from '../components/ProjectCard.vue';

</script>




<style scoped>
@media (max-width: 700px) {
  .content-wrapper{
    width: 100% !important;
    min-width: 0px !important;
  }

}
.shader-page {
  padding: 2rem;
  font-family: "Fira Code Medium", monospace;
  color: #333;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center; /* Center children horizontally */
  align-items: center;     /* Center children vertically */
  width: 100%;
  /* This makes sure your page takes the full viewport height */
}
.content-wrapper {
  width: 35%; /* Set the width to 50% */
  min-width: 800px;
  max-width: 1300px;
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

.projects-list {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  justify-content: center; /* Center the grid items */
}

.project-card {
  background-color: #fff;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  transition: transform 0.3s ease;

  display: flex;
  flex-direction: column;
  gap: 10px;
}

.project-card:hover {
  transform: scale(1.03);
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
