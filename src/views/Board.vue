<template>
  <div id="board">
    <p> test aa </p>
    <Post />
    <!--<Paging />-->
    <Footer />
  </div>
</template>

<script>
import Post from '../components/post.vue'
//import Paging from './components/paging.vue'
import Footer from '../components/footer.vue'

export default {
  name: 'Board',
  components: {
    Post,
    //Paging,
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
  font-family: 'YeolrinMyeongjo-Medium';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
