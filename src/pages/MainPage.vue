<template class="bg-amber-500">
  <div>
    <div v-for="item in store.tasks">
      <Item
        :itemListed="item.title"
        :completado="item.is_complete"
        :id="item.id"
        @delete="deleteItemFromList"
      />
    </div>

    <AddNewItem @add-to-list="addToTheList" />
  </div>
</template>

<script setup>
import Item from "../components/Item.vue";
import AddNewItem from "../components/AddNewItem.vue";
import { useTaskStore } from "../store/task.js";
import { onMounted } from "vue";

const store = useTaskStore();
// const tasks = await store.fetchTasks();

console.log(store.tasks);

const deleteItemFromList = async (id) => {
  await store.deleteTask(id);
  await store.fetchTasks();
};

const addToTheList = async (nuevaTarea) => {
  await store.addTask(nuevaTarea);
  await store.fetchTasks();
};

onMounted(async () => await store.fetchTasks());
</script>

<style scoped></style>
