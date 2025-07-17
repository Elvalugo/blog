

<template>
   <footer :style="{ fontSize: tamanoTexto + 'px', textAlign: 'center', padding: '20px', color: 'black', backgroundColor: '#CA5FC0' }">
    {{ mensajeFooter }}
  </footer>
</template>

<script>
export default {
  data() {
    return {
      mensajeFooter: '© 2025 BlogFM - Todos los derechos reservados @Elvaflorindalugosoto',
      tamanoTexto: 16
    };
  }
};
</script>
<style>
#footer {
 background-color: blueviolet;
 }
</style>