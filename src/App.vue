<template class="min-h-full">
  <section class="flex flex-col h-screen justify-between">
    <Header />
    <router-view />
    <Footer />
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useUserStore } from "./store/user.js";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

const router = useRouter();
const userStore = useUserStore();
const { user } = storeToRefs(userStore);
//const holi

onMounted(async () => {
  try {
    await userStore.fetchUser(); // here we call fetch user

    if (!user.value) {
      // redirect them to logout if the user is not there
      router.push({ path: "/auth" });
    } else {
      // continue to dashboard
      router.push({ path: "/" });
    }
  } catch (e) {
    console.log(e);
  }
});
</script>
