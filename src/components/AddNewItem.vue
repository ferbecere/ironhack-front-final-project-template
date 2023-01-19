<template>
  <div class="flex gap-x-2 align-middle">
    <input class="border border-black" v-model="nuevaTarea" />
    <button
      class="py-1 px-2 rounded-sm bg-amber-400 border border-teal-500 outline-2 outline-emerald-500 ring-2 ring-red-400 hover:bg-emerald-50 hover:border-red-400 hover:outline-2 hover:outline-amber-400 hover:ring-2 hover:ring-teal-500 font-sans hover:font-serif"
      @click="$emit('addToList', nuevaTarea)"
    >
      Añadir
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const nuevaTarea = ref("");
</script>

<style scoped></style>
