<template>
    <div>
        <router-link to="/">Bienvenida</router-link>
        <router-link to="nuevoEstudiantepage">Estudiante Actualziar</router-link>
        <router-link :to="{ name: 'prueba', params:{ cedula: '123' }, query: { edad: '6666', ciudad:'quito' } }">Estudiante Crear</router-link>

        <!--
        <router-link to="formularioEstudiantepage/vacio">Estudiante Crear</router-link>
        -->
        <!--  IMPORTANTE PATH Y REQU
        <router-link to="formularioEstudiantepage/123?edad=15&ciudad=quito">Estudiante Crear</router-link>
        Con un requestParam
        -->
        <router-link to="eliminarEstudiantepage">Estudiante Eliminar</router-link>
</div>
</template>

<script>
export default {};
</script>

<style scoped>

div{
    padding: 0px 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

div a{
    color: black;
    font-size: 20px;
    margin: 0px 10px;
    padding: 10px;
    border: 2px solid black ;
    margin-top: 20px;
    border-radius: 10px;
    background: #82c0cc;
    text-decoration: none;
}
</style>