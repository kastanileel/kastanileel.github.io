<template>
  <div class="landing-page">

    <FragmentShaderBox class="fullscreen-bg" shaderFile="/shaders/RayMarcher.txt" resolution-width="960" resolution-height="540"></FragmentShaderBox>

    <div class="content-overlay">
      <div class="blurredField">
        <h1>KASTANILEEL</h1>
        <p class="profession">SOFTWARE DEVELOPER</p>
      </div>

      <div class="buttons">
        <button class="btn-a">PROJECTS</button>
        <button class="btn-b">BLOG</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

import {onMounted} from "vue";
import FragmentShaderBox from "./components/FragmentShaderBox.vue";



onMounted(() => {

  console.log("leel")

})




</script>
<style scoped>
header {
  line-height: 1.5;
}

.landing-page {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
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
  z-index: 1;  /* Ensure this content is displayed above the background image */
  font-family: "Fira Code Medium", monospace;

}

h1 {
  font-weight:normal;
  font-size: 3rem;
  color: white;
  margin-bottom: -20px;
}

.profession {
  font-size: 2.2rem;
  color: white;
  margin-bottom: 40px;
}

.blurredField {
  backdrop-filter: blur(20px);
  height: 110%;
  width: 110%;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
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
