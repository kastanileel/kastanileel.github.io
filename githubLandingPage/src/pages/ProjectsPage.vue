<template>
  <div class="projects-page">
    <div class="content-wrapper">
      <div class="header">
        <img src="/pb.png" alt="kastanileel" class="profile-image">
        <h1>My Projects</h1>
      </div>

      <div class="projects-list">
        <ProjectCard v-for="project in projects" :key="project.id" :id="project.id" :image="project.image" :description="project.description" :title="project.title" :badges="project.badges" :link="project.link" :blog="project.blog" :video="project.video" />
      </div>
    </div>
  </div></template>

<script setup lang="ts">


import { ref } from 'vue';
import ProjectCard from '../components/ProjectCard.vue';

const projects = ref([
  {
    id: 7,
    title: "Royal Tracer",
    badges: ["OpenCL", "C++", "Path tracing", "GPU Programming", "JS", "ThreeJS"],
    description: "OpenCL pathtracer with a web based scene editor and an animation system." +
        " In addition to reflections and refractions, the renderer supports textures, bumpmaps and normalmaps, as well as subsurface scattering, BVH acceleration and optimized algorithms like importance sampling and russian roulette.",
    link: "https://github.com/Royal-Project-Group/royaltracer",
    video: "https://github.com/Royal-Project-Group/royaltracer/assets/56845913/507632a6-aa00-459a-bf3e-cd489b029112",
    blog: false
  },
  {
    id: 6,
    title: "CPU-Crunch-Engine/Alien Arena Shootout",
    badges: ["Java", "Engine-Development", "Software Rasterization"],
    description: "A 3D game made with my own engine written in plain Java, without utilizing the GPU for my course \"Game Programming\". Due to the restrictions of the course, the engine is not based on any graphic framework.",
    link: "https://github.com/kastanileel/CPUCrunchEngine",
    image: "./montage.png",
    blog: false
  },
  {
    id: 5,
    title: "\"Tank You, Next!\"",
    badges: [ "C++", "OpenGL", "Project Management", "Software Engineering", "wip"],
    description: "In parallel to our course \"Software Engineering\" my friend Johannes and I applied our theoretical knowledge in a practical project.",
    link: "https://github.com/mj0stjo/Tank-You-Next-",
    image: "/tyn.png",
    blog: false
  },

  {
    id: 4,
    title: "OpenGL Demo Scene",
    badges: ["C++", "OpenGL", "Computer Graphics"],
    description: "My first venture into 3D computer graphics, crafted during my \"Computer Graphics\" course.",
    link: "https://github.com/kastanileel/OpenGLDemoScene",
    image: "https://user-images.githubusercontent.com/56845913/212190204-dc68b712-bcb8-42af-962b-52de7992fce0.png", // Add image path for each project
    blog: false
  },
  {
    id: 3,
    title: "\"RNN Benchmark\"",
    badges: [ "Python", "Tensorflow", "RNN"],
    description: "Just a simple jupyter notebook for playing around with RNNs in Tensorflow.",
    link: "https://github.com/kastanileel/RNNBenchmarkStock",
    image: "/rnn.png",
    blog: false
  },
  {
    id: 2,
    title: "OpenGL 2D Game",
    badges: ["C++", "OpenGL", "2D", "Computer Graphics"],
    description: "A simple 2D game made with OpenGL for my course \"Computer Graphics\".",
    link: "https://github.com/kastanileel/openGL2DGame",
    image: "https://user-images.githubusercontent.com/56845913/201951480-4b0a8a45-fb64-4e71-a3db-67aff734ba62.png", // Add image path for each project
    blog: false
  },
  {
    id: 1,
    title: "\"Shadow Friend\" - A game made for Brackeys Game Jam 2022.2",
    badges: ["C#", "Unity", "Game Development", "Game Jam"],
    description: "",
    link: "https://kastanileel.itch.io/shadow-friend",
    image: "https://img.itch.zone/aW1hZ2UvMTY4MDYwNC85OTAwMTk0LnBuZw==/original/3xmhJ2.png",
    blog: false
  },
  {
    id: 0,
    title: "\"Calming Collecting\" - A game made for the Trijam #182",
    badges: ["C#", "Unity", "Game Development", "Game Jam"],
    description: "",
    link: "https://kastanileel.itch.io/calming-collecting",
    image: "https://img.itch.zone/aW1hZ2UvMTY3Mjg1Ni85ODUxMDY5LnBuZw==/original/aKtaOi.png",
    blog: false
  },
  // ... More projects
]);
</script>




<style scoped>
@media (max-width: 700px) {
  .content-wrapper{
    min-width: 200px !important;
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
  min-width: 300px;
  max-width: 700px;
}

@media (min-width: 700px) {
  .content-wrapper {
    width: 80% !important; /* Set the width to 100% on smaller screens */
    max-width: 100%;
  }
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

/* Media query for larger screens */
@media (min-width: 700px) {
  .projects-list {
    grid-template-columns: repeat( 2, 1fr)  ;

  }
}

/* Media query for mobile screens */
@media (max-width: 700px) {
  .projects-list {
    grid-template-columns: 1fr; /* One column on mobile screens */

  }
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
