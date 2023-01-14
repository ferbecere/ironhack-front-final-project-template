<template>
    <div>
this is the textbox to add new items
<input v-model="text"> {{ text }}
<!--v-for="item in items"??-->
    </div>
</template>

<script setup>
import {ref} from "vue"
const text = ref(""); //dejo aquí un string vacío para llenarlo con el imput del usuario...algo no encaja.

</script>

<style scoped>

</style>