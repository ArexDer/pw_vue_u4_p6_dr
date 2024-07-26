//AQUI DEFINO TODAS LAS RUTAS DE MI APLICACION
/*
AQUI  DECLARO TODAS LAS RUTAS DE MI PROYECTO
*/
import {createRouter, createWebHashHistory} from 'vue-router'



import BienvenidaPage from '../pages/BienvenidaPage.vue'


// aqui pongo a mis paginas las que tenga puede ser una, 2,3... como N
import EliminarEstudiante from '@/components/EliminarEstudiante.vue'
import FormularioEstudiante from '@/components/FormularioEstudiante.vue'
import NuevoFormularioEstudiante from '@/components/NuevoFormularioEstudiante.vue'
//import EstudiantePage from '@/pages/EstudiantePage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'



/*

Ahora declaramos un arreglo de objetos, y estos representan a cada pagina
*/
const routes =[ //en formato JSON aqui el http:// YA VIENE DADO POR EL SERVIDOR
   
    {
    // http://localhost:8080/
    //Esta siempre configurada en el app.vue    IMPORTANTE!!!!!
    path: '/',
    component: BienvenidaPage  

    },
    {
        path: '/formularioEstudiantepage/:cedula', //Consulta    Actualziar
    component: FormularioEstudiante 

    },
    {
        path: '/eliminarEstudiantepage',
    component: EliminarEstudiante 

    },
    {
        path: '/nuevoEstudiantepage/',
    component: NuevoFormularioEstudiante 
    },
    {
        path: '/:pathMatch(.*)*',      //Wildcat cuando no encuentra la pagina
    component: NotFoundPage 
    }

]


const router=createRouter({
    history: createWebHashHistory(), 
    routes,
})

export default router
