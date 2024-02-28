<template>
    <div v-if="dark" class="shader-card" :style="{backgroundColor:color, color:textColor}">
      <div class="halfSide">
        <iframe :src=link allowfullscreen width="100%" height="100%" ></iframe>
      </div>

      <div class="halfSide" :style="{height: dynamicHeight}">
        <div class="text" ref="textContent">
          <h2>{{ title }}</h2>
          <p>{{ description }}</p>
        </div>
      </div>
    </div>
    <div v-else class="shader-card" :style="{backgroundColor:color, color:textColor}">
      <div class="halfSide" :style="{height: dynamicHeight}">
        <div class="text" ref="textContent">
          <h2>{{ title }}</h2>
          <p>{{ description }}</p>
        </div>
      </div>
      <div class="halfSide">
        <iframe :src=link allowfullscreen width="100%" height="100%"></iframe>
      </div>
    </div>
</template>

<script setup>

import { defineProps } from 'vue';
import {ref} from "vue";
import {onMounted} from "vue";
import {  watch } from 'vue';

// ... existing code ...

// Ref for the text content element
const textContent = ref(null);
// Ref for dynamic height
const dynamicHeight = ref('600px');

let color = ref("#B0B0B0")
let textColor = ref("#303030")

const props = defineProps({
  link: String,
  dark: Boolean,
  title: String,
  description: String,
})

onMounted(() => {
  if (props.dark) {
    color.value = "#303030"
    textColor.value = "#B0B0B0"
  }

  updateHeight();
})

function updateHeight() {
  if (textContent.value) {
    const height = textContent.value.offsetHeight;
    dynamicHeight.value = `${height}px`;
  }
}

watch(() => [props.description, props.title], () => {
  // Update height when the content changes
  updateHeight();
}, { immediate: true });


</script>

<style scoped>

@media screen and (max-width: 800px) {
  .shader-card {
    flex-direction: column;
  }
  
  .halfSide{
    width: 100%;
    height: 200px;
  }

}
@media screen and (min-width: 800px) {
  .shader-card {
    flex-direction: row;
  }

  .halfSide {
    width: 50%;
    height: 250px;
  }
}
.shader-card {
  width: 100%;
  height: 100%;
  display: flex;
}


.text {
  padding: 1rem;
}


div#shaderInfo {
  background-color: rgba(0, 0, 0, 0.1) !important;
  /* other properties... */
}

</style>