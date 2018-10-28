import Vue from 'vue'
import Router from 'vue-router'

import Vuex from 'vuex'

import Foot from '../components/one/foot'
import First from '../components/one/first'
//@:直接找到src根目录
//@:直接找到src根目录
import Sweet from '@/components/one/sweet'
import Eat from '@/components/one/eat'
import MY from '../components/MY/MY'
import Msite from '../page/msite/msite'
import Download from '../page/download/download'
import Service from '../page/service/service'
import QuestionDetail from '../page/service/children/questionDetail'
import Profile from '../page/profile/profile'
import Setusername from '../page/profile/children/setusername'
import Balance from '../page/balance/balance'
import Benefit from '../page/benefit/benefit'
import Points from '../page/points/points'
import SouSuo from '@/components/ZMY/sousuo'
import Dingwei from '@/components/ZMY/dingwei'
import DengLu from '@/components/ZMY/denglu'
import Dingdan from '@/components/ZMY/dingdan'
import Change from '@/components/ZMY/change'
import Dingwei2 from '@/components/ZMY/dingwei2'

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
      // name:'first',
      component: First,
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
      path: '/service',//服务中心问题页
      name:'service',
      component: Service,
    },{
      path: '/service/questionDetail', //服务中心答案页
      component: QuestionDetail,
    },{
      path: '/my/profile', //个人详情页
      component: Profile,
    }, {
      path: '/my/profile/setusername', //修改用户名页
      component: Setusername,
    },{
      path: '/my/balance', //余额页
      component: Balance,
    },{
      path: '/my/points', //积分页
      component: Points,
    },{
      path: '/my/benefit', //红包页
      component: Benefit,
    },{
      path: '/sousuo',
      name: 'SouSuo',
      component: SouSuo
    },{
      path: '/dingwei',
      name: 'dingwei',
      component: Dingwei
    },{
      path: '/denglu',
      name: 'denglu',
      component: DengLu
    },{
      path: '/dingdan',
      name: 'dingdan',
      component: Dingdan
    },{
      path: '/change',
      name: 'change',
      component: Change
    },{
      path: '/dingwei2/:id',
      name: 'dingwei2',
      component: Dingwei2
    }   
  ]  
})
