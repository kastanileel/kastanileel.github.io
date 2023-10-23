<template>

  <div class="landing-page">
    <div class="header">
      <img src="/pb.png" alt="kastanileel" class="profile-image">
    </div>


    <FragmentShaderBox class="fullscreen-bg" shaderFile="/shaders/LandingPageShader.txt" resolution-width="960"
                       resolution-height="540"></FragmentShaderBox>

    <div class="content-overlay">
      <div class="blurredField">
        <h1 class="typewriter">KASTANILEEL</h1>
        <p class="profession">SOFTWARE DEVELOPER</p>
      </div>
    </div>
    <div class="middle-buttons">
      <button class="btn-nav" @click="onProjectsBtn">PROJECTS</button>
      <button class="btn-nav" @click="onShaderBtn">SHADER LIBRARY</button>
    </div>


  </div>

    <!-- Tech Stack Section -->
    <div class="tech-stack">
      <h2>Tech Stack</h2>
      <!-- List your tech stack here -->
      <ul>
        <li>JavaScript</li>
        <li>Vue.js</li>
        <li>Node.js</li>
        <!-- ...other tech stack items -->
      </ul>
    </div>

    <!-- About Me Section -->
    <div class="about-me">
      <h2>About Me</h2>
      <p>
        <!-- Insert about me text -->
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non nisi tellus.
      </p>
    </div>

    <!-- Footer Section -->
    <footer class="footer">
      <div class="footer-links">
        <a href="https://github.com/your-username" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/your-username" target="_blank">LinkedIn</a>
        <!-- ...other links -->
      </div>
    </footer>


</template>
<script setup lang="ts">

import {router} from "../main.js"
import FragmentShaderBox from "../components/FragmentShaderBox.vue";


function onProjectsBtn() {
  router.push('/projects')
}

function onShaderBtn() {
  router.push('/shaders')
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
  top: 60%;  /* Adjust as necessary to position vertically */
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


.tech-stack,
.about-me {
  padding: 20px;
  background-color: #f9f9f9;  /* Adjust color as necessary */
}

.tech-stack h2,
.about-me h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.tech-stack ul {
  list-style-type: none;
  padding: 0;
}

.tech-stack li {
  margin-bottom: 5px;
}

/* Footer Section */
.footer {
  padding: 20px;
  background-color: #333;  /* Adjust color as necessary */
  color: white;
}

.footer-links a {
  margin-right: 10px;
  color: white;
  text-decoration: none;
}

.footer-links a:hover {
  text-decoration: underline;
}



</style>
