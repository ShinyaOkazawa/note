<script setup lang="ts">
import { data as posts } from './posts.data'
import { withBase } from 'vitepress'

function getFormattedDate(dateString: string){
  const date = new Date(dateString)
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
}
</script>

<template>
  <ul>
    <li v-for="post of posts" class="list-item">
      <time class="date" :datetime="post.frontmatter.date">{{ getFormattedDate(post.frontmatter.date) }}</time>
      <p><a :href="withBase(post.url)">{{  post.frontmatter.title }}</a></p>
    </li>
  </ul>
</template>

<style scoped>
.list-item {
  & + & {
    margin-top: 30px;
  }
}
.date {
  font-family: var(--base-font-family);
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-secondary);
}
</style>
