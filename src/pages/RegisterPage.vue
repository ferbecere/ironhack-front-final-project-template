<template>
    <div>
this is the registration page

<p>Mail de Usuario</p>
<TextBoxRegisterAuthPage/>
<p>Contraseña</p>
<TextBoxRegisterAuthPage/>
<p>Repite Contraseña</p>
<TextBoxRegisterAuthPage/>

<div>
    <CheckBoxRegister/>, <p>Estoy de acuerdo con las condiciones de uso</p> <!--Aquí si ponemos condicones de uso que sea una ventana pequeña diciendo cualuqier tontuna, a las malas se elimina toda la opción o busco online una y la cortapego.-->
</div>
<ButtonRegisterAuth/>
    </div>
</template>

<script setup>

import TextBoxRegisterAuthPage from '../components/RegisterAuthPageComponents/TextBoxRegisterAuthPage.vue';
import CheckBoxRegister from '../components/RegisterAuthPageComponents/CheckBoxRegister.vue';
import ButtonRegisterAuth from '../components/RegisterAuthPageComponents/ButtonRegisterAuth.vue';

</script>

<style scoped>

</style>