<template>
  <div class="projects-page">
    <div class="content-wrapper">
      <div class="header">
        <img src="/pb.png" alt="kastanileel" class="profile-image">
        <h1>My Projects</h1>
      </div>

      <div class="projects-list">
        <ProjectCard v-for="project in projects" :key="project.id" :id="project.id" :image="project.image" :description="project.description" :title="project.title" :link="project.link" />
      </div>
    </div>
  </div></template>

<script setup lang="ts">
import { ref } from 'vue';
import ProjectCard from '../components/ProjectCard.vue';

const projects = ref([
  {
    id: 2,
    title: "\"Tank You, Next!\"",
    description: "For our \"Software Engineering\" lecture, my colleague and I embarked on an endeavor to not just apply theoretical project management principles but to bring them alive in the form of a tangible, interactive game. \"Tank You, Next!\" is the result – a 3D tank game, integrating C++ and the OpenGL graphics library. Currently ongoing, we are gearing up for a second sprint to further enhance the gaming experience.",
    link: "https://github.com/mj0stjo/Tank-You-Next-",
    image: "/tyn.png"
  },
  {
    id: 1,
    title: "OpenGL Demo Scene",
    description: "My initial venture into computer graphics, crafted during my \"Computer Graphics\" course. This demo takes you through two distinct scenes. We start with the basics of rendering and shading like ambient and diffuse lighting, then transition, and conclude with a shader portraying an endlessly rotating abyss",
    link: "https://github.com/kastanileel/OpenGLDemoScene",
    image: "https://user-images.githubusercontent.com/56845913/212190204-dc68b712-bcb8-42af-962b-52de7992fce0.png" // Add image path for each project
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
  justify-content: center; /* Center children horizontally */
  align-items: center;     /* Center children vertically */
  width: 100%;
         /* This makes sure your page takes the full viewport height */
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
