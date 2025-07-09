<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-secondary shadow-sm ">
    <div class="container">
      <router-link class="navbar-brand d-flex align-items-center" to="/">
        <i class="fas fa-pen-nib me-2"></i> <!-- Ícono de fuente Awesome -->
        <span class="fw-bold"> Blog</span>
      </router-link>

      <!-- Botón de colapso para móviles (si agregas más enlaces) -->
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

      <!-- Enlaces adicionales si lo necesitas -->
      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/about">Acerca de</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contacto</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  

    <div class="container mt-5"> 
    <h1 style="color:black;"><div class="animate_animate_swing mb-4 text-center ">Bienvenidos a mi blog de frases</div></h1>
    <div class="carousel">
      <div class="carousel-inner">
            <img src="/imgs/imagen1.jpg" alt="Imagen 1">

      </div>
      <button class="prev">Anterior</button>
      <button class="prev">Siguiente</button>
     </div> 
</div>

    

</template>



<style scoped>
.navbar-brand {
  transition: transform 0.2s ease;
}
.navbar-brand:hover {
  transform: scale(1.05);
  color: #ffc107 !important;
}
</style>
