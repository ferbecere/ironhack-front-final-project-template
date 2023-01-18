<template>
   
    
    <div id="register" v-if="register">
        This is the app of the night
        
        <p>Register an E-mail</p>
        <input type="email" v-model="email" /> 
        <p id="error" v-if="show">{{ emailErrorMsg }}</p>

        <p>Password</p>
        <input type="password" v-model="password" />
        <p id="error" v-if="showError">{{ passwordErrorMsg }}</p>
        
        <button @click="registerUser">Registrar</button>

        <p @click="changeScreen">Already a member? Log in.</p>
    </div>
    
    <div id="logIn" v-else>
        <div>
            <p>Log in</p>
            <input type="email" v-model="emailLogIn" /> 
            <p>Password</p>
            <input type="password" v-model="passwordLogIn" />
            
            <button @click="logInUser">Log In</button>
        </div> 
        <p @click="changeScreen"> Register account</p>
    </div>
    
    
</template>

<script setup>
import {ref,watch} from "vue";
import {useUserStore} from "../store/user.js"

const email= ref("");
const emailErrorMsg = ref("Emails need an @");
const show = ref(false);
const register = ref(true)

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
    const response = await userStore.signUp(email.value,password.value)
    console.log(response);
};
async function logInUser() {
    // Check email y password validos
    const response = await userStore.signIn(emailLogIn.value,passwordLogIn.value)
    console.log(response);
};
watch(email, (newEmail, oldEmail) =>{ //aqui tendriamos que poner un check en vez del watch si queremos que sea al botón
    if(newEmail.length <6){
        show.value = true;
        emailErrorMsg.value = "El email es demasiado corto";
    } else if (!newEmail.includes("@")){
        show.value = true;
        emailErrorMsg.value = "¡Te dejas el @!";
    }else if(newEmail.indexOf(".")=== -1){
        show.value = true;
        emailErrorMsg.value = "Creo que falta un . en algún sitio";
    } else {
        show.value =  false;
    }
});
watch (password, (newPassword, oldPassword)=>{
    
    if(!newPassword.match(/\d/)){
        showError.value=true;
        passwordErrorMsg.value = "necesita incluir un número"
    }else if(newPassword.length<6){
        showError.value=true;
        passwordErrorMsg.value="¡la contraseña es muy corta!"
    }else {
        showError.value =false;
    }
    
}) //quizás es mejor hacer directamente un switch NPI - revisar.

</script>

<style scoped>

</style>