import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Progress from './views/Progress'
import Initiative from './views/Initiative'
import Scoreboard from './views/Scoreboard'


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
      path: '/scoreboard',
      name: 'scoreboard',
      component: Scoreboard
    }
  ]
})
