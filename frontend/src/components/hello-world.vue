<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
}
</script>

<template lang="pug">
.hello
  h1 {{ msg }}
</template>
