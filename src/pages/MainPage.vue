<template>
    <header>
        <!--Appname PatentPending-->
        <!-- <LogOut/> -->
    </header>
    <div>
   
    <div v-for="item in state.miLista">
        <Item :itemListed="item.nombre" :completado="item.completado" :id="item.id" @delete="deleteItemFromList" />
    </div>
    <AddNewItem @add-to-list="addToTheList"/>
     
     <!-- <AddNewItem/> -->
    </div>
</template>

<script setup>
  
import Item from "../components/Item.vue"
import AddNewItem from "../components/AddNewItem.vue"
import {reactive} from "vue"
import { useTaskStore } from "../store/task.js";
const store = useTaskStore();
// const tasks = await store.fetchTasks();
store.fetchTasks();
console.log("HEHE")
console.log(store.tasks);
const state = reactive ({
    miLista:[
{id:1, nombre:"limón",completado:true,},
{id:2, nombre:"naranja", completado: false,},
{id:3, nombre:"piña", completado:true,}
]});

const deleteItemFromList = (id) => {
   const newList = state.miLista.filter(item => item.id !== id);
   state.miLista = newList;
} 

const addToTheList = (nuevaTarea) =>{
    const newList = state.miLista.filter(item => item);
    newList.push({
        nombre:nuevaTarea,
        completado:false,
        id:Math.random(),  
    });
    state.miLista = newList;
}

</script>

<style scoped>

</style>

