<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <ContactsDb />
  <HelloWorld msg="Welcome to Your Vue.js App"/>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ContactsDb from './components/ContactsDb.vue'

export default {
  name: 'App',
  components: {
    ContactsDb,
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
div {
  text-align: center;
}
</style>
