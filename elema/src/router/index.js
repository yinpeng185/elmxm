import Vue from 'vue'
import Router from 'vue-router'

import Foot from '../components/one/foot'
import First from '../components/one/first'
//@:直接找到src根目录
import Second from '@/components/one/second'
import Third from '../components/one/third'
//@:直接找到src根目录
import Forth from '@/components/one/forth'
import Find1 from '@/components/one/find1'
import Find2 from '@/components/one/find2'
import Sweet from '@/components/one/sweet'
import Eat from '@/components/one/eat'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:"foot",
      component: Foot,
    },
    {
      path: '/foot',
      component: Foot,
    },
    {
      path: '/first',
      name:'first',
      component: First,
    },{
      path: '/second',
      component: Second,
    },{
      path: '/third',
      component: Third,
    },{
      path: '/forth',
      component: Forth,
    } ,{
      path: '/find1',
      component: Find1,
    },{
      path: '/find2',
      component: Find2,
    },{
      path: '/sweet',
      name:"sweet",
      component: Sweet,
    },{
      path: '/eat',
      name:"eat",
      component: Eat,
    }
  ]
})
