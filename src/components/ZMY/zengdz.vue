<template>
    <div class="all">
        <header>
           <router-link class="luy" :to="{name:'shouhdz'}">
             <i class="el-icon-arrow-left"></i>
           </router-link>
           <span>新增地址</span>
       </header>
       <input v-model="name" class="ip" type="text" placeholder="请填写你的姓名">
       <input v-model="dz" @click="xuanze" class="ip1" type="text" placeholder="小区/写字楼/学校等">
       <input type="text" placeholder="请填写详细送餐地址">
       <input v-model="phone" class="ip1" type="text" placeholder="请填写能够联系到您的手机号">
       <input class="ip2" type="text" placeholder="备用联系电话(选填)">     
       <button @click="adddz()" type="submit">新增地址</button>
    </div>
</template>

<script>
export default {
    name: "change",
    data() {
    return {
      code: "",
      data: "",
      name: "",
      phone: "",
      dz: "",
      quan: []
    };
  },created() {
      this.dz = this.$route.query.dz;
  },
  methods:{
     xuanze(){
        this.$router.push({path:"/xuandz"})
     },
     adddz(){
        this.quan.unshift(this.phone,this.name);
        this.$store.commit("dizhiz", this.quan);
        this.$router.push({path:"/shouhdz"})
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
