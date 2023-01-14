<template>
    <div>
it is I, the AuthPage! <!--title-->
<p>Log in</p> 
<p>User Name or registered mail</p>
<TextBoxRegisterAuthPage/>
<!-- <WarningTextRegisterAuth/> viendolo ahora no se si hace falta ques ea un componente o bien puede ser un if dentro del textboxregisterautpage-->
<p>Password</p>
<TextBoxRegisterAuthPage/>
<!-- <WarningTextRegisterAuth/> viendolo ahora no se si hace falta ques ea un componente o bien puede ser un if dentro del textboxregisterautpage-->

<RegisterAuthButton/>
not a member? register. <!--entiendo que aquí podemos hacer un link?-->
    </div>
</template>

<script setup>
import TextBoxRegisterAuthPage from "../components/RegisterAuthPageComponents/TextBoxRegisterAuthPage.vue"
import WarningTextRegisterAuth from "../components/RegisterAuthPageComponents/WarningTextRegisterAuth.vue";
import RegisterAuthButton from "../components/RegisterAuthPageComponents/ButtonRegisterAuth.vue";


</script>

<style  scoped>

</style>