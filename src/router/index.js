import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ReadingBooster from '@/components/ReadingBooster'
import LincolnDecisionMakingTool from '@/components/LincolnDecisionMakingTool'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      // component: require('@/components/Home')
      component: Home
    },
    {
      path: '/reading-booster',
      name: 'reading-booster',
      component: ReadingBooster
    },
    {
      path: '/abraham-lincoln-decision-making-tool',
      name: 'abraham-lincoln-decision-making-tool',
      component: LincolnDecisionMakingTool
    }
  ],
  mode: 'history'
})
