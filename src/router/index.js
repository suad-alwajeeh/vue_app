import { createRouter, createWebHistory } from 'vue-router'
import postRouter from './post'
import HomeView from '../views/HomeView.vue'

const baseRouter=[]
const routes=baseRouter.concat(postRouter)
 const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: 
    routes,
 
  
})

export default router
