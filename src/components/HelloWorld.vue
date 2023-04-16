<script setup lang="ts">
defineProps({
  msg: { type: String, required: true }
})
</script>

<template>
  <h1 class="text-center text-red-500 underline">{{ msg }}</h1>
</template>

<style scoped>

</style>
