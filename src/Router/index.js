import { createRouter, createWebHistory } from 'vue-router';
import Acerca from '../views/AcercaView.vue';
import Contacto from '../views/Contacto.vue';

const routes = [
    { path: '/acerca', name: 'Acerca', component: Acerca },
    { path: '/contacto', name: 'Contacto', component: Contacto },
];

const router = createRouter({
    history: createWebHistory(),
    routes

});

export default router;


