<template>
  <div class="index">
    <!-- Header-->
    <header class="masthead d-flex align-items-center">
        <div class="container px-4 px-lg-5 text-center">
            <img src="../assets/images/imagination.png" width="50" height="50">
            <h1 class="mb-1"> 익명의 작가들 </h1>
            <h3 class="mb-5">글을 쓰고 싶다면 종이와 펜 혹은 컴퓨터, 그리고 약간의 배짱만 있으면 된다.</h3>
            <p>ID: <input type="text"></p>
            <p>PW: <input type="text"></p>
            <button> <router-link to="/Board"> 로그인 </router-link></button>
            <button> 회원가입 </button>
        </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: {
    msg: String
  },
  data() {
    return {
      message: '안녕하세요!'  
    }
  },
  methods: {
    fun : function() {

    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
