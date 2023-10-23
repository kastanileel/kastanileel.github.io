<!-- Badge.vue -->
<template>
  <span class="badge">{{ label }}</span>
</template>

<script setup lang="ts">
import {defineProps, onMounted} from 'vue';

const props = defineProps({
  label: String
});

onMounted(() => {
  console.log(props.label)
})
</script>

<style scoped>
.badge {
  display: inline-block;
  padding: 0.2em 0.4em;
  font-size: 0.7rem;
  font-weight: 700;
  line-height: 1;
  border: black solid 1px;
  color: #0e0e0e;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.875rem;
}
</style>
