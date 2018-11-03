<template>
<div class="wrap">
     <div class="hello">
         <router-link to="/MY"><i class="el-icon-arrow-left"></i></router-link>
         <span class="span">账户信息</span>
    </div> 
  <div class="center"> 
    <div class="one">
        <div class="one1">
            <span class="onep1">头像</span>
            <img src="../../images/qq.png" alt="">
            <i class="el-icon-arrow-right"></i>
        </div>
        <div class="one2">
            <router-link to="/my/profile/setusername">
            <span class="onep2">用户名</span> 
            <input type="text" :value="name" class="name">
            <i class="el-icon-arrow-right"></i> 
            </router-link>          
        </div>
        <router-link to="/shouhdz">
        <div class="one3">           
            <span class="onep3">收货地址</span>   
            <i class="el-icon-arrow-right"></i>                                                
        </div>
        </router-link>
    </div>
    <p class="bd">账号绑定</p>
    <div class="two" @click="open12">
        <div class="two1">
            <img src="../../images/bindphone.png" alt="">
            <span>手机</span>
            <i class="el-icon-arrow-right"></i>            
        </div>
    </div>
    <p class="bd">安全设置</p>
    <div class="thre"> 
        <div @click="gai()" class="thre1">
            <span>登录密码</span>
            <span class="sp">修改</span>          
            <i class="el-icon-arrow-right"></i>                        
        </div>
    </div>
    <button @click="tuichu()">退出登录</button>
  </div>  
</div>
</template>

<script>
export default {
    data(){
        return{
            name: ""
        }
    },
    created(){
        this.name = this.$store.state.username;
    },
    methods: {
      open12() {
        this.$notify({
          title: '！',
          dangerouslyUseHTMLString: true,
          message: '<strong>请在手机APP中设置</strong>'
        });
      },
      tuichu(name){
          let api = "https://elm.cangdu.org/v2/signout";
          this.$http.get(api).then(data => {
              alert(data.data.message);
              this.$router.push({path:"/first"})
              this.$store.commit("saveuser", name=undefined); 
          })         
      },
      gai(){
          this.$router.push({path:"/change", query:{name:this.$store.state.username}});
      }
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
h1{
  position: relative;
  top: 0.5rem;
}
.center{
    /* border: 1px solid red; */
    position: relative;
    top: 0.5rem;
}
.one{
    /* border: 2px solid blue; */
    border-top: 2px solid gray; 
}
.one1{
    height: .7rem;
    line-height:.7rem;
}
.one1 img{
    width: .5rem;
    position: relative;
    top: 15%;
    left: 60%;
}
.one1 i{
    color: black;
    font-size: .3rem;
    float: right;
    margin-top: 7%;
}
.name{
    color: black;
    position: relative;
    left: 20%;
    width: 150px;
    height: 30px;
    font-size: 30px;
    line-height: 30px;
}
.one2 i{
    color: black;
    font-size: .3rem;
    float: right;
    margin-top: 3%;
}
.one3 i{
    color: black;
    font-size: .3rem;
    float: right;
    margin-top: 3%;
}
.one2,.one3{
    height: .5rem;
    line-height:.5rem;
}
.one1,.one2,.one3{
    border-bottom:2px solid gray; 
    padding-left: 7%;
}
.onep1,.onep2,.onep3{
    color: black;
    font-size: .2rem;
}
.two1{
    border-top:2px solid gray; 
    border-bottom:2px solid gray; 
    padding-left: 7%;
    line-height:.5rem;
    height: .5rem;    
}
.two1 span{
    color: black;
    font-size: .2rem;
}
.two1 i{
    color: black;
    font-size: .3rem;    
    float: right;
    margin-top: 3%;
}
.thre1{
    border-top:2px solid gray; 
    border-bottom:2px solid gray; 
    padding-left: 7%;
    line-height:.5rem;
    height: .5rem;    
}
.thre1 span{
    color: black;
    font-size: .2rem;
}
.sp{
    color: black;
    position: relative;
    font-size: .3rem;
    left: 50%
}
.thre1 i{
    color: black;
    font-size: .3rem;
    float: right;
    margin-top: 3%;
}
button{
        color: white;
    background: red ;
    border:none;
    width: 2rem;
    height: 0.5rem;
    font-size: 0.2rem;
    margin: 0.5rem 0 1rem 1rem ;
    border-radius: 10%
}
</style>
