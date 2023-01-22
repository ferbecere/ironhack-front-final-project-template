<template class="flex gap-4 m-4">
  <div class="gap-x-4 flex items-center mb-4 w-full">
    <!-- este es el main, está compuesto de una fila compuesta del botón de editar, el texto, el checkbox y el deletebutton -->
    <!-- <EditButton/>, <ItemName/>, <CheckBox/>, <DeleteButton/>; -->

    <div v-if="state.editing" id="editando" class="mx-2">
      <input v-model="title" />
      <button
        class="mx-2 py-1 px-2 rounded-sm bg-white shadow"
        @click="guardarCambios"
      >
        Guardar
      </button>
    </div>

    <div
      v-else
      id="noEditando"
      class="flex flex-row w-full items-center mx-2 shadow"
    >
      <button
        @click="editItem"
        class="py-1 px-2 rounded-sm bg-gray-100 outline-2 hover:bg-cyan-500 shadow hover:text-white"
      >
        Editar
      </button>
      <input
        type="checkbox"
        :id="`checkbox${id}`"
        class="accent-cyan-700 hover:accent-red-400 mx-2 shadow"
        :checked="completado"
        @change="$emit('completed', id, $event.target.value)"
      />
      <label :for="`checkbox${id}`">
        {{ title }}
      </label>
      <div class="flex justify-end shadow-lg ml-auto" id="boton-borrar">
        <button
          @click="$emit('delete', id)"
          class="mr-auto mx-2 py-1 px-2 rounded-sm bg-amber-400 hover:bg-yellow-200"
        >
          Borrar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const emit = defineEmits(["heCambiado"]);

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
  emit("heCambiado", props.id, title.value);
};
</script>

<style scoped></style>
