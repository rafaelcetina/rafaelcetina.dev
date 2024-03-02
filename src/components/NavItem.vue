<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
});

const isActive = computed(() => props.path === props.link);
</script>

<template>
  <div
    :class="`w-full hover:rounded hover:bg-zinc-200 dark:hover:bg-zinc-800 md:w-fit ${isActive ? 'rounded bg-zinc-200 dark:bg-zinc-800' : ''}`">
    <a :href="props.link">
      <div class="border-b px-2 py-1 text-zinc-800 dark:text-zinc-100 md:border-none">
        {{ props.title }}
      </div>
    </a>
  </div>
</template>