<template>
    <div>
        <!-- Copiar codigo bootstrap para mostrar la lista -->
        <!-- Copiar codigo de lista con badges -->

        <!-- 3 Modificar el listado para iterar los productos -->
        <!-- 3) Para enviar el index a la mutacion modificar el v-for -->
        <!-- 2) Llamar a la propiedad calculada arrayOrdenado -->
        <ul class="list-group">
            <li v-for="(prod, index) of arrayOrdenado"
                :key="prod.id"
                @click="aumentar(index)"
                class="list-group-item d-flex justify-content-between align-items-center">
                {{ index }} - {{ prod.nombre }}
                <span class="badge badge-primary badge-pill">{{ prod.cantidad }}</span>
            </li>
        </ul>
        <!-- Adicionar boton reiniciar -->
        <button class="btn btn-danger btn-block"
                @click="reiniciar">
            Reiniciar
        </button>
    </div>
</template>

<script>
// 1 Importar mapState
import {mapState} from 'vuex';
// 1) Importar mapMutations
import {mapMutations} from 'vuex';

export default {
    name: 'Lista',
    // 2 Mapear el nombre del state productos
    computed: {
        ...mapState(['productos']),
        // 1) Adicionar propiedad computada para retornar array ordenado
        arrayOrdenado: function() {
            return this.productos.sort((a, b) => b.cantidad - a.cantidad)
        }
    },
    // 2) Mapear la mutacion aumentar
    // 1) Mapear la mutacion reiniciar
    methods: {
        ...mapMutations(['aumentar', 'reiniciar'])
    }
}
</script>