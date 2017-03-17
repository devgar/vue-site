<template>
  <div id="Greet">
    <h1>{{ message }}, {{name}}!</h1>
  <b>Your name: </b><input v-model="name">
  </div>
</template>

<script>
export default {
  name: 'greet',
  data () {
    return {
      message: 'Welcome to this App',
      name: ''
    }
  }
}
</script>

<style scoped>

</style>
