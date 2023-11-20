<template>
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css">
  </head>

  <div class="landing-page">
    <div class="header">
      <img src="/pb.png" alt="kastanileel" class="profile-image">
    </div>


    <FragmentShaderBox class="fullscreen-bg" shaderFile="/shaders/LandingPageShader.txt" resolution-width="960"
                       resolution-height="540"></FragmentShaderBox>

    <div class="content-overlay">
      <div class="blurredField">
        <h1 class="typewriter">DANIEL-KASTANILEEL</h1>
        <p class="profession">SOFTWARE DEVELOPER</p>
      </div>
    </div>
    <div class="middle-buttons">
      <button class="btn-nav" @click="onProjectsBtn">PROJECTS</button>

      <button class="btn-nav" @click="onTechStackBtn">TECH STACK
      <br>
        ↓</button>
      <button class="btn-nav" @click="onShaderBtn">SHADER LIBRARY</button>
    </div>


  </div>


  <!-- Tech Stack Section -->
  <!-- Tech Stack Section -->
  <!-- Tech Stack Section -->
  <div class="tech-stack" id="tech-stack-anchor">
    <h2>Tech Stack</h2>
    <p>
      For my professional projects, university projects, and private projects, I've worked and experimented with a wide range of different and interesting technologies.
    </p>
    <div class="tech-stack-categories">
      <div class="tech-stack-category">
        <h3>Languages</h3>
        <ul class="tech-stack-list">
          <li><i class="devicon-cplusplus-plain colored"></i></li>
          <li><i class="devicon-java-plain colored"></i></li>
          <li><img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png" alt="C#" class="csharp-icon"></li>
          <li><i class="devicon-python-plain colored"></i></li>

        </ul>
      </div>
      <div class="tech-stack-category">
        <h3>CG & GPU Compute</h3>
        <ul class="tech-stack-list">
          <li><i class="devicon-opengl-plain colored"></i></li>
          <li><img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenCL_logo.svg" alt="OpenCL" class="tech-icon"></li>

        </ul>
      </div>
      <div class="tech-stack-category">
        <h3>Web Development</h3>
        <ul class="tech-stack-list">
          <li><i class="devicon-html5-plain colored"></i></li>
          <li><i class="devicon-css3-plain colored"></i></li>
          <li><i class="devicon-javascript-plain colored"></i></li>
          <li><i class="devicon-threejs-original colored"></i></li>
        </ul>
      </div>
      <div class="tech-stack-category">
        <h3>Containers & Databases</h3>
        <ul class="tech-stack-list">
          <li><i class="devicon-docker-plain colored"></i></li>
          <li><i class="devicon-mysql-plain colored"></i></li>
          <li><i class="devicon-mongodb-plain colored"></i></li>
        </ul>
      </div>
      <div class="tech-stack-category">
        <h3>Game Development</h3>
        <ul class="tech-stack-list">
          <li><i class="devicon-unity-original colored"></i></li>
        </ul>
      </div>
    </div>
  </div>

    <!-- Footer Section -->
  <footer class="footer">
    <div class="footer-links">
      <a href="https://github.com/kastanileel" target="_blank">GitHub</a>
      <a href="mailto:stemda01@thu.de">Email</a>
      <a href="https://www.linkedin.com/in/your-username" target="_blank" v-if="false">LinkedIn</a>
      <a href="https://discordapp.com/invite/your-discord" target="_blank" v-if="false">Discord</a>
    </div>
    <div class="copyright">
      © Copyright 2023 Daniel Stempfle. <a @click="router.push('./impressum')"  target="_blank" class="impressumBtn">Impressum</a>. Last updated: November 20, 2023.
    </div>
  </footer>



</template>
<script setup lang="ts">

import {router} from "../main.js"
import FragmentShaderBox from "../components/FragmentShaderBox.vue";


function onProjectsBtn() {
  router.push('/projects')
}

function onTechStackBtn() {
 // scroll to tech stack anchor
  const anchor = document.getElementById('tech-stack-anchor')
  anchor.scrollIntoView({behavior: 'smooth'})
}

function onShaderBtn() {
  router.push('/shaders')
}

function impressClick(){
  router.push('/impressum')
}




</script>
<style scoped>
/* Mobile styles */

/* Global Styles */
html, body {
  margin: 0;
  padding: 0;
  font-size: 16px; /* Base font size for responsive rem unit */
}

/* Add media query for smaller screens */
@media (max-width: 768px) {
  .landing-page .header {
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.0);
  }

  .profile-image {
    width: 40px;
    height: 40px;
  }

  h1 {
    font-size: 2.5rem;  /* Slightly smaller font size */
    /*line break*/
    white-space: normal !important;
  }

  .profession {
    font-size: 1.8rem;  /* Slightly smaller font size */
  }

  button {
    width: 130px;   /* Slightly smaller width */
    font-size: 0.9rem; /* Smaller font size for buttons */
  }

  .content-overlay {
    transform: translate(-50%, -50%);
    padding: 0 10px; /* Padding to ensure text doesn't touch screen edge */
  }

  .middle-buttons {
    gap: 5px;  /* Reduced gap for mobile */
    flex-direction: column !important;  /* Stack buttons vertically */

  }

  .btn-nav {
    font-size: 0.8rem;  /* Even smaller font size for mobile */
    padding: 8px 10px;  /* Reduced padding for mobile */
  }
}

/* Additional styles for better touch feedback on mobile */
.btn-nav:active {
  background-color: #777;
  transform: scale(0.95);
}

/* Optional: Consider adding a touch-friendly padding for buttons */
.btn-nav {
  padding: 12px 32px;
}


header {
  line-height: 1.5;
}

.landing-page {
  width: auto;
  height: auto;
  overflow-x: hidden;
  min-height: 100vh;
}

.fullscreen-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}
button {
  font-size: 0.9rem; /* Smaller font size for buttons */
}

.middle-buttons {
  /* center buttons */
  display: flex;
  flex-direction: row;  /* Layout buttons in a row */
  align-items: center;  /* Vertically align the buttons */
  justify-content: center;  /* Horizontally center the buttons */
  gap: 10px;
  z-index: 1;
  position: absolute;
  top: 70%;  /* Adjust as necessary to position vertically */
  left: 50%;  /* Horizontal centering start point */
  transform: translate(-50%, -50%);  /* Center the element from its middle, not its top-left corner */
}


.content-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-55%, -50%);
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
  backdrop-filter: blur(50px);
  height: 110%;
  width: 110%;
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




.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 2; /* To be above the background and overlay content */
  width: 93px;
}

.profile-image {
  width: 50px; /* Adjust based on your image's dimensions */
  height: 50px;
  border-radius: 50%; /* Make it circular */
}

.btn-nav {
  padding: 8px 20px;
  flex: 1;  /* This will make each button take equal space */
  text-align: center;  /* To center the text inside the buttons */
  border: none;
  background-color: #333;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
  min-height: 50px;
}


.btn-nav:hover {
  background-color: #555;
}


/* Updated styles for Tech Stack section */
/* Updated styles for Tech Stack section */
.tech-stack {
  text-align: center;
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
  background: linear-gradient(135deg, rgba(255, 100, 0, 0.43), rgba(250, 190, 0, 0.46)); /* Gradient background color */
  border-radius: 10px; /* Rounded corners */
  color: #fff; /* Text color */
  font-family: Arial, sans-serif; /* Font family */
}

.tech-stack h2 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
}

.tech-stack p {
  font-size: 1.2rem;
  color: #3f3f3f;
  margin-bottom: 20px;
}

.tech-stack-categories {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  flex-wrap: wrap; /* Allow items to wrap to the next row */
}

.tech-stack-category {
  text-align: center;
  flex: 0 0 calc(50% - 20px); /* Adjust the width of each category */
  margin-bottom: 20px; /* Add spacing between categories */
}

.tech-stack-category h3 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 10px;
  line-height: 1.5;
}

.tech-stack-list {
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  padding: 0;
}

.tech-stack-list li {
  margin: 0 10px;
  border: 1px solid #333;
  background-color: #fff;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 4.0rem;
  color: #FFF;
}


/* Add styles for tech icons */
.tech-icon {
  width: 50px; /* Adjust the width as needed */
  height: 50px; /* Adjust the height as needed */
  margin: 0 7px; /* Add spacing between icons */
}

.csharp-icon {
  width: 50px; /* Adjust the width as needed */
  height: 50px; /* Adjust the height as needed */
  margin: 0 7px; /* Add spacing between icons */
  /*scale image*/
  transform: scale(2.0);
}


/* Footer Section */
.footer {
  margin-top: 20px;
  padding: 20px;
  background-color: #333;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.footer-links a {
  margin-right: 10px;
  color: white;
  text-decoration: none;
}

.footer-links a:hover {
  text-decoration: underline;
}

.copyright a {
  color: white;
  text-decoration: none;
}

.impressumBtn {
  border: none;
  background-color: #ffffff00;
  color: white;
}

.impressumBtn:hover {
  text-decoration: underline;
  background-color: #5e5c5c;
  color: white;
  cursor: pointer;
}


</style>
