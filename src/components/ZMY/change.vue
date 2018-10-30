<template>
    <div class="all">
        <header>
           <router-link class="luy" :to="{name:'denglu'}">V</router-link>
           <span>修改密码</span>
       </header>
       <input v-model="username" class="ip" type="text" placeholder="账号">
       <input v-model="oldpw" class="ip1" type="text" placeholder="旧密码">
       <input v-model="newpw" type="text" placeholder="请输入新密码">
       <input v-model="confirmpw" class="ip1" type="text" placeholder="请确认新密码">
       <input v-model="codeNumer" class="ip2" type="text" placeholder="验证码">     
       <button @click="changepw()" type="submit">确认修改</button>
       <div class="yanma">
         <img :src="code" alt="">
         <div>
           <span>看不清</span>
           <span @click="huanma2()" class="sp">换一张</span>
         </div>         
       </div>
    </div>
</template>

<script>
export default {
    name: "change",
    data() {
    return {
      code: "",
      data: "",
      username: "",
      oldpw: "",
      newpw: "",
      confirmpw: "",
      codeNumer: ""
    };
  },created() {
    this.username = this.$route.query.name;
    this.huanma2();
  },
  methods:{
    huanma2() {
        const url = "https://elm.cangdu.org/v1/captchas";
        // ----------------------------------
        this.$http({
          method: 'post',
          url: url,
//https://developer.mozilla.org/zh-CN/docs/Web/API/Request/credentials
        //用于表示用户代理是否应该在跨域请求的情况下从其他域发送cookies。
          withCredentials: true, // 默认false
        }).then((data) => {
            this.code = data.data.code;
        });
      },
    changepw(){
      const url = "https://elm.cangdu.org/v2/changepassword";
      this.$http({
        method: 'post',
        url: url,
        withCredentials: true,
        data: {
            captcha_code: this.codeNumer,
            oldpassWord: this.oldpw,
            newpassword: this.newpw,
            username: this.username,
            confirmpassword: this.confirmpw
          }
      }).then((data) => {
          this.data = data.data;
          if(this.data.status == 0){
            alert(this.data.message);
            this.huanma2();
          }else{
            alert(this.data.success);
          }
          
      });
    }
  }
}
</script>

<style scoped>
    header{
        background: blue;
        text-align: center;
        overflow: hidden;
        padding: 0 5%;
    }
    .luy{
        float: left;
        margin: 4% 0 0;
        color: white;
        text-decoration: none;
        transform: rotateZ(90deg);
    }
    span{
        display: inline-block;
        margin: 4% 0;
        color: white;
    }
input {
  width: 100%;
  height: 0.5rem;
  /* 取消聚焦 */
  outline: none;
  padding-left: 0.2rem;
  font-size: 0.16rem;
  border: 0;
}
button {
  width: 94%;
  height: 0.5rem;
  margin-left: 3%;
  border-radius: 5px;
  background: green;
  font-size: 0.18rem;
  color: white;
  outline: none;
  border: 0;
  margin-bottom: 0.2rem;
}
.ip{
    margin-top: 0.1rem;
}
.ip1{
    border-top: .5px solid black;
    border-bottom: .5px solid black;
}
.ip2{
    margin-bottom: 0.2rem;
}
.yanma{
  width: 1.2rem;
  position: relative;
  top: -1.3rem;
  left: 60%;
  font-size: 0.12rem;
}
.yanma img{
  width: 0.8rem;
  height: 0.3rem;
}
.yanma div{
  float: right;
  width: 0.4rem;
}
.yanma div span{
  color: black;
  width: 0.5rem;
  margin-top: 3%;
}
.yanma div .sp{
  color: blue;
}
</style>
