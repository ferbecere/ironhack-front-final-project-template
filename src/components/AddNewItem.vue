<template>
  <div class="flex gap-x-2 align-middle place-content-end self-stretch">
    <input class="shadow border border-cyan-700" v-model="nuevaTarea" />
    <button
      class="shadow py-1 px-2 rounded-sm bg-amber-400 hover:bg-yellow-200 font-sans"
      @click="buttonClicked"
    >
      Añadir
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["addToList"]);

const nuevaTarea = ref("");

const buttonClicked = () => {
  emit("addToList", nuevaTarea.value);
  nuevaTarea.value = "";
};
</script>

<style scoped></style>
