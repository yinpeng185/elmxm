<template>
    <div>
       <header>
           <router-link class="luy" :to="{name:'first'}">V</router-link>
           <span>搜索</span>
       </header>
       <div class="div1">
           <input type="text" placeholder="请输入商家或美食名称">
           <button type="submit">提交</button>
       </div>
       <foot></foot>
    </div>
</template>

<script>

import foot from '../one/foot'

export default {
  name: "sousuo",
  components:{
      foot
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
        font-size: 0.16rem;
    }
    span{
        display: inline-block;
        margin: 4% 0;
        font-size: 0.16rem;
        color: white;
    }
    .div1{
        text-align: center;
        height: 0.6rem;
        overflow: hidden;
    }
    input{
        height: 62%;
        width: 70%;
        border: 1px solid gray;
        margin-top: 3%;
        background: white;
        padding-left: 0.1rem;
        font-size: 0.16rem;
    }
    button{
        width: 20%;
        height: 64%;
        background: blue;
        color: white;
        border: 1px solid blue;
        margin-top: 3%;
        vertical-align: top;
        font-size: 0.16rem;
    }
</style>
