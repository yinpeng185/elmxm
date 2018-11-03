<template>
<div class="wrap">
     <div class="hello">
         <router-link to="/MY"><i class="el-icon-arrow-left"></i></router-link>
         <span class="span">会员中心</span>
    </div>
    <div class="one">
      <div class="one1"><p class="onep">为账户 <span class="name">{{username}}</span> 购买会员</p></div>
      <div class="one2">
        <div class="one21"><span class="one21s">会员特权</span><span class="one21ss">会员说明<i class="el-icon-arrow-right"></i></span></div>
        <div class="one22">
          <div class="op">
          <div>
            <img src="../../images/sheng.jpeg" alt="">
          </div>
          <div class="right">
            <p>减免配送费</p>
            <p>每月减免30单，每日可减免三单，每单最高减4元</p>
            <p>蜂鸟专送共享</p>
          </div>
         </div>
        </div>
        <div class="one23">
          <div class="op">
          <div>
            <img src="../../images/jifen.jpeg" alt="">
          </div>
          <div class="right">
            <p>减免配送费</p>
            <p>每月减免30单，每日可减免三单，每单最高减4元</p>
            <p>蜂鸟专送共享</p>
           </div>
          </div>
        </div>
      </div>
      <div class="one3">
        <div><p>开通会员</p></div>
        <div class="one31"><span class="left1">一个月</span><span class="left2">￥20</span>
        <router-link to="/my/vipcard/goumaihuiuan">
        <button class="right3">购买</button>
        </router-link></div>
      </div>
      <div class="one4">
        <div class="one41"><span class="one41s">兑换会员</span><span class="one21ss">使用卡号卡密<i class="el-icon-arrow-right"></i></span></div>
      </div>
      <div class="one5">
        <div class="one51"><span class="one51s">购买记录</span><span class="one21ss">开发票<i class="el-icon-arrow-right"></i></span></div>
      </div>

    </div>
</div>
</template>

<script>
export default {
    data() {
    return {
      value: true,
      username: ""
    };
  },
  created(){
      this.username = this.$store.state.username;
    
  }
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
.one{
  padding-top: 0.35rem;
}
.one1{
  background: ghostgrwhite;
  padding: 0.2rem 0.2rem ;
}
.onep{
  font-weight: bold;
}
.name{
  color: black;
  font-weight: bold;
}
.one2,.one3,.one4,.one5{
  /* border: 1px solid black; */
  padding:  0.1rem 0.2rem 0.2rem 0.2rem;
}
.one21,.one22{
  border-bottom: 1px solid gray;
  padding-bottom: 0.05rem;
}
.one21s{
 color: black;
}
.one21ss{
  float: right;
}
.op{
  display: flex;
  height: 1rem;
  padding-top: 0.2rem;
  }
img{
    height: .5rem;
    padding: 0.2rem;
  }
.one3 p{
  color: black;
  font-weight: bold;
  padding-bottom: 0.2rem;
  border-bottom: 1px solid gray;
}
.left1{
  font-weight: bold;
  color: black;
}
.left2{
  font-weight: bold;
  color: orangered;

}
.right3{
  background: white;
  border: 1px solid orangered;
  color: orangered;
  float: right;
  padding: 0.05rem 0.2rem;
}
.one31{
  padding:0.1rem 0;
}

.one41s{
  color: black;
}
.one51s{
  color: black;  
}

</style>
