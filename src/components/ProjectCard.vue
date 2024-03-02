<script setup lang="ts">
import { defineProps } from 'vue';

interface ProjectCardProps {
  projectName: string;
  techs: string[];
  description: string;
  borderColor: string;
  sourceLink: string;
  liveLink: string;
  projectImageSrc: string;
}

const props = defineProps<ProjectCardProps>();


</script>

<template>
  <div class="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 drop-shadow-xl dark:border-zinc-700 dark:bg-zinc-800">
    <div class="flex flex-col md:flex-row md:items-center">
      <div class="md:w-3/5 md:pr-4">
        <h2 class="text-2xl text-zinc-800 dark:text-zinc-100">{{ projectName }}</h2>
        <div class="mt-3 block md:hidden">
          <img class="rounded-2xl border border-zinc-500" :src="projectImageSrc" alt="" />
        </div>
        <h3 class="mt-3 text-zinc-800 dark:text-zinc-100">Tech</h3>
        <div class="mt-1 flex gap-2">
          <Tag v-for="tech in techs" :key="tech" :name="tech" />
        </div>
        <h3 class="mt-3 text-zinc-800 dark:text-zinc-100">Description</h3>
        <p class="mt-3">{{ description }}</p>
        <div class="mt-3 flex gap-5">
          <a v-if="sourceLink" target="_blank" rel="nofollow noopener noreferrer" :href="sourceLink">
            <SimpleDashedButton text="Source Code" />
          </a>
          <a v-if="liveLink" target="_blank" rel="nofollow noopener noreferrer" :href="liveLink">
            <SimpleDashedButton text="Live project" color="text-blue-700" darkColor="dark:text-orange-300" />
          </a>
        </div>
      </div>
      <div class="hidden md:block md:w-2/5">
        <img class="rounded-2xl border border-zinc-500" :src="projectImageSrc" alt="" />
      </div>
    </div>
  </div>
</template>