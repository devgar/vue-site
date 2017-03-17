import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import About from '@/components/About'
import Greet from '@/components/Greet'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', name: 'Home', component: Hello},
    {path: '/about', name: 'About', component: About},
    {path: '/greet', name: 'Greet', component: Greet}
  ]
})
