<template>
    <div>
<input v-model="holi" class="bg"/> {{ holi }}
<button @click="add">Añadir</button>


    </div>
</template>

<script setup>
import {ref} from "vue"

const holi = ref(""); 

</script>

<style  scoped>

</style>
