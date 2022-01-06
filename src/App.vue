<template>
  <div id="app">
    <img alt="Vue logo" width="100px" height="100px" src="./assets/images/footprint.png">
    <Index msg="익명의 작가"/>
  </div>
</template>

<script>
import Index from './components/index.vue'

export default {
  name: 'App',
  components: {
    Index
  }
}
</script>

<style>

@font-face {
  font-family: 'Amsterdam';
  src: url('assets/fonts/amsterdam.ttf') format('truetype');
  font-weight: bolder;
  font-style: normal;
}

#app {
  font-family: 'Amsterdam';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
