import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import CartPage from '../views/CartPage.vue'
import ProgrammsPage from '../views/ProgrammsPage.vue'
import ProgrammDetailPage from '../views/ProgrammDetailPage.vue'
import NotFoundPage from '../views/NotFoundPage.vue'
import EvaluationPage from '../views/EvaluationPage.vue'
import HomePage from '../views/HomePage.vue'
import AboutUs from '../views/AboutUs.vue'
import ContactUs from '../views/ContactUs.vue'
import SignIn from '../views/SignIn.vue'


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
  { path: "/sign-in", 
    name: "SignIn",
    component: SignIn,
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

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if(await getCurrentUser()) {
      next();
    } else {
      alert("You must be logged in to see this page");
      next("/");
    }
  } else {
    next();
  }
});

export default router