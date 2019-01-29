import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Progress from './views/Progress'
import Initiative from './views/Initiative'
import Contributors from './views/Contributors'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/progress',
      name: 'progress',
      component: Progress
    },
    {
      path: '/initiative',
      name: 'initiative',
      component: Initiative
    },
    {
      path: '/contributors',
      name: 'contributors',
      component: Contributors
    }
  ]
})
