<script setup lang="ts">
defineProps<{
  isDark: boolean
}>();
</script>

<template>
  <header class="header">
    <a href="/note/index.html">
      <img src="../assets/images/icon.svg" alt="" width="40" height="40">
    </a>
    <button @click="$emit('switch')">
      <template v-if="isDark">
        B
      </template>
      <template v-else>
        W
      </template>
    </button>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  height: 40px;
  border-bottom: 1px solid var(--border-color);
}
</style>
