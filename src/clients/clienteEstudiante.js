import axios from "axios";
//Tengo aqui las funbcionalidades de la libreria axios

/*
Todas sus funcionalidades deben ser expuestos por metodos FACHADAS.
Para este ejemplo necesitamos: GUARDAR, CONSULTAR, ELIMINAR, ACTUALIZAR
*/


//METODOS DE CONSUMO DE LA API
//Consultar un estudiante, con una funcion lambda, no se declara tipos
//Fetch siempre acompañado del AWAIT y a su vez el  async
const obtenerPorCedula = async(cedula)=>{
    const data = await fetch(`http://localhost:8080/API/v1.0/Matricula/estudiantes/cedula/${cedula}`)
    .then(r=>r.json()); //json como METODOD
    console.log(data);
    return data;
}

//OTRA FORMA CON AXIOS ya tiene el await esta implicito en la librerias internas, solo toca poner async
//CONSULTAR
const obtenerPorCedulaAxios = async(cedula)=>{
    const data = axios.get(`http://localhost:8080/API/v1.0/Matricula/estudiantes/cedula/${cedula}`)
    .then(r=>r.data);//data como ATRIBUTO
    console.log(data);
    return data;
}

//GUARDAR
const guardar = async(estudianteBody) => {
    const data = axios.post(`http://localhost:8080/API/v1.0/Matricula/estudiantes`,estudianteBody)
    .then(r => r.data);
    console.log(data);
    return data;

}

//ACTUALIZAR
                            //Path y requestbody
const actualizar = async(cedula, estudianteBody) => {
    const data = axios.put(`http://localhost:8080/API/v1.0/Matricula/estudiantes/cedula/${cedula} `,estudianteBody)
    .then(r => r.data);
    console.log(data);
    return data;

}

//ACTUALIZAR PARCIAL
//Path y requestbody
const actualizarParcial = async(cedula, estudianteBody) => {
    const data = axios.patch(`http://localhost:8080/API/v1.0/Matricula/estudiantes/cedula/${cedula} `,estudianteBody)
    .then(r => r.data);
    console.log(data);
    return data;
                            
}

//ELIMINAR
const eliminar = async(cedula)=>{
    const data = axios.delete(`http://localhost:8080/API/v1.0/Matricula/estudiantes/cedula/${cedula}`)
    .then(r=>r.data);//data como ATRIBUTO
    console.log(data);
    return data;
}

//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------

//METODOS DE FACHADA
//No se deberia poner directamente los metodos de la LOGICA.

//CONSULTAR NORMAL FACHADA
export const obtenerPorCedulaFachada = async(cedula)=>{
    return await obtenerPorCedula(cedula);
}

//CONSULTAR  FACHADA
export const obtenerPorCedulaAxiosFachada = async(cedula)=>{
    return  await obtenerPorCedulaAxios(cedula);
    
}

//GUARDAR  FACHADA
export const guardarFachada = async(estudianteBody) => {
    return await guardar(estudianteBody);
    

}

//ACTUALIZAR  FACHADA
 //Path y requestbody
export const actualizarFachada = async(cedula, estudianteBody) => {
    return await actualizar(cedula, estudianteBody);
    

}

//ACTUALIZAR PARCIAL  FACHADA
//Path y requestbody
export const actualizarParcialFachada = async(cedula, estudianteBody) => {
    return await actualizarParcial(cedula, estudianteBody);

}

//ELIMINAR  FACHADA
export const eliminarFachada = async(cedula)=>{
    return await eliminar(cedula);
}



//CRODWSTRIKE



