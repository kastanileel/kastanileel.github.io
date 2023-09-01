<template>
  <gl-canvas v-if="loaded" :width="resolutionWidth" :height="resolutionHeight">
    <gl-program name="main" :code="shader">
    </gl-program>
  </gl-canvas>
</template>

<script setup>
import {onMounted, ref} from "vue";

const props = defineProps( {
  shaderFile: String,
  resolutionWidth: {type: Number, default: 800},
  resolutionHeight: {type: Number, default: 600},
})

const shader = ref('')
const shaderFile = ref(props.shaderFile)
let loaded = ref(false)

// load shader file on mounted
onMounted(async () => {
  const response = await fetch(shaderFile.value)
  shader.value = await response.text()
  loaded.value = true
})
</script>

<style scoped>

</style>