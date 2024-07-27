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
import BloqueadoPage from '@/pages/BloqueadoPage.vue'






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
        name: 'prueba',
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
    },
    {
        path: '/bloqueado', 
        name: 'blo'  ,   
    component: BloqueadoPage 
    }

]


const router=createRouter({
    history: createWebHashHistory(), 
    routes,
})


/*
AQUI PROGRAMO LOS GUARDIANES
*/
                    //palabras reservadas
router.beforeEach((to, from,next) =>{

    //
    console.log('GUARDIANES DE VUE \:');
    console.log(to);
    console.log(from);
    console.log(next);

    //aqui pongo la VLIDACION
    let usuario='diego';
    let resultado =false;
    const random =Math.random()*100;

    if(random>50){
        console.log('si tiene acceso a esa pagina')
        next( );
    }else{
        console.log('Acceso Denegado')
        next({name:'blo'})
    }
})

export default router
