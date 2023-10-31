<template>
  <div class="projects-page">
    <div class="content-wrapper">
      <div class="header">
        <img src="/pb.png" alt="kastanileel" class="profile-image">
        <h1>My Projects</h1>
      </div>

      <div class="projects-list">
        <ProjectCard v-for="project in projects" :key="project.id" :id="project.id" :image="project.image" :description="project.description" :title="project.title" :badges="project.badges" :link="project.link" />
      </div>
    </div>
  </div></template>

<script setup lang="ts">
import { ref } from 'vue';
import ProjectCard from '../components/ProjectCard.vue';

const projects = ref([
  {
    id: 4,
    title: "The CPU-Crunch-Engine",
    badges: ["Java", "Engine-Development", "Software Rasterization", "wip"],
    description: "A game engine written in plain Java, without utilizing the GPU for my course \"Game Programming\". Due to the restrictions of the course, the engine is not based on any graphic framework.",
    link: "https://github.com/kastanileel/CPUCrunchEngine",
    image: "https://user-images.githubusercontent.com/56845913/274130553-aae9ebac-9528-471b-89c4-78afc767a3f4.png"
  },
  {
    id: 2,
    title: "\"Tank You, Next!\"",
    badges: [ "C++", "OpenGL", "Project Management", "Software Engineering", "wip"],
    description: "Parallel to our course \"Software Engineering\" my friend Johannes and I applied our theoretical knowledge in a practical project.",
    link: "https://github.com/mj0stjo/Tank-You-Next-",
    image: "/tyn.png"
  },
  {
    id: 1,
    title: "OpenGL Demo Scene",
    badges: ["C++", "OpenGL", "Computer Graphics"],
    description: "My initial venture into computer graphics, crafted during my \"Computer Graphics\" course.",
    link: "https://github.com/kastanileel/OpenGLDemoScene",
    image: "https://user-images.githubusercontent.com/56845913/212190204-dc68b712-bcb8-42af-962b-52de7992fce0.png" // Add image path for each project
  },
  {
    id: 3,
    title: "\"Shadow Friend\" - A game made for Brackeys Game Jam 2022.2",
    badges: ["C#", "Unity", "Game Development", "Game Jam"],
    link: "https://kastanileel.itch.io/shadow-friend",
    image: "https://img.itch.zone/aW1hZ2UvMTY4MDYwNC85OTAwMTk0LnBuZw==/original/3xmhJ2.png",
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
