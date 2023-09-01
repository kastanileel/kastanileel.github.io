<template>
<h1>My landing page</h1>
  <ShaderBox shaderFile="/shaders/RayMarcher.txt" resolution-width="1920" resolution-height="1080"></ShaderBox>

</template>
<script setup lang="ts">

import {onMounted} from "vue";
import ShaderBox from "./components/ShaderBox.vue";



onMounted(() => {

  console.log("leel")

})




</script>
<style scoped>
header {
  line-height: 1.5;
}
</style>
