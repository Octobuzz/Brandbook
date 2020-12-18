import Vue from 'vue';
import VueRouter from 'vue-router';
import Identics from '../views/Identics.vue';
import Process from '../views/Process.vue';
import Materials from '../views/Materials.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'identics',
    component: Identics,
  },
  {
    path: '/process',
    name: 'process',
    component: Process,
  },
  {
    path: '/materials',
    name: 'material',
    component: Materials,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
