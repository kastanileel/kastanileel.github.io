<template>
<h1>My landing page</h1>
  <FragmentShaderBox shaderFile="/shaders/RayMarcher.txt" resolution-width="1920" resolution-height="1080"></FragmentShaderBox>

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
</style>
