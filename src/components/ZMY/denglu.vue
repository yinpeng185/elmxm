<template>
    <div class="all">
        <header>
           <router-link class="luy" :to="{path:'/first'}">
               <i class="el-icon-arrow-left"></i>
           </router-link>
           <span>密码登录</span>
       </header>
       <input class="ip1" v-model="username" type="text" placeholder="账号">
       <input v-if="value" v-model="password" class="ip2" type="text" placeholder="密码">
       <input v-else v-model="password" class="ip2" type="password" placeholder="密码">
        <el-switch class="bt"
  v-model="value"
  active-color="#13ce66"
  inactive-color="#ff4949" active-text="显示">
</el-switch>
       <input v-model="codeNumer" type="text" placeholder="验证码">
       <p>温馨提示：未注册过的账号，登录时将自动注册</p>
       <p>注册过的用户可凭账号密码登录</p>
       <button @click="login()" type="submit">登录</button>
       <!-- 在routerlink中使用query来传递数据,在其他vue文件中通过created接收方能使用
       this.命名参数 = this.$route.query;
       query:{id:work_task.id}
       -->
       <router-link class="p3" :to="{name: 'change'}">重置密码?</router-link>
       <div class="yanma">
         <img class="img1" :src="data.code" alt="">
         <div>
           <span>看不清</span>
           <span @click="huanma2()" class="sp">换一张</span>
         </div>         
       </div>
    </div>
</template>

<script>
export default {
  name: "denglu",
  data() {
    return {
      value: false,
      data: "",
      lujing: "/denglu",
      username: "",
      password: "",
      codeNumer: ""
    };
  },
  created() {
    this.huanma2();
  },
  methods:{
    huanma2(){
       let api =
      "https://elm.cangdu.org/v1/captchas";
    this.$http({
      method: 'post',
      url: api,
      withCredentials: true,        
    }).then(data => {
      this.data = data.data;
    })
    },
    login(username) {
        const api = "https://elm.cangdu.org/v2/login";
        this.$http({
          method: 'post',
          url: api,
          withCredentials: true, // 默认的
          data: {
            captcha_code: this.codeNumer,
            password: this.password,
            username: this.username
          },
        }).then(res => {
          if(res.data.status == null){
        alert("登陆成功");
        this.$router.push({path:"/first/"});
        //给vuex保存用户信息
        this.$store.commit("saveuser", this.username);
        // 使用localStorage本地存储数据
        // localStorage.setItem("username",res.data.username);
        //             .setItem(参数名,保存在该参数中的数据);
        //             .getItem(参数名)获取数据
        //             .removeItem(参数名)删除数据
        } else{
        alert(res.data.message);
        if(res.data.message == "密码错误"){
            this.password = "";
        }
        if(res.data.message == "验证码不正确"){
            this.codeNumer = "";
        }
        this.huanma2();
        }
        });
      }
  }
};
</script>

<style scoped>
header {
  background: blue;
  text-align: center;
  overflow: hidden;
  padding: 0 5%;
}
.luy {
  float: left;
  margin: 4% 0 0;
  color: white;
  text-decoration: none;
}
span {
  display: inline-block;
  margin: 3% 0;
  color: white;
}
input {
  width: 90%;
  height: 0.5rem;
  /* 取消聚焦 */
  outline: none;
  padding-left: 0.2rem;
  font-size: 0.16rem;
  border: 0;
}
.ip1 {
  margin-top: 4%;
}
.ip2 {
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  /* overflow: hidden; */
}
p {
  margin-top: 2%;
  font-size: 0.12rem;
  color: red;
  padding-left: 1em;
  margin-bottom: 0.1rem;
}
.p3 {
  float: right;
  margin-right: 3%;
  font-size: 0.15rem;
  color: blue;
  margin-top: 0;
  text-decoration: none;
}
button {
  width: 94%;
  height: 0.5rem;
  margin-left: 3%;
  border-radius: 5px;
  background: springgreen;
  font-size: 0.18rem;
  color: white;
  outline: none;
  border: 0;
  margin-bottom: 0.2rem;
}
.bt{
    float: right;
    margin-top: -0.33rem;
    margin-right: 5%;
    height: 0.2rem;
}
.yanma{
  width: 1rem;
  height: 0.3rem;
  position: relative;
  top: -1.6rem;
  left: 2.5rem;
  font-size: 0.12rem;
}
.img1{
  width: 0.6rem;
  height: 0.3rem;
}
.yanma div{
  float: right;
  width: 0.4rem;
}
.yanma div span{
  width: 0.5rem;
  font-size: 0.15rem;
  color: black;
  margin: 0;
}
.yanma div .sp{
  color: blue;
}
</style>
