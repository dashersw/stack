<script>
import { mapActions } from 'vuex'

import HelloWorld from '@/components/hello-world.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  created() {
    this.fetchUsers()
  },
  methods: {
    ...mapActions(['fetchUsers']),
  },
}
</script>

<template lang="pug">
.home
  hello-world(msg="Welcome to your stack.")
</template>
