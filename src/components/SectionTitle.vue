<script setup lang="ts">
import { defineProps } from 'vue';

interface SectionTitleProps {
  title: string;
}

const props = defineProps<SectionTitleProps>();

</script>
<template>
  <h1 class="text-2xl text-zinc-800 dark:text-zinc-100 md:text-3xl">{{ title }}</h1>
</template>
