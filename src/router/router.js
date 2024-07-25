//AQUI DEFINO TODAS LAS RUTAS DE MI APLICACION
/*
AQUI  DECLARO TODAS LAS RUTAS DE MI PROYECTO
*/
import {createRouter, createWebHashHistory} from 'vue-router'

import EstudiantePage from '@/pages/EstudiantePage.vue' //puedo tener con extension o sin extension

import BienvenidaPage from '../pages/BienvenidaPage.vue'


// aqui pongo a mis paginas las que tenga puede ser una, 2,3... como N
import EliminarEstudiante from '@/components/EliminarEstudiante.vue'
import FormularioEstudiante from '@/components/FormularioEstudiante.vue'
import NuevoFormularioEstudiante from '@/components/NuevoFormularioEstudiante.vue'
//import EstudiantePage from '@/pages/EstudiantePage.vue'

/*
Ahora declaramos un arreglo de objetos, y estos representan a cada pagina
*/
const routes =[ //en formato JSON aqui el http:// YA VIENE DADO POR EL SERVIDOR
    { //aqui estamos poneiendo la ruta qeu continua al http://localhost:8080/pokemon
        // estudiantepage/registro ..... siempre rspetando poner "PAGE" en la url.
        // http://localhost:8080/estudiantepage

    path: '/estudiantepage',
    component: EstudiantePage  

    }, //aqui si tengo MAS rutas continuo con la coma , y otro objeto entre llaves {}...
    {
    // http://localhost:8080/
    //Esta siempre configurada en el app.vue    IMPORTANTE!!!!!
    path: '/',
    component: BienvenidaPage  

    },
    {
        path: '/formularioEstudiantepage',
    component: FormularioEstudiante 

    },
    {
        path: '/eliminarEstudiantepage',
    component: EliminarEstudiante 

    },
    {
        path: '/nuevoEstudiantepage',
    component: NuevoFormularioEstudiante 
    }

]


const router=createRouter({
    history: createWebHashHistory(), 
    routes,
})

export default router



