<template>
  <div
    class="flex flex-row mb-10 h-20 min-h-20 self-center justify-between bg-yellow-200 w-full"
  >
    <!--el justify between no me chuta he tenido que poenr un gap.-->
    <img src="../assets/todo-logo.svg" class="h-10 pl-5 self-center" />
    <button v-if="user" @click="logOut" class="text-xs pr-5">
      cerrar sesión
    </button>
  </div>
</template>

<script setup>
import { useUserStore } from "../store/user.js";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const { user } = storeToRefs(userStore);
const router = useRouter();

const logOut = async () => {
  await userStore.logOut();
  router.push({ path: "/auth" });
};
</script>

<style scoped></style>
