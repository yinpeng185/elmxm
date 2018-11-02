import Vue from 'vue'
import Router from 'vue-router'

import Vuex from 'vuex'
import Buycar from '../components/one/buycar'
import Foot from '../components/one/foot'
import First from '../components/one/first'

// import Buycar from '../components/one/buycar'

//@:直接找到src根目录
//@:直接找到src根目录
import Sweet from '@/components/one/sweet'
import Xiangqing from '@/components/one/xiangqing'
import Eat from '@/components/one/eat'
import Neirongo from '@/components/one/neirongo'
import Neirongt from '@/components/one/neirongt'
import Makesure from '@/components/one/makesure'
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
import Vipcard from '../page/vipcard/vip'
import Detail from '../page/points/children/detail'
import balDetail from '../page/balance/children/detail'
import Daijin from '../page/benefit/children/daijin'
import HbDescription from '../page/benefit/children/hbDescription'
import History1 from '../page/benefit/children/history1'
import History2 from '../page/benefit/children/history2'
import History3 from '../page/benefit/children/history3'

Vue.use(Router)
Vue.use(Vuex)


export default new Router({
  routes: [
    {
      path: '/',  //默认路径
      name:"dingwei",
      component: Dingwei,
    },
    {
      path: '/foot',    //底部共用组件

      component: Foot,
    },
    {
      path: '/bc',    //购物车共用组件
      component: Buycar,
    },
    {
      path: '/first',      //外卖界面
      name:'first',
      component: First,
    },{ 
      path: '/sweet',      //分类 排序 筛选 
      name:"sweet", 
      component: Sweet,
    },{
      path: '/eat',     //附近商家下面的商店
      name:"eat",
      component: Eat,
    },{
      path: '/neirongo/:id',    //每个商店 商品 评价
      name:"neirongo",
      component: Neirongo,
    },{
      path: '/neirongt/:id',    //每个商店 商品 评价
      name:"neirongt",
      component: Neirongt,
    }, {
      path: '/xiangqing/:id',       //商家详情
      name:"xiangqing",
      component: Xiangqing,
    },{
      path: '/makesure',       //商家详情
      name:"makesure",
      component: Makesure,
    },{
      path: '/my',      //我的界面
      name: 'my',     
      component: MY
    }, {
      path: '/msite',
      name: 'msite',
      component: Msite
    },{
      path: '/download',  //下载饿了么app
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
      path: '/my/balance/detail', //余额说明页
      component: balDetail,
    },{
      path: '/my/points', //积分页
      component: Points,
    },{
      path: '/my/points/detail', //积分说明页
      component: Detail,
    },{
      path: '/my/benefit/history1', //1页
      component: History1,
    },{
      path: '/my/benefit/history2', //2页
      component: History2,
    },{
      path: '/my/benefit/history3', //3页
      component: History3,
    },{
      path: '/my/benefit', //红包页
      component: Benefit,
    },{
      path: '/my/benefit/daijin', //代金券说明页
      component: Daijin,
    },{
      path: '/my/benefit/hbDescription', //红包说明页
      component: HbDescription,
    },{
      path: '/my/vipcard', //会员页
      component: Vipcard,
    },{
      path: '/sousuo',    //搜索页
      name: 'SouSuo',
      component: SouSuo
    },{
      path: '/dingwei',   //城市
      name: 'dingwei',
      component: Dingwei
    },{
      path: '/denglu',   //登录
      name: 'denglu',
      component: DengLu
    },{
      path: '/dingdan', //订单页
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
