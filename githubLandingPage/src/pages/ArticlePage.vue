<template>
  <div class="article-page">
    <div class="content-wrapper">
      <div class="header">
        <h1>Blog</h1>
      </div>
      <div class="markdownArticle">
        <vue-markdown :source="text" />
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import VueMarkdown from "vue-markdown-render";
import { defineProps } from 'vue';
import {onMounted} from "vue";
import {ref} from "vue";

let text = ref('')

const { category, id } = defineProps(['category', 'id']);

onMounted(async () => {
  const response = await fetch('/' + category + '/' + id + '.md')
  text.value = await response.text()

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
  width: 70%; /* Set the width to 50% */
  min-width: 800px;
  max-width: 1300px;
}

.header {
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
  margin-bottom: 100px;
  width: 100%; /* Ensure the header takes full width */
}


h1 {
  font-size: 2.5rem;
  margin: 0;
  text-align: center; /* Center the text */
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
.markdownArticle {
  background-color: #ffffff;
  padding: 2vh 5vw 0 5vw;
}


</style>
<style>
img {
  width: 100%;
  height: auto;
}

</style>