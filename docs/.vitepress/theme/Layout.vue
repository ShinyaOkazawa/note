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
  <div class="wrapper">
    <VHeader :is-dark="isDark" @switch="onSwitchTheme" />
    <div class="body">
      <NotFound v-if="page.isNotFound" />
      <Home v-else-if="frontmatter.layout === 'home'" />
      <Page v-else />
    </div>
  </div>
</template>

<style scoped>
.body {
  padding: 30px 20px;
}
.wrapper {
  max-width: 640px;
  margin: auto;
}
</style>
