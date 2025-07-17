<template>
  <body>
  <div>
    <!-- NAVBAR -->
     <nav :style="{ backgroundColor: '#CA5FC0', color: 'black', padding: '15px', fontSize: '18px', textAlign: 'left', }">
   BlogFM  </nav>
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <img src="imgs/logom.png" alt="BlogFM logom" width="50" class="d-inline-block align-text-top" />
        </router-link>
  </div>
 
        <!-- TÍTULO -->
    <div class="container mt-5">
      <h1 class="text-center animate__animated animate__swing mb-4" style="color:black;">
        <strong><em>Bienvenidos a Blog de Frases</em></strong>
      </h1>
    </div>
 
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <button class="nav-link btn btn-link text-white" @click="seleccionarCategoria('Acerca de')">
              Acerca de
            </button>
          </li>
          <li class="nav-item">
            <button class="nav-link btn btn-link text-white" @click="seleccionarCategoria('Contacto')">
              Contacto
            </button>
          </li>
        </ul>
      </div>
  
   

    <!-- CATEGORÍAS COMO BOTONES -->
    <div class="category-buttons">
      <button
        v-for="(categoria, index) in categorias"
        :key="index"
        @click="seleccionarCategoria(categoria)"
        :class="{ activo: categoriaSeleccionada === categoria }"
      >
        {{ categoria }}
      </button>
    </div>

    <!-- Sección Acerca de -->
    <div v-if="categoriaSeleccionada === 'Acerca de'" class="container text-center mt-4">
      <p class="lead">
        💬 <strong>Acerca de:</strong> BlogFM es un espacio dedicado a compartir frases que inspiran, motivan y transforman. Creado con amor para quienes disfrutan reflexionar.
      </p>
    </div>

    <!-- Sección Contacto -->
    <div v-if="categoriaSeleccionada === 'Contacto'" class="container text-center mt-4">
      <p class="lead">
        📧 <strong>Contacto:</strong><br />
        Nombre: [Tu nombre aquí] <br />
        Número: +52-xxx-xxx-xxxx <br />
        Email: <a :href="mailtoLink">contacto@blogfm.com</a>
      </p>
    </div>

    <!-- CARRUSEL -->
    <div v-if="categoriaSeleccionada === 'Todas las categorias'" class="carousel-container">
      <div class="carousel" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <img v-for="(img, index) in carruselImagenes" :key="index" :src="img" class="d-block w-100" />
      </div>
      <div class="buttons">
        <button @click="prevSlide">Anterior</button>
        <button @click="nextSlide">Siguiente</button>
      </div>
    </div>

    <!-- GALERÍA FILTRADA -->
    <div v-if="imagenesFiltradas.length && !['Acerca de','Contacto'].includes(categoriaSeleccionada)" class="gallery">
      <div class="photo" v-for="(img, index) in imagenesFiltradas" :key="index">
        <img :src="img.url" :alt="`Imagen de ${img.categoria}`" />
      </div>
    </div>
  </div>
  </body>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      categorias: ['Todas las categorias', 'Amor Propio', 'Éxito', 'Esperanza'],
      categoriaSeleccionada: 'Todas las categorias',
      busqueda: '',
      carruselImagenes: [ '/imgs/c1.jpeg', '/imgs/c2.jpeg',  ],
      todasLasImagenes: [
        { categoria: 'Amor Propio', url: '/imgs/ap.jpeg' },
        { categoria: 'Amor Propio', url: '/imgs/ap2.webp' },
        { categoria: 'Amor Propio', url: '/imgs/ap3.jpeg' },
        { categoria: 'Amor Propio', url: '/imgs/ap4.jpeg' },
        { categoria: 'Éxito', url: '/imgs/e1.jpeg' },
        { categoria: 'Éxito', url: '/imgs/e2.jpeg' },
        { categoria: 'Éxito', url: '/imgs/e3.jpeg' },
        { categoria: 'Éxito', url: '/imgs/e4.jpeg' },
        { categoria: 'Esperanza', url: '/imgs/ezp1.jpeg' },
        { categoria: 'Esperanza', url: '/imgs/ezp2.jpeg' },
        { categoria: 'Esperanza', url: '/imgs/ezp4.jpeg' },
        { categoria: 'Esperanza', url: '/imgs/ezp5.jpeg' }
      ],
      currentIndex: 0,
      intervalId: null
    };
  },
  computed: {
    imagenesFiltradas() {
      if (this.categoriaSeleccionada === 'Todas las categorias') {
        return this.todasLasImagenes;
      }
      return this.todasLasImagenes.filter(
        img => img.categoria === this.categoriaSeleccionada
      );
    },
    mailtoLink() {
      return `mailto:contacto@blogfm.com?subject=Contacto BlogFM&body=Nombre:%20[Tu nombre]%0ANúmero:%20[Tu número]%0AMensaje:%20[Tu mensaje]`;
    }
  },
  methods: {
    seleccionarCategoria(categoria) {
      this.categoriaSeleccionada = categoria;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.carruselImagenes.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.carruselImagenes.length) % this.carruselImagenes.length;
    },
    startAutoSlide() {
      this.intervalId = setInterval(this.nextSlide, 3000);
    }
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  }
};
</script>

<style scoped>
.navbar-brand img {
  margin-right: 8px;
}

.category-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 20px;
  justify-content: center;
}

.category-buttons button {
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  background-color: #f4a8e1;
  color: rgb(48, 3, 24);
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;
}

.category-buttons button:hover {
  background-color: #a1157c;
}

.category-buttons button.activo {
  background-color: #c616a0;
}

.carousel-container {
  overflow: hidden;
  width: 100%;
  position: relative;
}

.carousel {
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
}

.carousel img {
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: contain;
  flex-shrink: 0;
}

.buttons {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  gap: 10px;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  padding: 30px;
}

.photo img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0 5px 15px rgba(106, 248, 3, 0.2);
  transition: transform 0.4s ease;
}

.photo img:hover {
  transform: scale(1.05);
}

body {
  background-color: #f39fde;

}
imagen-nav {
  width:  50px;
  height: auto;
  margin-right: 15px;
}

</style>