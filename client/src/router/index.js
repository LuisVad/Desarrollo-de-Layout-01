import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: 'inicio'
    },
    {
        path: '/',
        component: {
            render(c){
                return c('router-view');
            }
        },
        children : [
            {
                path: '/inicio',
                name : 'inicio',
                component: ()=> import('../components/Inicio.vue')
            },
            {
                path: '/home',
                name : 'home',
                component: ()=> import('../components/Home.vue')
            },
            {
                path: '/user',
                name : 'user',
                component: ()=> import('../components/User.vue')
            },
            {
                path: '/inicio/electronicos',
                name : 'electronicos',
                component: ()=> import('../components/Electronicos.vue')
            },
            {
                path: '/inicio/electronicos/video',
                name : 'Video',
                component: ()=> import('../components/Video.vue')
            },
            {
                path: '/home/cocina',
                name : 'cocina',
                component: ()=> import('../components/Cocina.vue')
            },
            {
                path: '/home/cocina/estufa',
                name : 'estufa',
                component: ()=> import('../components/Estufa.vue')
            },
            {
                path: '/user/limpieza',
                name : 'cocina',
                component: ()=> import('../components/Cocina.vue')
            },
            {
                path: '/home/cocina/estufa',
                name : 'estufa',
                component: ()=> import('../components/Estufa.vue')
            }
        ]
    },
]

const router = new VueRouter({routes, });
export default router;