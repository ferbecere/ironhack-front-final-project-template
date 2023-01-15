<template>
    <header>
        <!--Appname PatentPending-->
        <!-- <LogOut/> -->
    </header>
    <div>
   
    <div v-for="item in miLista">
        <Item :itemListed="item.nombre" :completado="item.completado" />
    </div>
    <AddNewItem/>
     
     <!-- <AddNewItem/> -->
    </div>
</template>

<script setup>
  
import Item from "../components/Item.vue"
import AddNewItem from "../components/AddNewItem.vue"
import {ref} from "vue"
const miLista = ref ([
{nombre:"limón",completado:true,},
{nombre:"naranja", completado: false,},
{nombre:"piña", completado:true,}
]);

</script>

<style scoped>

</style>

