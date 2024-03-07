<script setup lang="ts">
import { useUserStore } from '../stores/user.ts'
import { computed } from 'vue'

const userStore = useUserStore()
const { users } = userStore

const beatifyedObj = computed(() => {
  return JSON.stringify(users, null, 2)
})
</script>

<template>
  <pre>{{ beatifyedObj }}</pre>
</template>
