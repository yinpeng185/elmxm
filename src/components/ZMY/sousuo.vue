<template>
    <div>
       <header>
           <router-link class="luy" :to="{name:'first'}">V</router-link>
           <span>搜索</span>
       </header>
       <div class="div1">
           <input @keyup="ip()" v-model="txt" type="text" placeholder="请输入商家或美食名称">
           <button @click="SS()" type="submit">提交</button>
       </div>
       <div class="d1" v-if="value1">
          <ul>
              <p>历史记录</p>
              <li @click="lishi(index)" v-for="(jl, index) in arr" :key="index">{{jl}}</li>
              <li @click="tingzhi()">清楚历史记录</li>
          </ul>
       </div>
       <div class="d2" v-if="value2">
           <p>很抱歉,没有找到该商品!</p>  
       </div>
       <foot></foot>
    </div>
</template>

<script>

import foot from '../one/foot'

export default {
  name: "sousuo",
  data(){
      return{
          value1: false,
          value2: false,
          arr: [],
          txt: ""
      }
  },
  created(){
      if(this.$store.state.ssls == undefined){
          this.arr = [];
      }else{
          this.arr = this.$store.state.ssls;
      }      
      if(this.arr.length >= 2){
          this.value2 = false;
          this.value1 = true;
      }
  },
  components:{
      foot
  },
  methods:{
      ip(){  
          if(this.txt == "" &&  this.arr.length >= 1){
              this.value1 = true;
              this.value2 = false;
          }
      },
      SS(arr){
          this.value1 = false;
          this.value2 = true;
          if(this.txt !== "" && this.arr.join('').indexOf(this.txt) == -1){     
            this.arr.push(this.txt);
          }
          this.$store.commit("sousuols", this.arr);
      },
      tingzhi(arr) {
          this.value1 = false;
          this.arr = [];
          this.$store.commit("sousuols", this.arr);
      },
      lishi(index){
          this.txt = this.arr[index];
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
        /* height: 0.5rem; */
        overflow: hidden;
        background: white;
    }
    input{
        height: 0.42rem;
        width: 70%;
        border: 1px solid gray;
        margin-top: 3%;
        background: white;
        padding-left: 0.1rem;
        font-size: 0.16rem;
    }
    button{
        width: 20%;
        height: 0.43rem;
        background: blue;
        color: white;
        border: 1px solid blue;
        margin-top: 3%;
        vertical-align: top;
        font-size: 0.16rem;
    }
    .d2{
        background: white;
        text-align: center;
        overflow: hidden;
    }
    .d2 p{
        margin: 0.2rem 0;
    }
    .d1{
        background: white;
        overflow: hidden;
        padding: 0 5%;
    }
    .d1 p{
        font-size: 0.24rem;
        margin: 0.1rem 0;
        font-weight: bold;
    }
    .d1 li{
        font-size: 0.2rem;
        padding: 0.1rem 0;
        border-bottom: 0.01rem solid gray;
    }
    .d1 li:first-child{
        font-weight: bold;
    }
    .d1 li:last-child{
        text-align: center;
        font-weight: bold;
    }
</style>
