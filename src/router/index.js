import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Tents from '../views/Tents.vue'
import Additions from '../views/Additions.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import NotFound from "../views/NotFound.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sotori',
      name: 'sotori',
      component: Tents
    },
    {
      path: '/dodatne-storitve',
      name: 'dodtne-storitve',
      component: Additions
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: Contact
    },
    {
      path: '/o-nas',
      name: 'o-nas',
      component: About
    },
    { 
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: NotFound
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    // {
    //   path: '/contact',
    //   name: 'contact',
    //   component: () => import('../views/ContactView.vue')
    // }
  ]
})

export default router
