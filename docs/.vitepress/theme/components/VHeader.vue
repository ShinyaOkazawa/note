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
      HOME
    </a>
    <button class="switch-button" @click="$emit('switch')">
      <template v-if="isDark">
        DARK
      </template>
      <template v-else>
        LIGHT
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
  font-size: 24px;
  font-family: var(--font-family-button);
}
.switch-button {
  font-size: 24px;
  font-family: var(--font-family-button);
  text-decoration: underline;
}
</style>
