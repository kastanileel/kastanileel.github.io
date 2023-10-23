<template>
  <h1>{{id}} soos</h1>

</template>

<script setup lang="ts">
import VueMarkdown from "vue-markdown-render";
import { defineProps } from 'vue';
import {onMounted} from "vue";

const { category, id } = defineProps(['category', 'id']);

onMounted(() => {

})
</script>

<style scoped>

</style>