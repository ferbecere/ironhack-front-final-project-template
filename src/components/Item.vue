<template>
    
    <div >
        <!-- este es el main, está compuesto de una fila compuesta del botón de editar, el texto, el checkbox y el deletebutton -->
        <!-- <EditButton/>, <ItemName/>, <CheckBox/>, <DeleteButton/>; -->
        <button @click="">Edit</button>
        <input 
        type="checkbox" 
        id="checkbox" 
        :checked="completado" />
        
        <label for="checkbox"> {{ itemListed }} </label>
        <button @click="delete">Borrar</button>
    </div>
    
    
    
</template>

<script setup>

import { ref } from 'vue' 
import { stringifyQuery } from 'vue-router';

const checked = ref(false);
const props = defineProps ( {
    itemListed: String,
    completado: Boolean,
});


</script>

<style scoped>

</style>