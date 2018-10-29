<template>
<div>
    <div class="hello">
         <router-link to="/my"><i class="el-icon-arrow-left"></i></router-link>
         <span class="span">我的积分</span>
    </div>
    <div class="zone">
      <div class="zone1">
        <router-link to="/my/points/detail">
        <span>当前积分</span>
        <span class="right"><img src="../../images/description.png" alt="">积分说明</span>
      </router-link>
       <div class="zone2">
        <span class="zonespan">0</span><span>分</span>
      </div>
      <button>积分兑换商品</button>
      </div>
      <span>最近30天积分记录</span>
     <div class="bottom">
       <img src="../../images/no-log.png" alt="">
       <p>最近30天无积分记录</p>
       <br>
       <p class="P2">快去下单赚取大量积分吧</p>
     </div>
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
.zone{
  height: 1.8rem;
  background: blue;
  padding:.5rem .2rem .5rem .2rem; 
}
.zone1{
  background: white;
  height: 1.8rem;
  padding:.2rem .2rem .2rem .2rem; 
  margin-bottom: .3rem;  
}
.right{
  float: right;
  /* border: 1px solid black; */
  color: blue
}
.right img{
  height: 0.15rem;
}
.zone2{
  color: black;
  padding:.4rem 0 .3rem 0; 
}
.zonespan{
  font-size: 0.5rem
}
button{
  background: orangered;
  width: 100%;
  height: .5rem;
  color: white;
  font-size: .2rem;
}
.bottom{
  text-align: center;
}
.P2{
  color: gray;
  font-size: .12rem;
}
</style>
