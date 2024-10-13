<script setup lang="ts">
import { useData } from 'vitepress'
import NotFound from './NotFound.vue'
import Home from './Home.vue'
import Page from './Page.vue'
const { page, frontmatter } = useData()
</script>

<template>
  <h1>Custom Layout</h1>
  <NotFound v-if="page.isNotFound" />
  <Home v-else-if="frontmatter.layout === 'home'" />
  <Page v-else />
</template>
