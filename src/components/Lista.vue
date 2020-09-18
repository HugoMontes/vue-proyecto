<template>
    <div>
        <!-- Copiar codigo bootstrap para mostrar la lista -->
        <!-- Copiar codigo de lista con badges -->

        <!-- 3 Modificar el listado para iterar los productos -->
        <!-- 3) Para enviar el index a la mutacion modificar el v-for -->
        <ul class="list-group">
            <li v-for="(prod, index) of productos"
                :key="prod.id"
                @click="aumentar(index)"
                class="list-group-item d-flex justify-content-between align-items-center">
                {{ index }} - {{ prod.nombre }}
                <span class="badge badge-primary badge-pill">{{ prod.cantidad }}</span>
            </li>
        </ul>
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
        ...mapState(['productos'])
    },
    // 2) Mapear la mutacion aumentar
    methods: {
        ...mapMutations(['aumentar'])
    }
}
</script>