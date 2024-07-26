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
            <input type="date" id="fechaNacimiento" v-model="estudiante.fechaNacimiento"  />
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
  import {obtenerPorCedulaAxiosFachada, actualizarFachada} from '../clients/clienteEstudiante.js'
  export default {
    data() {   //paso a mi estudiante reactivo
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
      //Lo pongo ASINCRONO Y EL AWAIT .... IMPORTANTE!!!!
      async consultar() {
        console.log(this.estudiante.cedula);
        const data = await obtenerPorCedulaAxiosFachada(this.estudiante.cedula);
        console.log(data);
        console.log(data.nombre);
        console.log(data.apellido);
        this.estudiante.genero=data.genero
        console.log(data.genero);
        console.log(data.fechaNacimiento)

      },
      async actualizar() {
        // FORMATO FECHA: "fechaNacimiento": "2024-01-08T12:10:00",
        const bodyEstudiante ={
          nombre: this.estudiante.nombre, apellido: this.estudiante.apellido,
          fechaNacimiento: "2024-01-08T12:10:00", genero: this.estudiante.genero}
        const data=await actualizarFachada(this.estudiante.cedula, bodyEstudiante);
        console.log(data)
      }
    },
    created(){
      console.log(this.$route.params.estudiante.cedula)
      if(this.$route.params.cedula !=='vacio'){
        this.estudiante.cedula=this.$route.params.cedula; 
        this.consultar();
      }
    }
  };
  </script>

  
  <style scoped>
  .formulario-container {
    display: flex;
    flex-direction: column;
    align-items: center; 
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
    list-style-type: none; 
    padding: 0; 
    margin: 0; 
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
  