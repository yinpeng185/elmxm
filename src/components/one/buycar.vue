<template>
   <div class="buycar" >
       <div v-if="buy" class="top">
           <div class="top1">
               <span>购物车</span>
               <span @click="xxx" class="span1"><img src="../../images/bindphone.png" alt="">清空</span></div>
           <div class="list">
               <ul v-for="(item,index) in ss" :key="index">
                   <li>
                       <span>{{item.name}}</span> 
                       <span class="listr">
                       <span class="money">${{item.price}}</span>
                       <i class="el-icon-remove-outline"></i> 
                       1
                       <i class="el-icon-circle-plus"></i>
                       </span>
                   </li>
               </ul>
           </div>
       </div>
       <div class="bottom" @click="xx">
           <div class="buy">
               <img src="../img/buy.png" alt="">
           </div>
           <div>
               <p class="pay1">${{$store.state.price}}.00</p>
               <p class="pay2">配送费￥5</p>
           </div>
           <div>
               <router-link to="">
               <button class="button">去结算</button>
               </router-link>
           </div>
       </div>
   </div>
</template>

<script>
export default {
   data(){
    return{
   
      buy:false,
    }
  },
  methods:{
    xx(){
     this.buy = !this.buy;
    }, 
    xxx(){
    this.buy =false
    }, 
  },
  computed:{
      ss(){
          return this.$store.state.ss;
      }
      
  }
}
</script>

<style scoped>
.buycar{
    position: fixed;
    bottom: 0;
    width: 100%;
    left: 0;
    z-index:100;
}
.bottom{
    display: flex;
    justify-content: space-between;
}
.top1{
    background: lightgray;
    font-size: 0.25rem;
    line-height: 0.3rem;
    padding:  0.1rem 0.2rem 0.1rem 0.2rem;
}
.span1{
    float: right;
}
.list{
    background: white;
    padding:  0.2rem 0.2rem 0.3rem 0.2rem;
}
.listr{
    float: right;
}
.money{
    padding: 0 0.3rem 0 0.3rem ;
}
.bottom{
    width: 100%;
    background: black;
}
.button{
    background: springgreen;
    width: 1rem;
    height: 100%;
    color: white;
    font-size: 0.25rem;
    font-weight: bold;
}
.buy{
    padding: 0 0rem 0 0.1rem ;
}
.buy img{
    border-radius: 50%;
}
.pay1{
    color: white;
    font-weight: bold;
    padding: 0.1rem 0 0.1rem 0;
}
.pay2{
    color: white;
    font-size: 0.1rem;
}

</style>
