<template>
    <div class="formulario-container">
      <h1>Formulario de Estudiante</h1>
      <form>
        <ul class="formulario-campos">
          <li class="campo">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" v-model="estudiante.nombre" />
          </li>
          <li class="campo">
            <label for="apellido">Apellido:</label>
            <input type="text" id="apellido" v-model="estudiante.apellido" />
          </li>
          <li class="campo">
            <label for="fechaNacimiento">Fecha de Nacimiento:</label>
            <input type="date" id="fechaNacimiento" v-model="estudiante.fechaNacimiento" />
          </li>
          <li class="campo">
            <label for="genero">Género:</label>
            <select id="genero" v-model="estudiante.genero">
              <option value="M">M</option>
              <option value="F">F</option>
              <option value="Otro">Otro</option>
            </select>
          </li>
          <li class="campo">
            <label for="cedula">Cédula:</label>
            <input type="text" id="cedula" v-model="estudiante.cedula" />
          </li>
        </ul>
        <div class="botonesCyA">
          <button type="button" @click="consultar">Consultar</button>
          <button type="button" @click="actualizar">Actualizar</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        estudiante: {
          nombre: '',
          apellido: '',
          fechaNacimiento: '',
          genero: '',
          cedula: ''
        }
      };
    },
    methods: {
      consultar() {
        // Lógica de consulta
      },
      actualizar() {
        // Lógica de actualización
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
    background-color: #f9f9f9;
    padding: 20px;
    margin: 0 auto;
    max-width: 600px; /* Ancho máximo del formulario */
  }
  
  h1 {
    margin-bottom: 20px;
  }
  
  form {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 100%;
  }
  
  .formulario-campos {
    list-style-type: none; /* Elimina los puntos de la lista */
    padding: 0; /* Elimina el padding predeterminado */
    margin: 0; /* Elimina el margen predeterminado */
  }
  
  .campo {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }
  
  .campo label {
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  .campo input,
  .campo select {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .botonesCyA {
    display: flex;
    justify-content: space-between;
  }
  
  .botonesCyA button {
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
  }
  
  .botonesCyA button:hover {
    background-color: #0056b3;
  }
  </style>
  