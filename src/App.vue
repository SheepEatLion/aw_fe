<template>
  <div id="app">
    <Index />
    <Footer />
  </div>
</template>

<script>
import Index from './components/index.vue'
import Footer from './components/footer.vue'

export default {
  name: 'App',
  components: {
    Index,
    Footer
  }
}
</script>

<style>

@font-face {
    font-family: 'YeolrinMyeongjo-Medium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.1/YeolrinMyeongjo-Medium.woff') format('woff');
    font-weight: normal;
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
