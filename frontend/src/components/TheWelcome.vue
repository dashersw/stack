<script lang="ts">
import { useUserStore } from '../stores/user'

export default {
  name: 'TheWelcome',
  computed: {
    beautifyedObj(): string {
      const userStore = useUserStore()
      return JSON.stringify(userStore.users, null, 2)
    }
  },
  async created() {
    const userStore = useUserStore()
    await userStore.fetchUsers()
  }
}
</script>

<template lang="pug">
pre {{ beautifyedObj }}
</template>
