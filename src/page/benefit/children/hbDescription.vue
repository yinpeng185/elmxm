<template>
<div>
    <div class="hello">
         <router-link to="/my/benefit"><i class="el-icon-arrow-left"></i></router-link>
         <span class="span">红包说明</span>
    </div>

  <div data-v-eb9ca8ba="" class="markdown" style="transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);">
      <h2 data-v-eb9ca8ba="" id="q1-">Q1: 怎么获得红包？</h2> 
      <ul data-v-eb9ca8ba="">
          <li data-v-eb9ca8ba="">通过邀请好友获得</li> 
          <li data-v-eb9ca8ba="">在下单返红包的商家下单获得</li> 
          <li data-v-eb9ca8ba="">抢微信朋友分享的红包获得</li>
      </ul> 
      <h2 data-v-eb9ca8ba="" id="q2-">Q2: 红包可以做什么？</h2> 
      <p data-v-eb9ca8ba="">可以抵扣在线支付时的实际支付金额。</p>
      <h2 data-v-eb9ca8ba="" id="q3-">Q3: 红包的门槛金额按照什么金额计算？</h2> 
      <p data-v-eb9ca8ba="">红包的的门槛金额按照（选购菜品折后价＋餐盒费）的金额作为计算门槛，即购物车显示的金额（7.3以上版本）。假设红包满30可用，只要选购的菜品现价（折后价）＋餐盒费超过30，就可以使用红包。</p> 
      <h2 data-v-eb9ca8ba="" id="q4-">Q4: 一个红包能拆开多次使用吗？</h2> 
      <p data-v-eb9ca8ba="">不能，一个红包只能一次性使用，不能分开使用。</p> 
      <h2 data-v-eb9ca8ba="" id="q5-">Q5: 下单的时候使用了红包，但是后来订单取消了，红包还会返还吗？</h2> 
      <p data-v-eb9ca8ba="">会的，订单无效后红包会自动返还到您的账户里。</p> 
      <h2 data-v-eb9ca8ba="" id="q6-">Q6: 红包兑换码怎样兑换成红包，怎样查看红包？</h2> 
      <p data-v-eb9ca8ba="">在个人中心 &gt; 我的红包 &gt; 兑换红包，输入兑换码进行兑换。</p> 
      <h2 data-v-eb9ca8ba="" id="q7-">Q7: 邀请好友了，为什么没获得红包？</h2> 
      <p data-v-eb9ca8ba="">先检查下您是否在同一设备上进行的邀请？或者被邀请人是否通过您发给对方的链接进行注册？而非自己复制链接注册的。同一设备上邀请或没有按照点击发送的链接邀请都是无效邀请。如果您是正常邀请没获得红包，可以致电客服进行查实。</p> 
      <h2 data-v-eb9ca8ba="" id="q8-">Q8: 预订早餐、预订午餐的红包怎么使用？在哪里查询？</h2> 
      <ul data-v-eb9ca8ba="">
          <li data-v-eb9ca8ba="">预订早餐、预订午餐的红包暂时不支持直接点外卖使用，并且当前点外卖的红包也暂时不支持在预订早餐、预订午餐时使用。</li> 
          <li data-v-eb9ca8ba="">预订早餐、预订午餐的红包从APP首页点击“预订早餐”按钮进入后在右上角的个人中心中查找预订早餐、预订午餐的红包。</li>
      </ul> 
      <h2 data-v-eb9ca8ba="" id="q9-">Q9: 互斥红包怎么使用？</h2> 
      <ul data-v-eb9ca8ba="">
          <li data-v-eb9ca8ba="">互斥红包不与其他优惠活动（包含但不限于：新用户专享、满X元减X元、满X元赠XX）同时使用。</li>
      </ul> 
      <h2 data-v-eb9ca8ba="" id="q10-">Q10: 返红包活动， 红包领取规则是什么?</h2> 
      <ul data-v-eb9ca8ba="">
          <li data-v-eb9ca8ba="">同一个手机号一天限领取三个。</li> 
          <li data-v-eb9ca8ba="">同一注册用户一天限领取三个。</li> 
          <li data-v-eb9ca8ba="">注册用户红包直接发送至用户账户里。</li> 
          <li data-v-eb9ca8ba="">非注册用户红包以兑换码短信的形式发送至用户手机，注册后凭兑换码兑换即可。</li> 
          <li data-v-eb9ca8ba="">红包的使用周期为1周，自红包发放的第2天开始计算。</li> 
          <li data-v-eb9ca8ba="">同一个手机号一天最多使用两个红包。</li> 
          <li data-v-eb9ca8ba="">未收到红包短信的用户注意查看手机里的拦截短信。</li> 
          <li data-v-eb9ca8ba="">有任何问题请拨打客服电话：10105757。</li>
      </ul>
  </div>
</div>
    
</template>

<script>
export default {

}
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
}
.hello {
  background: blue;
  text-align: center;
  /* height: 2rem; */
  width: 100%;
  /* border: 5px solid black; */
  position: fixed;
  z-index: 5;
}
.el-icon-arrow-left {
  color: white;
  font-size: 0.3rem;
  float: left;
  margin-top: 0.01rem;
}
.span {
  color: white;
  font-size: 0.3rem;
  z-index: 5;
}
.markdown{
    padding: .5rem .2rem 0 .2rem;
}
h2{
    margin: 0.2rem 0 0.2rem 0;
    font-weight: bold;
}
</style>
