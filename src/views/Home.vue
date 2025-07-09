<template>
    <div class="container mt-5"> 
    <h1 style="color:red;">{{ titulo }} </h1><div class="mb-4 text-center">Bienvenidos a mi blog de frases</div>
</div>
</template>

<script>
import BookCard from './components/BookCard.vue'
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
import HelloWord from './components/HelloWord.vue' 

export default {
  components: { BookCard },
  data () {
    return {
      titulo: 'Bienvenidos a mi blog de frases',
  name: 'App',
  components: {
    AppFooter,
    AppHeader,
    BookCard,
    HelloWord
  }
}
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #d4a34e;
  margin-top: 60px;
}
</style>
