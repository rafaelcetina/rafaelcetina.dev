<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    default: 'from-orange-700',
  },
  via: {
    type: String,
    default: 'via-blue-500',
  },
  to: {
    type: String,
    default: 'to-green-400',
  },
});
</script>

<template>
  <span
    :class="`bg-gradient-to-r ${props.from} ${props.via} ${props.to} animate-gradient bg-300% bg-clip-text text-transparent`">
    {{ props.text }}
  </span>
</template>