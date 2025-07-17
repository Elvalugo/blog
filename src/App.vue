<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <AppHeader />
    <main class="flex-fill">
      <router-view />
    </main>
    <AppFooter />
    <BookCard />
  </div>
  
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import BookCard from  './components/BookCard.vue';

export default {
  components: { AppHeader, AppFooter, BookCard,  },
}
</script>
