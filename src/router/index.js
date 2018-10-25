import Vue from 'vue'
import Router from 'vue-router'

import Vuex from 'vuex'

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
import HelloWorld from '@/components/HelloWorld'
import MY from '../components/MY/MY'
import Msite from '../page/msite/msite'
import Download from '../page/download/download'
import Service from '../page/service/service'
import QuestionDetail from '../page/service/children/questionDetail'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  routes: [
    {
      path: '/',
      name:"first",
      component: First,
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
    }, {
      path: '/my',
      name: 'my',
      component: MY
    }, {
      path: '/msite',
      name: 'msite',
      component: Msite
    },{
      path: '/download',
      name:'download',
      component: Download
    },{
      path: '/service',
      name:'service',
      component: Service,
      children: [{
        path: 'questionDetail', //订单详情页
        component: QuestionDetail,
    }, ]
    }
  ]
})
