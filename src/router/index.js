import { createRouter, createWebHistory } from 'vue-router'
import CartPage from '../views/CartPage.vue'
import ProgrammsPage from '../views/ProgrammsPage.vue'
import ProgrammDetailPage from '../views/ProgrammDetailPage.vue'
import NotFoundPage from '../views/NotFoundPage.vue'
import EvaluationPage from '../views/EvaluationPage.vue'
import HomePage from '../views/HomePage.vue'
import AboutUs from '../views/AboutUs.vue'
import ContactUs from '../views/ContactUs.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/programms',
    name: 'Programms',
    component: ProgrammsPage,
  },
  { 
    path: '/programms/:id',
    name: 'ProgrammDetail',
    component: ProgrammDetailPage,
    props: true
  },
  {
    path: '/evaluation',
    name: 'Evaluation',
    component: EvaluationPage,
  },
  {
    path: '/evaluation/:id',
    name: 'EvaluationDetail',
    component: EvaluationPage,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    component: AboutUs,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartPage
  },
  {
    path: '/contact',
    name: 'ContactUs',
    component: ContactUs,
  },
  {
    path: '/',
    name: 'HomePage',
    redirect: '/home'
  },
  { path: '/:pathMatch(.*)*', 
    name: 'NotFound-Page',
    component: NotFoundPage 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes 
})

export default router