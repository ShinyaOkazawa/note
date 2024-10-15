<script setup lang="ts">
import { useData } from 'vitepress'
import NotFound from './NotFound.vue'
import Home from './Home.vue'
import Page from './Page.vue'
import VHeader from './components/VHeader.vue'
const { page, frontmatter } = useData()
</script>

<template>
  <VHeader />
  <NotFound v-if="page.isNotFound" />
  <Home v-else-if="frontmatter.layout === 'home'" />
  <Page v-else />
</template>
