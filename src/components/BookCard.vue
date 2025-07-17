
<template>
<body>
  <div v-for="imgs in imgs" :key="imgs">
    <img :src="imgs" :alt="imgs" />
    <button @click="toggleFavorite(imgs)">
      {{ isFavorite(imgs) ? '⭐ Quitar de favoritos' : '☆ Agregar a favoritos' }}
    </button>
  </div>

  <h2></h2>
  <div v-for="fav in favorites" :key="fav">
    <img :src="fav" :alt="fav" />
  </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      images: [
        'ap.jpeg',
        'ap2.jpeg',
        'ap3.jpeg',
      ],
      favorites: [],
    };
  },
  created() {
    const saved = localStorage.getItem('favorites');
    this.favorites = saved ? JSON.parse(saved) : [];
  },
  methods: {
    toggleFavorite(img) {
      if (this.isFavorite(img)) {
        this.favorites = this.favorites.filter(f => f !== img);
      } else {
        this.favorites.push(img);
      }
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    },
    isFavorite(img) {
      return this.favorites.includes(img);
    },
  },
};
</script>