<template>
  <div class="project-card" >
    <div @click="clickedCard" style="align-items: center">
      <div class="imageContainer">
        <img :src="image" alt="Project Image" class="project-image" v-if="image">

          <video controls="controls" class="project-image" v-if="video" autoplay>
            <source :src="video">
          </video>



      </div>


      <h2>{{ title }}</h2>
      <div class="badges">
        <BadgeComponent v-for="badge in badges" :label="badge" />
      </div>
      <p>{{ description }}</p>

      <!-- Spacer Div -->
      <div class="spacer"></div>

      <div class="linkWrapper">
        <a :href="link" >View!</a>
      </div>
    </div>

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
  image: String,
  video: String,
  blog: Boolean,
});

function clickedCard(){
  console.log("clicked card")
  window.location.href = props.link;
}
function clickedBlogBtn() {
  router.push('/blog/' + 'project/'+ props.id);
}


</script>

<style scoped>
.project-image {
  width: 80vw;
  height: 200px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
}

@media (min-width: 700px) {
  .project-image {
    width: 80vw !important;
    max-width: 100% !important;
  }
}
@media (max-width: 700px) {
  .project-image {
    width: 100% !important;
  }
}

.spacer {
  flex-grow: 1; /* Takes all available space */
}

h2 {
  font-size: 1.5rem;
  text-align: center; /* Center the project title */
  margin: 0.4rem 0 1.0rem;
}

.linkWrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

a {
  position: absolute;

  /* put element on the bottom */
  bottom: 0;
  width: 100%;
  display: block;
  text-align: center;
  margin-top: 2rem;
  padding: 10px 20px;
  border: 2px solid #007BFF;
  border-radius: 4px;
  transition: background-color 0.3s ease, color 0.3s ease;
  text-decoration: none;
}

a:hover {
  background-color: #007BFF;
  color: white;
}

.badges {
  max-width: 100%;
  flex-wrap: wrap;
  /* align items left */
  align-self: flex-start;
  display: flex;
  justify-content: center;
  gap: 0.5rem; /* Adjust the gap between badges */
 }

.goto-article-button {
  font-size: 16px;
  position: absolute;
  top: 10px; /* Adjust the top position as needed */
  right: 10px; /* Adjust the right position as needed */
  background-color: #6ae8f5;
  color: #232323;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}


.imageContainer{
  position: relative;
  width: 100% !important;
}

@media (max-width: 500px) {
  .project-card {
    width: 96vw !important;
  }
}

.project-card {
  background-color: #fff;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  transition: transform 0.3s ease;
  width: 100%;
  max-width: 100%;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 10px;
}

.project-card:hover {
  transform: scale(1.04);

}

</style>
