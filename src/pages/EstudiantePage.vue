<template>
    <div id="container">
      <div class="botones-paginas">
        <!-- BARRA DE MIS TRES PAGINAS WEB-->
        <button @click="componenteMostrar = 'FormularioEstudiante'">Formulario de Estudiante</button>
        <button @click="componenteMostrar = 'EliminarEstudiante'">Eliminar Estudiante</button>
        <button @click="componenteMostrar = 'NuevoFormularioEstudiante'">Nuevo Estudiante</button>
      </div>
      <div class="formulario-container">
        <FormularioEstudiante v-if="componenteMostrar === 'FormularioEstudiante'" />
        <EliminarEstudiante v-if="componenteMostrar === 'EliminarEstudiante'" />
        <NuevoFormularioEstudiante v-if="componenteMostrar === 'NuevoFormularioEstudiante'" />
      </div>
    </div>
  </template>
  
  <script>
  import FormularioEstudiante from '@/components/FormularioEstudiante.vue';
  import EliminarEstudiante from '@/components/EliminarEstudiante.vue';
  import NuevoFormularioEstudiante from '@/components/NuevoFormularioEstudiante.vue';
  
  export default {
    name: 'EstudiantePage',
    components: {
      FormularioEstudiante,
      EliminarEstudiante,
      NuevoFormularioEstudiante
    },
    data() {
      return {
        componenteMostrar: 'FormularioEstudiante'
      };
    }
  };
  </script>
  
  <style scoped>
  
  #container {
    display: flex;
    flex-direction: column;
    align-items: center;
   
    padding: 20px;
    
  }
  
  .botones-paginas {
    margin-bottom: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    background-color: #f0f0f0;
    padding: 10px 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }
  
  .botones-paginas button {
    margin: 0 5px;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
  }
  
  .botones-paginas button:hover {
    background-color: #610677;
  }
  
  .formulario-container {
    margin-top: 60px; 
    width: 100%;   
    display: flex;
    justify-content: center;
  }
  
  .formulario-container > * {
    background-color: white; 
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  </style>
  