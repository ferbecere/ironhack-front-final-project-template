<template class="">
  <div class="ml-20">
    <!-- flex place-content:center => no consigo centrar todo el elemento -->
    <div id="register" v-if="register">
      <p>Register an E-mail</p>
      <input type="email" v-model="email" />
      <p id="error" v-if="show">{{ emailErrorMsg }}</p>

      <p>Password</p>
      <div class="space-x-5">
        <input type="password" v-model="password" />
        <p id="error" v-if="showError">
          {{ passwordErrorMsg }}
        </p>

        <button
          @click="registerUser"
          class="py-1 px-2 rounded-sm bg-amber-400 hover:bg-yellow-200"
        >
          Registrar
        </button>
      </div>
      <div class="flex flex-row">
        <p>Already a member?</p>
        <p class="text-blue-700 hover:underline" @click="changeScreen">
          Log in.
        </p>
      </div>
    </div>

    <div id="logIn" v-else>
      <div>
        <p>Log in</p>
        <input type="email" v-model="emailLogIn" />
        <p>Password</p>
        <div class="space-x-5 flex flex-row">
          <input type="password" v-model="passwordLogIn" />
          <div>
            <button
              @click="logInUser"
              class="py-1 px-2 rounded-sm bg-amber-400 hover:bg-yellow-200"
            >
              Log In
            </button>
          </div>
        </div>
      </div>
      <p @click="changeScreen" class="text-blue-700 hover:underline">
        Register account
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useUserStore } from "../store/user.js";
import { useRouter } from "vue-router";

const email = ref("");
const emailErrorMsg = ref("Emails need an @");
const show = ref(false);
const register = ref(true);
const router = useRouter();

const password = ref("");
const passwordErrorMsg = ref("Password needs numbers!");
const showError = ref(false);

const emailLogIn = ref("");
const passwordLogIn = ref("");

const userStore = useUserStore();

function changeScreen() {
  register.value = !register.value;
}

async function registerUser() {
  // Check email y password validos
  const response = await userStore.signUp(email.value, password.value);
}
async function logInUser() {
  // Check email y password validos
  const response = await userStore.signIn(
    emailLogIn.value,
    passwordLogIn.value
  );
  router.push({ path: "/" });
}
watch(email, (newEmail, oldEmail) => {
  //aqui tendriamos que poner un check en vez del watch si queremos que sea al botón
  if (newEmail.length < 6) {
    show.value = true;
    emailErrorMsg.value = "El email es demasiado corto";
  } else if (!newEmail.includes("@")) {
    show.value = true;
    emailErrorMsg.value = "¡Te dejas el @!";
  } else if (newEmail.indexOf(".") === -1) {
    show.value = true;
    emailErrorMsg.value = "Creo que falta un . en algún sitio";
  } else {
    show.value = false;
  }
});
watch(password, (newPassword, oldPassword) => {
  if (!newPassword.match(/\d/)) {
    showError.value = true;
    passwordErrorMsg.value = "necesita incluir un número";
  } else if (newPassword.length < 6) {
    showError.value = true;
    passwordErrorMsg.value = "¡la contraseña es muy corta!";
  } else {
    showError.value = false;
  }
});
</script>

<style scoped>
/* template {
  display: flex;
  justify-content: center;
} */
</style>
