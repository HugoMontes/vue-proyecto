import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Adicionar una array de productos
    productos: [
      { nombre: 'Arroz', cantidad: 0 },
      { nombre: 'Fideo', cantidad: 0 },
      { nombre: 'Maiz', cantidad: 0 },
    ]
  },
  mutations: {
    // Adicionar metodo para aumentar cantidad
    // Obtener el indice para indicar el objeto a modificar
    aumentar: function(state, index){
      state.productos[index].cantidad++;
    },
    // Crear la mutacion reiniciar
    reiniciar: function(state){
      // Recorrer el array y setear en cero 
      state.productos.forEach(elem => {
        elem.cantidad = 0;
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
