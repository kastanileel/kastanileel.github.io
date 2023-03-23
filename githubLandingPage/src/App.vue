<template>
<h1>My landing page</h1>
  <Galleria :value="images" :numVisible="1" :circular="true" containerStyle="max-width: 640px"
            :showItemNavigators="true" :showThumbnails="false" :showItemNavigatorsOnHover="true" :showIndicators="true">
    <template #item="slotProps">
      <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
    </template>
    <template #thumbnail="slotProps">
      <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="display: block;" />
    </template>
  </Galleria>

</template>
<script setup>

import {ref} from "vue";
import Galleria from 'primevue/galleria';
import {onMounted} from "vue";

let images = ref([])



onMounted(() => {

  console.log("leel")

  images.value = [
    {"itemImageSrc": "https://user-images.githubusercontent.com/56845913/212190204-dc68b712-bcb8-42af-962b-52de7992fce0.png", "alt": "Description for Image 1"},
      ]
})




</script>
<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
