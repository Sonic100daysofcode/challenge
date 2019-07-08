import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Output from '@/components/Output'
import Profile from '@/components/Profile'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

   {
      path: '/outputs',
      name: 'Output',
      component: Output
},
{
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
