<template>
  <div class="article-page">
    <div class="content-wrapper">
      <div class="header">
        <h1>Blog</h1>
      </div>

      <div class="projects-list">
        <ProjectCard v-for="project in projects" :key="project.id" :id="project.id" :image="project.image" :description="project.description" :title="project.title" :badges="project.badges" :link="project.link" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VueMarkdown from "vue-markdown-render";
import { defineProps } from 'vue';
import {onMounted} from "vue";

const { category, id } = defineProps(['category', 'id']);

onMounted(() => {

})
</script>

<style scoped>
@media (max-width: 700px) {
  .content-wrapper{
    width: 100% !important;
    min-width: 0px !important;
  }

}
.article-page {
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