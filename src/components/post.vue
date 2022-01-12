<template>
    <article class="post-preview">
        <a href="">
            <h2 class="post-title">{{ post_title }}</h2>
            <h3 class="post-subtitle">{{ post_subtitle }}</h3>
        </a>
        <p class="post-meta">wrote by
            {{ author_amount }} people
            on {{ post_modify_date }}
        </p>
    </article>
</template>


<script>
export default {
  name: 'post',
  props: {
    
  },
  data() {
    return {
        post_title: 'title',
        post_subtitle: 'subtitle',
        author_amount: 4,
        post_create_date: '',
        post_modify_date: '31. May, 2022'
    }
  },
  methods: {
    fun : function() {

    }
  }
}

</script>

<style scoped>
.post-title {
    font-weight: bold;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

button {
  margin: 0 5px 0;
}
</style>