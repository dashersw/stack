<script lang="ts">
import { useUserStore } from '../stores/user'

export default {
  name: 'TheWelcome',
  computed: {
    beautifiedObj(): string {
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
pre {{ beautifiedObj }}
</template>
