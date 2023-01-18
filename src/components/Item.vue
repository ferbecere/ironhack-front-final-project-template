<template>
  <div class="flex items-center space-x-4">
    <!-- este es el main, está compuesto de una fila compuesta del botón de editar, el texto, el checkbox y el deletebutton -->
    <!-- <EditButton/>, <ItemName/>, <CheckBox/>, <DeleteButton/>; -->

    <div v-if="state.editing" class="editando">
      <input v-model="title" />
      <button @click="guardarCambios">Guardar</button>
    </div>

    <div v-else class="noEditando">
      <button
        @click="editItem"
        class="py-1 px-2 rounded-sm bg-gray-100 outline-2 outline-red-300 hover:bg-emerald-200 hover:ring-2 hover:outline-amber-300"
      >
        Edit
      </button>
      <input
        type="checkbox"
        :id="`checkbox${id}`"
        class="bg-teal-600"
        :checked="completado"
        @change="$emit('completed', id, $event.target.value)"
      />
      <label :for="`checkbox${id}`">
        {{ title }}
      </label>
      <button
        @click="$emit('delete', id)"
        class="py-1 px-2 rounded-sm bg-amber-400 border border-teal-500 outline-2 outline-emerald-500 ring-2 ring-red-400 hover:bg-emerald-50 hover:border-red-400 hover:outline-2 hover:outline-amber-400 hover:ring-2 hover:ring-teal-500 font-sans hover:font-serif"
      >
        Borrar
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const emit = defineEmits(["heCambiau"]);

const props = defineProps({
  title: String,
  completado: Boolean,
  id: Number,
});

const title = ref(props.title);

const editItem = () => {
  state.editing = true;
};

let state = reactive({
  editing: false,
});

const guardarCambios = () => {
  state.editing = false;
  emit("heCambiau", props.id, title.value);
};
</script>

<style scoped></style>
