<template>
    <div>
<input v-model="nuevaTarea"/>
<button @click="$emit('addToList', nuevaTarea)">Añadir</button>


    </div>
</template>

<script setup>
import {ref} from "vue"

const nuevaTarea = ref(""); 

</script>

<style  scoped>

</style>
