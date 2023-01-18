<template>
  <div>
    <p>this is the header</p>
    <button v-if="user" @click="logOut">{{ user.email }}</button>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useUserStore } from "../store/user.js";
import { storeToRefs } from "pinia";

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

const logOut = () => userStore.logOut();

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
