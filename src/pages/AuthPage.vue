<template>
    <div>
it is I, the AuthPage! <!--title-->
<p>Log in</p> 
<p>User Name or registered mail</p>
<!-- <TextBoxRegisterAuthPage/> -->
<!-- <WarningTextRegisterAuth/> ESTO SE CAMBIA CON UN CONDICIONAL QUE SE LLAMA WATCHER-->
<input type="email" v-model="email" />
<p id="error" v-if="show">{{ emailErrorMsg }}></p>
<p>Password</p>
<input type="password" v-model="password" />
<p id="error" v-if="showError">{{ passwordErrorMsg }}></p>
<TextBoxRegisterAuthPage /> :disabled="show" @click="check" // esto sirve para que haga el check cuadno apretamos el botón y que no moleste mientras escribimos.
<!-- <WarningTextRegisterAuth/> ESTO SE CAMBIA CON UN CONDICIONAL QUE SE LLAMA WATCHER-->

<RegisterAuthButton/>
not a member? register. <!--entiendo que aquí podemos hacer un link? bueno se que vue no tiene a si no que tiene router-link pero bueno me refiero a eso. Actualización: el profe ha dicho que tiene que se con un cambio de estado (entiendo que una class) no con una página nueva.-->
    </div>
</template>

<script setup>
import {ref,watch} from "vue";


const email= ref("");
const emailErrorMsg = ref("Emails need an @");
const show = ref(false);

const password = ref("");
const passwordErrorMsg = ref("Password needs numbers!");
const showError = ref(false);

watch(email, (newEmail, oldEmail) =>{ //aqui tendriamos que poner un checken vez del watch si queremos que sea al botón
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
    if(newPassword.includes("number")){
        show.value=true;
        passwordErrorMsg.value = "necesita incluir un número"
    }else if(newPassword.length<6){
        show.value=true;
        passwordErrorMsg.value="¡la contraseña es muy corta!"
    }else {
        show.value =true;
    }
    
}) //quizás es mejor hacer directamente un switch NPI - revisar.

</script>

<style  scoped>

</style>