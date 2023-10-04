<template>
  <div class="projects-page">
    <div class="content-wrapper">
      <div class="header">
        <img src="/pb.png" alt="kastanileel" class="profile-image">
        <h1>My Projects</h1>
      </div>

      <div class="projects-list">
        <ProjectCard v-for="project in projects" :key="project.id" :id="project.id" :image="project.image" :description="project.description" :title="project.title" />
      </div>
    </div>
  </div></template>

<script setup lang="ts">
import { ref } from 'vue';
import ProjectCard from '../components/ProjectCard.vue';

const projects = ref([
  {
    id: 1,
    title: "Project 1",
    description: "Brief description of project 1.",
    link: "#",
    image: "https://user-images.githubusercontent.com/56845913/212190204-dc68b712-bcb8-42af-962b-52de7992fce0.png" // Add image path for each project
  },
  {
    id: 2,
    title: "Project 2",
    description: "Brief description of project 2.",
    link: "#",
    image: "/path/to/image2.jpg"
  },
  // ... More projects
]);
</script>




<style scoped>
@media (max-width: 700px) {
  .content-wrapper{
    width: 100% !important;
    min-width: 0px !important;
  }

}
.projects-page {
  padding: 2rem;
  font-family: "Fira Code Medium", monospace;
  color: #333;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center; /* Center the .content-wrapper horizontally */
  align-items: center;     /* Center the .content-wrapper vertically */
  height: 100vh;           /* Full viewport height */
}

.content-wrapper {
  width: 35%; /* Set the width to 50% */
  min-width: 600px;
  max-width: 700px;
}

.header {
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center; /* Center content horizontally */
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
