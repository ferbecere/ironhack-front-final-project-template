<template>
  <div
    class="flex flex-row mb-10 min-h-[15%] content-center justify-between bg-yellow-200"
  >
    <img src="../assets/todo-logo.svg" class="mt-10 h-10 pl-5" />
    <button v-if="user" @click="logOut" class="text-xs pr-5">
      Do you want to log out {{ user.email }}?
    </button>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useUserStore } from "../store/user.js";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const { user } = storeToRefs(userStore);
const router = useRouter();

const logOut = () => {
  userStore.logOut();
  router.push({ path: "/auth" });
};

onMounted(async () => {
  try {
    await userStore.fetchUser(); // here we call fetch user

    if (!user.value) {
      console.log("no idea de quien eres");
    } else {
      console.log(user.value);
    }
  } catch (e) {
    console.log(e);
  }
});
</script>

<style scoped></style>
