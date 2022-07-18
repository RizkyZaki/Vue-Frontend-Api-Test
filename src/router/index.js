import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateKategori from '../views/CreateKategori.vue'
import dashboard from '../views/dashboard.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ListKategori from '../views/ListKategori.vue'
import editKategori from '../views/editKategori.vue'

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/create',
    name: 'CreateKategori',
    component: CreateKategori
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/kategori',
    name: 'kategori',
    component: ListKategori
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: editKategori
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router