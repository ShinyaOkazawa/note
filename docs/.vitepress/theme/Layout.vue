<script setup lang="ts">
import { useData } from 'vitepress'
import NotFound from './NotFound.vue'
import Home from './Home.vue'
import Page from './Page.vue'
import VHeader from './components/VHeader.vue'
const { page, frontmatter, isDark } = useData()

function onSwitchTheme(){
  isDark.value = !isDark.value
}
</script>

<template>
  <VHeader :is-dark="isDark" @switch="onSwitchTheme" />
  <div class="body">
    <NotFound v-if="page.isNotFound" />
    <Home v-else-if="frontmatter.layout === 'home'" />
    <Page v-else />
  </div>
</template>

<style scoped>
.body {
  padding: 30px 15px;
}
</style>
