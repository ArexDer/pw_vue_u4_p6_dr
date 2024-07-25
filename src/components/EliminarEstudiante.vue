<template>
    <div class="formulario-container">
      <h1>Eliminar Estudiante</h1>
      <div class="campo-cedula">
        <label for="cedula">Cédula:</label>
        <input type="text" id="cedula" v-model="cedula" />
        <button type="button" @click="eliminarEstudiante">Eliminar</button>
      </div>
    </div>
  </template>
  
  <script>
  import {eliminarFachada} from '../clients/clienteEstudiante.js'
  export default {
    data() {
      return {
        cedula: ''
      };
    },
    methods: {
      async eliminarEstudiante() {
        
        const data = await eliminarFachada(this.cedula);
        console.log("Se elimino a:  ",data);
      }
    }
  };
  </script>
  
  <style scoped>
  .formulario-container {
    display: flex;
    flex-direction: column;
    align-items: center; /* Centrado horizontal */
    justify-content: flex-start;
    background-color: #fff9f9;
    padding: 20px;
    margin: 0 auto;
    max-width: 600px;
  }
  
  h1 {
    margin-bottom: 20px;
  }
  
  .campo-cedula {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
  }
  
  .campo-cedula label {
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  .campo-cedula input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
  }
  
  button {
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    background-color: #dc3545;
    color: white;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #c82333;
  }
  </style>
  