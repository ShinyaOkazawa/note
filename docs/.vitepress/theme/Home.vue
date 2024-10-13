<script setup lang="ts">
import { data as posts } from './posts.data'
import { withBase } from 'vitepress'

function getFormattedDate(dateString: string){
  const date = new Date(dateString)
  return date.toLocaleDateString();
}
</script>

<template>
  <ul>
    <li v-for="post of posts">
      <a :href="withBase(post.url)">{{  post.frontmatter.title }}</a>
      <span>作成日：{{ getFormattedDate(post.frontmatter.date) }}</span>
    </li>
  </ul>
</template>

<style scoped>
</style>
