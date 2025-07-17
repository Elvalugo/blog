<script setup lang="ts">
import BookCard from './BookCard.vue';

</script>

<template>
  <AppHeader />
  <router-view />
  <BookCard />
  <AppFooter />
  <HelloWord /> <!-- ← Este lo muestra SIEMPRE -->
</template>
