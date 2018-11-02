<template>
<div>
    <div class="hello">
         <router-link to="/my"><i class="el-icon-arrow-left"></i></router-link>
         <span class="sa">我的优惠</span>
    </div>
    <div class="div1">
      <div class="divv1">
        <div v-if="show1" class="divl" @click="show11()">红包</div>
        <div v-if="show2" class="divll" > <span>红包</span> </div>
        <div v-if="show3" class="divr" @click="show33()" >商家代金券</div>
        <div v-if="show4" class="divrr"><span>商家代金券</span></div>
      </div>
      <div  v-if="show2" class="div2">
        <div class="zydiv">
          <span class="san">有3个红包即将到期</span>
          <router-link to="/my/benefit/hbDescription">
          <span class="red"><img class="img" src="../../images/description.png" alt="">红包说明</span> 
          </router-link>
        </div>
        <div class="zysdiv">
          <div class="zys1">
            <div class="zys11">
              <p class="p">￥<span>1</span>.0</p>
              <p>满20元可</p>
              <p>用</p>
            </div>
            <div class="zys12">
              <p>分享红包</p>
              <p>2017-05-23到期</p>
              <p>限收货手机号为</p>
              <p>13681711254</p>
            </div>
            <div class="zys13">
              <p>剩3日</p>
            </div>
          </div>
          <div class="zys1">
            <div class="zys11">
              <p class="p">￥<span>2</span>.0</p>
              <p>满40元可</p>
              <p>用</p>
            </div>
            <div class="zys12">
              <p>分享红包</p>
              <p>2017-05-23到期</p>
              <p>限收货手机号为</p>
              <p>13681711254</p>
            </div>
            <div class="zys13">
              <p>剩3日</p>
            </div>
          </div>
          <div>
            <div class="zys1">
              <div class="zys11">
                <p class="p">￥<span>4</span>.5</p>
                <p>满30元可</p>
                <p>用</p>
              </div>
              <div class="zys12">
                <p>分享红包</p>
                <p>2017-05-23到期</p>
                <p>限收货手机号为</p>
                <p>13681711254</p>
              </div>
              <div class="zys13">
                <p>剩3日</p>
                </div>
            </div>
            <div>限品类：快餐便当、特色菜系、甜品饮品、异国料理</div>
          </div>
          <router-link to="/my/benefit/history1"><div class="history"> <span class="spannn">查看历史记录<i class="el-icon-arrow-right"></i></span></div></router-link>   
        </div>
      <div class="divvvv">
        <div class="divl"><router-link to="/my/benefit/history2"><span class="span">兑换红包</span> </router-link> </div>      
        <div class="divr"><router-link to="/my/benefit/history3"><span class="span">推荐有奖</span> </router-link>  </div>       
      </div>
      </div>
      
      <div v-else class="div3">
        <div>
          <router-link to="/my/benefit/daijin">
          <span class="red"><img class="img" src="../../images/description.png" alt="">商家代金券说明</span>
          </router-link> 
          <div class="zdiv">
            <img src="../../images/voucher.png" alt="" srcset=""><br>
            <p class="p1">无法使用代金券</p><br>
            <p class="p2">非客户端或者客户端版本过低</p><br>
            <router-link to="/download">
            <button class="b1">下载或升级客户端</button>
            </router-link>
          </div>
        </div>
      </div>
        
    </div>
</div>  
</template>

<script>
export default {
  data(){
    return{
      show1:false,
      show2:true,
      show3:true,
      show4:false,
    }
  },
  methods:{
    show11(){
      this.show1 = false;
      this.show2 = true;
      this.show3 = true;
      this.show4 = false;
    },
    show33(){
      this.show1 = true;
      this.show2 = false;
      this.show3 = false;
      this.show4 = true;
    }, 
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
}
.el-icon-arrow-left {
  color: white;
  font-size: 0.3rem;
  float: left;
  margin-top: 0.01rem;
}
.sa {
  color: white;
  font-size: 0.3rem;
  z-index: 5;
}
.div1{
  background: white;
  /* height: 500px; */
}
.divv1{
  width: 100%;
  background: white;
  padding-top: 0.3rem;
  display: flex;
}
.divl,.divr,.divll,.divrr{
  /* border: 1px solid black; */
  width: 50%;
  text-align: center;
  font-size: 0.25rem;
  line-height: 0.3rem;
  height: 0.4rem;
  padding-top: 0.1rem;
}
.divll span,.divrr span{
  color: blue;
  border-bottom: 2px solid blue;
}
.img{
  height: 0.15rem;
}
.red{
  font-size: 0.2rem;
  float: right;
  padding-right: 0.2rem;
  color: blue;
}
.san{
  font-size: 0.2rem;
  line-height: 0.2rem;
  margin-top:0.2rem; 
  color: black;
}
.zdiv{
  padding-top:1rem; 
  text-align: center;
}
.zdiv img{
  height: 1rem;
}
.p1{
  color: black;
  font-size: 0.2rem;
}
.b1{
  background: springgreen;
  color: white;
  height: 0.5rem;
  font-size: 0.1rem;
  width: 2rem;
  border-radius: 10px;
}
.zydiv{
  /* border: 2px solid black; */
  margin-top: .1rem;
  margin-left: 0.2rem;
}
.zysdiv{
  /* background: springgreen; */
  width: 82%;
  margin-right: 1rem;
  padding: 0.3rem;
  
}
.zys1{
  border-top: 3px dashed red;
  display: flex;
  width: 90%;
  padding: 0.2rem 0 0.2rem 0;
  margin-top: 0.2rem;  
  font-size: 0.1rem;  border-radius: 10px;

}
.zys11{
  border-right: 1px dashed gray;
  padding-right: 0.2rem;
  margin-right: 0.2rem;
}
.zys12{
  padding-right: 0.1rem;
  margin-right: 0.1rem;
}
.zys13{
  color: red;
}
.p{
  color: red;
}
.p span{
  font-size: .5rem;
}
.history{
  text-align: center;
  padding: 0.3rem 0 0.3rem 0;
}
.divvvv{
  position:fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  background: white;
}
.span{
  color: black;
}
.spannn{
  color: gray;
}

</style>
