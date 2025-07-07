<template>
  <div class="card h-100 d-flex-column shadow animate__animated animate__fadeIn position-relative" data-aos="fade-up">

 <div class="card-body d-flex flex-column justify-content-between flex-grow-1">
    </div>
        <h5 class="card-title">{{ titulo }}</h5>
   </div>
</template>

<script>
export default {
  props: {
   titulo: String 
  },
  }
</script>

<style>
.card {
  position: relative;
}
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  cursor: pointer;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(7, 0, 0, 0.2);
}

</style>


