<template>
    <div>
        <!-- Copiar codigo bootstrap para mostrar la lista -->
        <!-- Copiar codigo de lista con badges -->

        <!-- 3 Modificar el listado para iterar los productos -->
        <ul class="list-group">
            <li v-for="prod of productos"
                :key="prod.id"
                class="list-group-item d-flex justify-content-between align-items-center">
                {{ prod.nombre }}
                <span class="badge badge-primary badge-pill">{{ prod.cantidad }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
// 1 Importar mapState
import {mapState} from 'vuex';

export default {
    name: 'Lista',
    // 2 Mapear el nombre del state productos
    computed: {
        ...mapState(['productos'])
    }
}
</script>