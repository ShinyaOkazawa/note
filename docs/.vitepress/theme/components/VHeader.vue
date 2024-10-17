<script setup lang="ts">
defineProps<{
  isDark: boolean
}>();
defineEmits<{
  switch: []
}>()
</script>

<template>
  <header class="header">
    <a href="/note/index.html" class="logo">
      H
    </a>
    <button class="switch-button" @click="$emit('switch')">
      <template v-if="isDark">
        D
      </template>
      <template v-else>
        L
      </template>
    </button>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
}
.logo {
  font-size: 2rem;
}
.switch-button {
  font-size: 2rem;
  font-family: var(--base-font-family);
  text-decoration: underline;
}
</style>
