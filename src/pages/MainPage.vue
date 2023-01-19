<template class="bg-amber-500 h-screen">
  <div class="space x-4">
    <div class="space x-4">
      <div v-for="item in store.tasks">
        <Item
          :title="item.title"
          :completado="item.is_complete"
          :id="item.id"
          @delete="deleteItemFromList"
          @he-cambiau="itemHasChanged"
          @completed="itemHasBeenCompleted"
        />
      </div>
    </div>
    <AddNewItem @add-to-list="addToTheList" />
  </div>
</template>

<script setup>
import Item from "../components/Item.vue";
import AddNewItem from "../components/AddNewItem.vue";
import { useTaskStore } from "../store/task.js";
import { onMounted } from "vue";

// const tasks = []
//tengo que cambiar la linea 4 para que coga las cosas qu estaran gaurdas en la array de tasks y llamarlol entonces.

// const getAllTasks = () => {

// }

const store = useTaskStore();
// const tasks = await store.fetchTasks();

console.log(store.tasks);

const deleteItemFromList = async (id) => {
  await store.deleteTask(id);
  await store.fetchTasks();
};

const addToTheList = async (title) => {
  await store.addTask(title);
  await store.fetchTasks();
};
const itemHasChanged = async (id, title) => {
  await store.editTask(id, title);
  await store.fetchTasks();
};
const itemHasBeenCompleted = async (id, completed) => {
  await store.setTaskStatus(id, completed);
  await store.fetchTasks();
};
onMounted(async () => await store.fetchTasks());
</script>

<style scoped></style>
