<template>
<div>
    <div class="hello">
         <router-link to="/my/benefit"><i class="el-icon-arrow-left"></i></router-link>
         <span class="span">代金券说明</span>
    </div>

  <div data-v-6b5d2075="" class="markdown">
      <h2 data-v-6b5d2075="" id="q1-">Q1: 什么是商家代金券？</h2> 
      <p data-v-6b5d2075="">商家代金券是指由商家自己发放代金券，只限在指定的商家使用，可根据条件抵扣相应金额。</p> 
      <h2 data-v-6b5d2075="" id="q2-">Q2: 怎么获得商家代金券？</h2> 
      <ul data-v-6b5d2075="">
          <li data-v-6b5d2075="">进入有「进店领券」或「下单返券」标示的商家即有机会获得代金券。</li> 
          <li data-v-6b5d2075="">「下单返券」需要在指定商家完成满足返券金额要求的订单后才会返还，代金券可在下次下单时使用。</li>
      </ul> 
      <h2 data-v-6b5d2075="" id="q3-">Q3: 商家代金券使用条件</h2> 
      <ul data-v-6b5d2075="">
          <li data-v-6b5d2075="">商家代金券仅限在指定商家使用</li> 
          <li data-v-6b5d2075="">商家代金券仅限在线支付使用</li> 
          <li data-v-6b5d2075="">每个订单只能使用一张商家代金券，不可与其他代金券叠加使用</li>
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
