import Vue from 'vue';
import Router from 'vue-router';
import AeHome from './components/ae-home/ae-home.vue';

const routes = [
  { path: '/', component: AeHome },
];

Vue.use(Router);

const router = new Router({
  routes,
});

export default router;