<template>
  <div class="landing-page">

    <FragmentShaderBox class="fullscreen-bg" shaderFile="/shaders/RayMarcher.txt" resolution-width="960"
                       resolution-height="540"></FragmentShaderBox>

    <div class="content-overlay">
      <div class="blurredField">
        <h1 class="typewriter">KASTANILEEL</h1>
        <p class="profession">SOFTWARE DEVELOPER</p>
      </div>

      <div class="buttons">
        <button class="btn-a" @click="onProjBtn">PROJECTS</button>
        <button class="btn-b" @click="onBlogBtn">BLOG</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

import {router} from "../main.js"
import FragmentShaderBox from "../components/FragmentShaderBox.vue";


function onBlogBtn() {
  // push to /blog
  router.push('/blog')
}

function onProjBtn() {
  router.push('/projects')
}

</script>
<style scoped>
header {
  line-height: 1.5;
}

.landing-page {
  width: auto;
  height: auto;
  overflow-x: hidden;
}

.fullscreen-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

.content-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1; /* Ensure this content is displayed above the background image */
  font-family: "Fira Code Medium", monospace;

}

h1 {
  font-weight: normal;
  font-size: 3rem;
  color: white;
  margin-bottom: -20px;
}

button {
  width: 150px;
}

.profession {
  font-size: 2.2rem;
  color: white;
  margin-bottom: 40px;
}

.blurredField {
  backdrop-filter: blur(34px);
  height: 110%;
  width: 110%;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.typewriter {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation: typing 2s steps(40, end),
  blink-caret .75s step-end infinite;

}

/* The typing effect */
@keyframes typing {
  from {
    width: 0
  }
  to {
    width: 100%
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to {
    border-color: transparent
  }
  50% {
    border-color: orange;
  }
}

.btn-a, .btn-b {
  padding: 10px 20px;
  border: none;
  background-color: #333;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;

  /* For better appearance, optionally add some hover effect */
}

.btn-a:hover, .btn-b:hover {
  background-color: #555;
}
</style>
