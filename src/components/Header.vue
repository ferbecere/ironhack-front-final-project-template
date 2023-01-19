<template>
  <div class="flex flex-row mb-10 min-h-[15%]">
    <img src="../assets/todo-logo.svg" class="h-20" />
    <p class="bg-teal-500">this is the header</p>
    <button v-if="user" @click="logOut" class="bg-red-500">
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
