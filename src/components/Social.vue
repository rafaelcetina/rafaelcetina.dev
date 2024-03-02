<script setup lang="ts">
import GithubIcon from '../components/icons/GithubIcon.vue'
import LinkedinIcon from '../components/icons/LinkedinIcon.vue'
</script>

<template>
  <div class="mt-8">
    <ul class="flex gap-5">
      <li>
        <a target="_blank" rel="nofollow noopener noreferrer" href="https://www.linkedin.com/in/rafaelcetina/"
          aria-label="Rafael Cetina's Linkedin page">
          <LinkedinIcon :size=34 class="text-blue-400" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="nofollow noopener noreferrer" href="https://github.com/rafaelcetina"
          aria-label="Rafael Cetina's Github page">
          <GithubIcon size=30 />
        </a>
      </li>

    </ul>
  </div>
</template>