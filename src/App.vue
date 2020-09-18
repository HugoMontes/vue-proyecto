<template>
  <div id="app" class="container">
    <!-- Adicionar el componente Cabecera -->
    <Cabecera></Cabecera>
    <!-- 3 Adicionar el componente Lista -->
    <Lista></Lista>
    <!-- Quitar/Eliminar componente HelloWorld -->
    <!-- HelloWorld msg="Bienvenido al Curso de Vue"/ -->
  </div>
</template>

<script>
// Quitar/Eliminar el import de HelloWorld
// import HelloWorld from './components/HelloWorld.vue'

// Importar el componente con el mismo nombre
import Cabecera from './components/Cabecera.vue';

// 1 Importar el componente Lista
import Lista from './components/Lista.vue';

export default {
  name: 'App',
  components: {
    // Quitar/Eliminar componente HelloWorld
    // HelloWorld,
    // Adicionar el componente a los componentes de App.vue
    Cabecera,
    // 2. Adicionar el componente de lista
    Lista
  }
}
</script>