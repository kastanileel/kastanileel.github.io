<template>
  <div class="middle">
    <h1>Projects</h1>

    <Card class="project-card">
      <template #header>
        <img alt="user header" class="card-image" src="https://user-images.githubusercontent.com/56845913/212190204-dc68b712-bcb8-42af-962b-52de7992fce0.png">
      </template>
      <template #title>
        <h3>OpenGL Demo Scene</h3>
      </template>
      <template #subtitle>
        <a href="https://github.com/kastanileel/OpenGLDemoScene">Repository</a>
      </template>
      <template #content>
        With this project i took my first steps into the world of Computer Graphics. I learned how to use OpenGL and GLSL to create a simple scene with basic lighting. I also had much fun experimenting with different shaders and simple light models.
      </template>
    </Card>
  </div>
</template>

<script setup>
import Card from "primevue/card";
</script>

<style scoped>
.middle {
  width: 70%;
  margin: 50px auto auto;
}

.project-card {
  height: auto;
  width: 80%;
  margin: 0 auto;
  border-radius: 50px;
  background-color: #565656;
  /* color of card text */
  color: #ffffff;
}

.project-card a {
  color: #94d6fa;
}



.card-image{
  height: 300px;
  width: 100%;
  /* image shouldnt overlap card */
  object-fit: contain;

  background-color: #ffffff00;
  border-color: #7a7a7a;
  border-style: solid;
  border-width: 0px 0px 1px 0px;



}
</style>