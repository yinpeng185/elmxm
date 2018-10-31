<template>
<div class="wrap">
     <div class="hello">
         <router-link to="/my/benefit"><i class="el-icon-arrow-left"></i></router-link>
         <span class="span">兑换红包</span>
    </div>
    <div class="wrap">
      <div class="center"> 
      <input class="input1" type="text" placeholder="请输入兑换码">
      <div class="er">
        <input class="input2" type="text" placeholder="验证码">
        <div class="er">
        <div class="tu">
           </div>
         <div>
           <p class="p1">看不清</p>
           <p class="p2">换一张</p>
         </div>
        </div>
      </div>
      <div class="bottom">
        <button class="button">兑换</button>
      </div>
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
  overflow: hidden;
}
.bd{
    padding-top: 5%;
    padding-bottom: 5%;
    padding-left: 3%;
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
.wrap{
  background: lightgrey;
  height: 6.5rem;
}
.center{
  padding: 0.5rem 0.2rem 0 0.2rem ;
  /* background: white; */
}
.input1{
  width: 95%;
  height: 0.5rem;
  margin-bottom: 0.1rem ;
  padding-left: 0.1rem;
}
.input2{
  width: 55%;
  padding-left: 0.1rem;
  height: 0.4rem;
}
.er{
  display: flex;
}
.tu{
  margin: 0 0.1rem 0 0.1rem;
  width: 0.5rem;
  background: red;
}
.p1{
  font-size: 0.15rem;
  margin:0  0 0.1rem 0;
}
.p2{
  font-size: 0.15rem;
  color: blue;
}
.bottom{
  text-align: center;
  padding: 0.2rem 0 0 0;
}
.button{
  width: 100%;
  color: white;
  background: lightgrey;
  font-size: 0.3rem; 
}

</style>
