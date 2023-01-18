<template>
  <div class="flex items-center space-x-4">
    <!-- este es el main, está compuesto de una fila compuesta del botón de editar, el texto, el checkbox y el deletebutton -->
    <!-- <EditButton/>, <ItemName/>, <CheckBox/>, <DeleteButton/>; -->
    <button
      @click=""
      class="py-1 px-2 rounded-sm bg-gray-100 outline-2 outline-red-300 hover:bg-emerald-200 hover:ring-2 hover:outline-amber-300"
    >
      Edit
    </button>
    <input
      type="checkbox"
      id="checkbox"
      class="bg-teal-600"
      :checked="completado"
    />

    <label for="checkbox"> {{ itemListed }} </label>
    <button
      @click="$emit('delete', id)"
      class="py-1 px-2 rounded-sm bg-amber-400 border border-teal-500 outline-2 outline-emerald-500 ring-2 ring-red-400 hover:bg-emerald-50 hover:border-red-400 hover:outline-2 hover:outline-amber-400 hover:ring-2 hover:ring-teal-500 font-sans hover:font-serif"
    >
      Borrar
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { stringifyQuery } from "vue-router";

const checked = ref(false);
const props = defineProps({
  itemListed: String,
  completado: Boolean,
  id: Number,
});

// const delete {

// }
</script>

<style scoped></style>
