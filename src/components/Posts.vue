<script setup lang="ts">
import SectionTitle from './SectionTitle.vue';
import Tag from './Tag.vue';

type PostsProps = {
  title: string;
  posts: any;
};

const props = defineProps({
  title: {
    type: String,
    required: true,
    default: '',
  },
  posts: {
    type: Array<PostsProps>,
    required: true,
    default: () => [],
  },
});

const dateFormatter = (date: string) => {
  return new Date(Date.parse(date)).toLocaleDateString();
};
</script>

<template>
  <section class="mt-10">
    <SectionTitle :title="props.title" />
    <ul class="mt-4">
      <li v-for="post in props.posts" :key="post.data.title"
        class="rounded border-b border-zinc-500 p-4 hover:bg-zinc-200 dark:hover:bg-zinc-800">
        <a class="flex" :href="'/rafaelcetina.dev/blog/' + post.slug + '/'">
          <div class="flex w-full flex-col justify-between gap-2">
            <div>
              <h1 class="text-xl">{{ post.data.title }}</h1>
              <div class="my-4 flex flex-wrap gap-2">
                <Tag v-for="tag in post.data.tags" :key="tag" :name="tag" />
              </div>
              <p>{{ post.data.description }}</p>
            </div>

            <div>{{ dateFormatter(post.data.pubDate) }}</div>
          </div>
        </a>
      </li>
    </ul>
  </section>
</template>