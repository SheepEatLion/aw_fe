<template>
  <div id="app">
    <router-view></router-view>
    <Index />
    <Footer />
  </div>
</template>

<script>
import Index from '../components/index.vue'
import Footer from '../components/footer.vue'

export default {
  name: 'Home',
  components: {
    Index,
    Footer
  }
}
</script>