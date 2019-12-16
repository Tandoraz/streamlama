import Vue from 'vue'
import VueRouter, {Route} from 'vue-router'
import firebase from 'firebase/app'
import Home from '../views/home/Home.vue'
import Login from '../views/login/Login.vue'
import MovieService from '@/views/movie/movie.service'

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {requiresAuth: true}
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/about/About.vue')
  },
  {
    path: '/movie/:movieId',
    name: 'movie',
    component: () => import('../views/movie/Movie.vue'),
    meta: {requiresAuth: true}
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isToLogin = to.name === 'login';

  if (isToLogin && currentUser) next('home');
  else if (requiresAuth && !currentUser) next('login');
  else next()
});

export default router
