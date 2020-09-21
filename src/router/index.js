import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/homepage/HomePage.vue'
Vue.use(VueRouter)



const Live = ()=>import('@/views/live/Live.vue');
const Shop = ()=>import('@/views/shop/Shop.vue');
const Person = ()=>import('@/views/person/Person.vue');

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    redirect:'/mogu/homepage',
    component: HomePage
  },
  {
        path: '/mogu/homepage',
        component: HomePage 
  },
  {
        path: '/mogu/live',
        component: Live
  },
  {
        path: '/mogu/shop',
        component: Shop
  },
  {
        path: '/mogu/person',
        component: Person
  },
  
]


const router = new VueRouter({
  mode:'history',
  base:process.env.BASE_URL,
  routes,
})

export default router
