<template>
<div>
    <div class="hello">
         <router-link to="/my"><i class="el-icon-arrow-left"></i></router-link>
         <span class="span">我的红包</span>
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
    // show44(){
    //   show4 = false;
    // }
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
.span {
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
  font-size: 0.2rem;
  width: 2rem;
  border-radius: 10px;
}
.zydiv{
  border: 2px solid black;
  margin-top: .1rem;
}
</style>
