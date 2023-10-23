<template>
  <div class="project-card" >
    <div @click="clickedCard">
      <img :src="image" alt="Project Image" class="project-image">
      <h2>{{ title }}</h2>
      <div class="badges">
        <BadgeComponent v-for="badge in badges" :label="badge" />
      </div>
      <p>{{ description }}</p>
    </div>
    <a :href="link" >view repository</a>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import {router} from "../main.js"
import VueMarkdown from "vue-markdown-render";
import BadgeComponent from "./BadgeComponent.vue";


const props = defineProps({
  id: Number,
  title: String,
  badges: Array,
  description: String,
  link: String,
  image: String
});

function clickedCard() {
  router.push('/blog/' + 'project/'+ props.id);
}


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
  text-align: center; /* Center the project title */
  margin: 0.4rem 0 1.0rem;
}

a {
  align-self: center; /* Center the link horizontally */
  color: #007BFF;
  text-decoration: none;
  transition: color 0.3s ease;
}

.badges {
 /* align items left */
  align-self: flex-start;
  display: flex;
  justify-content: center;
  gap: 0.5rem; /* Adjust the gap between badges */
 }
</style>
