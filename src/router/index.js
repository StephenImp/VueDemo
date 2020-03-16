import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/views/First'
import Second from '@/components/views/Second'
import ComputedCase from '@/components/case/ComputedCase'
import SetterCase from '@/components/case/SetterCase'
import WatchCase from '@/components/case/WatchCase'
import CreatedAndMountedCase from '@/components/case/CreatedAndMountedCase'
import DemoCase from '@/components/case/DemoCase'
import InstructionCaseOne from '@/components/instructionCase/caseOne'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/first',
      name: 'First',
      component: First
    }, {
      path: '/second',
      name: 'Second',
      component: Second
    }, {
      path: '/computedCase',
      name: 'ComputedCase',
      component: ComputedCase
    }, {
      path: '/setterCase',
      name: 'SetterCase',
      component: SetterCase
    },
    {
      path: '/watchCase',
      name: 'WatchCase',
      component: WatchCase
    },
    {
      path: '/createdAndMountedCase',
      name: 'CreatedAndMountedCase',
      component: CreatedAndMountedCase
    },
    {
      path: '/demoCase',
      name: 'demoCase',
      component: DemoCase
    },
    {
      path: '/instructionCase/caseOne',
      name: 'instructionCaseOne',
      component: InstructionCaseOne
    }
  ]
})
