<template>
    <div>
<!-- this is a checkbox 
idealmente me gustaria poder añadir la función de borrar y que se guardaran en otro sitio pero en todo caso para proximas iteraciones. 
falta hacer el underline del texto cuando le damos a completa. quizas incluso crear un botón que elimine las que estan check -->
    <input 
    type="checkbox" 
    id="checkbox" 
    v-model="checked" />
     <label for="checkbox">Checked: {{ checked }} </label>
   </div>
</template>

<script setup>
    import { ref } from 'vue' 
    const checked = ref(false);
</script>

<style  scoped>

</style>