<template>
    <div>
<!-- este es el main, está compuesto de una fila compuesta del botón de editar, el texto, el checkbox y el deletebutton -->
<EditButton/>, <ItemName/>, <CheckBox/>, <DeleteButton/>;
    </div>
</template>

<script setup>

import CheckBox from "./Item/CheckBox.vue"
import DeleteButton from "./Item/DeleteButton.vue"
import EditButton from "./Item/EditButton.vue"
import ItemName from "./Item/ItemName.vue"


</script>

<style scoped>

</style>