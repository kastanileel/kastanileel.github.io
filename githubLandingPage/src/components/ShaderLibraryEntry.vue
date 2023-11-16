<template>
    <div v-if="dark" class="shader-card" :style="{backgroundColor:color, color:textColor}">
      <div class="halfSide">
        <iframe :src=link allowfullscreen width="100%" height="100%"></iframe>
      </div>
      <div class="halfSide">
        <div class="text">
          <h2>{{ title }}</h2>
          <p>{{ description }}</p>
        </div>
      </div>
    </div>
    <div v-else class="shader-card" :style="{backgroundColor:color, color:textColor}">
      <div class="halfSide">
        <div class="text">
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
})

</script>

<style scoped>

@media screen and (max-width: 800px) {
  .shader-card {
    flex-direction: column;
  }
  
  .halfSide{
    width: 100%;
  }

}
@media screen and (min-width: 800px) {
  .shader-card {
    flex-direction: row;
  }

  .halfSide {
    width: 50%;
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

</style>