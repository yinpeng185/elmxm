 <template>
 <div>
  <div class="hello">
      <router-link to="/first">
          <i class="el-icon-arrow-left"></i>
      </router-link>
      <span class="span">我的</span>
      <div class="login">
        <router-link v-if="value" to="/denglu">
        <img class="qq" src="../../images/qq.png" alt="">
        <span class="login2">登录/注册</span>
        <p class="login3"> <i class="el-icon-mobile-phone"></i>暂无绑定手机号</p>
        <i class="el-icon-arrow-right el"></i>
        </router-link>
        <router-link v-else to="/my/profile">
        <img class="qq" src="../../images/qq.png" alt="">
        <span class="login2">{{username}}</span>
        <p class="login3"> <i class="el-icon-mobile-phone"></i>暂无绑定手机号</p>
        <i class="el-icon-arrow-right el"></i>
        </router-link>
      </div>
  </div>
  <div class="center">
     <div class="one">
     <router-link to="/my/balance">      
       <span class="yuan">0.00</span>
       <span>元</span>
       <p>我的余额</p>
       </router-link>
       </div>
     <div class="two">
     <router-link to="/my/benefit">        
       <span  class="ge">3</span>
       <span>个</span>
       <p>我的优惠</p>
       </router-link>
       </div>
     <div class="thr">
     <router-link to="/my/points">      
       <span  class="fen">0</span>
       <span>分</span>       
       <p>我的积分</p>
       </router-link>
       </div>
  </div>
<div class="er">
  <div>
   <router-link to="/dingdan">          
    <img src="../../images/bindphone.png" alt="">
    <span class="ooooo">我的订单</span>
    <i class="el-icon-arrow-right el-right"></i>
       </router-link>    
  </div>
  <div :plain="true" @click="open3">
    <img src="../../images/bindphone.png" alt="">    
    <span class="ooooo">积分商城</span>
    <i class="el-icon-arrow-right el-right"></i>
  </div>
  <div>
     <div @click="Vip">
    <img src="../../images/bindphone.png" alt="">
    <span class="ooooo">饿了么会员卡</span>
    <i class="el-icon-arrow-right el-ri"></i>
      </div>
  </div>
</div>

<div class="san">
  <router-link to="/service">  
   <div>
     <img src="../../images/bindphone.png" alt="">
     服务中心
     <i class="el-icon-arrow-right el-right"></i>
   </div>
  </router-link>
  
  <router-link to="/download">  
    <div>
       <img src="../../images/bindphone.png" alt="">
       下载饿了么APP 
       <i class="el-icon-arrow-right el-r"></i>
    </div>
  </router-link>
</div>
<foot></foot>
</div>
</template>

<script>
import foot from "../one/foot";
export default {
  name: "my",
  data() {
    return {
      value: true,
      username: ""
    };
  },
  created(){
    if(this.$store.state.username == undefined){
      this.value = true;
    }else{
      this.value = this.$store.state.value;
      this.username = this.$store.state.username;
    }    
  },
  components: {
    foot
  },
  methods: {
      open3() {
        this.$message({
          message: '该功能暂未开放！',
          type: 'warning'
        });
      },
      Vip(){
        if(this.$store.state.username == undefined){
            alert("请登录！")
        }else{
          this.$router.push({path:'/my/vipcard'});
        }
        
      }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
}

.er {
  margin-top: 80%;
  /* border: 1px solid black; */
}
.san {
  margin-top: 8%;
  /* border: 1px solid black; */
}
.el-right {
  margin-top: 2%;
  float: right;
  color: black;
}
.el-ri {
  margin-top: 2%;
  float: right;
  left: 57%;
}
.el-r {
  float: right;
  margin-top: 2%;
  left: 53%;
}
.ooooo{
  color: black;
}
.er div,
.san div {
  color: black;
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid gray;
  margin-bottom: 0.1rem;
}
.er div img,
.san div img {
  position: relative;
  left: 5px;
  top: 5px;
  margin-right: 5px;
}

div {
  /* border: 1px solid black; */
  color: white;
}
.yuan {
  font-size: 0.5rem;
  color: orange;
}
.ge {
  font-size: 0.5rem;
  color: red;
}
.fen {
  color: green;
  font-size: 0.5rem;
}
.hello {
  background: blue;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 25%;
  padding-top: 10px;
  text-align: center;

  /* border: 1px solid black;   */
}
.center {
  /* border: 1px solid red; */
  position: fixed;
  width: 100%;
  height: 15%;
  top: 26.5%;
  left: 0;
  display: flex;
  justify-content: space-around;
  list-style: none;
}
.center ul {
  border: 1px solid black;
  width: 100%;
}
.center ul li {
  border: 1px solid black;
}
.one,
.two,
.thr {
  color: black;
  text-align: center;
  padding-top: 3%;
}
.two {
  padding: 3% 7% 0 7%;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
}
.qq {
  width: 70px;
  margin: 30px;
  position: relative;
  left: -60px;
  top: 0px;
  /* border: 1px solid black; */
}
.login {
  width: 100%;
  height: 110px;
  /* border: 1px solid black;   */
  position: absolute;
  top: 0.4rem;
}
.login2 {
  position: relative;
  left: -75px;
  top: -80px;
  color: white;
}
.login3 {
  position: relative;
  left: 20px;
  color: white;
  top: -70px;
}
.span {
  color: white;
  font-size: 0.2rem;
  font-weight: bold;
  /* border: 1px solid black; */
  margin-right: 30px;
}
.el-icon-arrow-left {
  font-size: 0.2rem;
  float: left;
  color: white;
}
.el {
  color: white;
  position: relative;
  left: 130px;
  top: -130px;
}
</style>


