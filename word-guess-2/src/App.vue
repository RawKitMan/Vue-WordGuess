<template>
  <div id="app">
    <WordGuess />
  </div>
</template>

<script>
import WordGuess from './components/WordGuess.vue';

export default {
  name: 'App',
  components: {
    WordGuess
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
</style>
