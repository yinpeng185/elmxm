<template>
<div class="wrap">
     <div class="hello">
         <router-link to="/my/benefit"><i class="el-icon-arrow-left"></i></router-link>
         <span class="span">推荐有奖</span>
    </div>
    <div class="wrap">
      <div class="img">
        <img class="img1" src="../../../images/activity.png" alt="">
      </div>
      <div class="center">
        <div>
          <img class="img3" src="../../../images/weixin.png" alt="">
          <p>邀请微信好友</p>
          </div>
        <div>
          <img class="img3" src="../../../images/qq.png" alt="">
          <p>邀请QQ好友</p>
          </div>
        <div>
          <img class="img3" src="../../../images/fenxiang.png" alt="">
          <p>面对面邀请</p>
          </div>
      </div>
       <div class="cen">
        <div>
          <p>累计收益</p>
          <p> <span class="ps1">0</span> 元</p>
          </div>
        <div class="right">
          <p>成功邀请</p>
          <p> <span class="ps2">0</span> 人</p>
          </div>
      </div>
      <div class="bottom"> 
        <p class="bp1">-收益明细-</p>
        <img class="imgb" src="../../../images/qianbao.png" alt="">
        <p class="bp2">还不赶紧去邀请好友</p>
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
  padding: 0;}
.hello {
  background: blue;
  text-align: center;
  /* height: 2rem; */
  width: 100%;
  /* border: 5px solid black; */
  position: fixed;
  z-index: 5;
  overflow: hidden;}
.bd{
    padding-top: 5%;
    padding-bottom: 5%;
    padding-left: 3%;}
.el-icon-arrow-left {
  color: white;
  font-size: 0.3rem;
  float: left;
  margin-top: 0.01rem;}
.span {
  color: white;
  font-size: 0.3rem;
  z-index: 5;
}
.img1{
  width: 100%;
}
.img3{
  padding: 0.1rem;
  width: 50%;
}
.center {
  display: flex;
  text-align: center;
  padding: 0.1rem;
}
.cen div{
  width: 50%;
}
.right{
  border-left: 1px dashed gray;
}
.cen{ 
  display: flex;
  text-align: center;
  padding-top: 0.3rem;
}
.center p{
  font-size: 0.1rem;
}
.bottom{
  text-align: center;
  padding: 0.3rem;
}
.imgb{
  width: 0.5rem;
}
.bottom p{
  padding: 0.2rem 0 0.2rem 0;
}
.bp1{
  font-size: 0.2rem ;
  color: gray;
}
.bp2{
  color: gray;
  font-size: 0.1rem ;
}
.ps1{
  font-size: 0.3rem;
  font-weight: bold;
  color: orange;
}
.ps2{
  font-size: 0.3rem;
  color:gray; 
  font-weight: bold;
}


</style>
