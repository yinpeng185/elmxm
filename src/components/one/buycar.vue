<template>
   <div class="buycar" >
       <div v-if="buy" class="top">
           <div class="top1">
               <span>购物车</span>
               <span @click="qk" class="span1"><img src="../../images/bindphone.png" alt="">清空</span></div>
           <div class="list">
               <ul v-for="(item,index) in ss" :key="index">
                   <li>
                       <span>{{item.name}}</span> 
                       <span class="listr">
                       <span class="money">${{item.price}}</span>
                       <i class="el-icon-remove-outline" @click="app(item)"></i> 
                       {{item.count}}
                       <i class="el-icon-circle-plus"  @click="add(item)"></i>
                       </span>
                   </li>
               </ul>
           </div>
       </div>
       <div class="bottom" >
           <div class="bottoml" @click="xx">
           <div class="buy">
               <img src="../img/buy.png" alt="">
           </div>
           <div>
               <p class="pay1">${{$store.state.price}}.00</p>
               <p class="pay2">配送费￥5</p>
           </div>
           </div>
           <div>
               <router-link :to='"/makesure/"+this.id'>
               <button v-if="qw" class="button">去结算</button>
               <button v-else class="btn">去结算</button>
               </router-link>
           </div>
       </div>
   </div>
</template>

<script>
export default {
    props:{
        id:{
            type:String,
        }
    },
   data(){
    return{
      oo:null,
      buy:false,
    }
  },
  methods:{
    add(a) {
      this.$store.commit("add", a);
    },
    app(id) {
      this.$store.commit("app", id);
      console.log(this.$store.state.ss);      
    },
    xx(){
     this.buy = !this.buy;
    }, 
    qk(){
    this.buy =false
    this.$store.commit("qk");
    }, 
  },
  computed:{
      ss(){
          return this.$store.state.ss;
      },
      qw(){
       this.$store.commit("qw")
       return  this.$store.state.oo
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
    /* background: red; */
}
.bottoml{
    /* border: 1px solid red; */
    background: black;
    display: flex;
    /* justify-content: space-between; */
    width: 100%;
    
}
.button{
    background: springgreen;
    width: 1rem;
    height: 100%;
    color: white;
    font-size: 0.25rem;
    font-weight: bold;
}
.btn{
    background: gray;
    width: 1rem;
    height: 100%;
    color: white;
    font-size: 0.25rem;
    font-weight: bold;
}
.buy{
    /* border: 1px solid red; */
    padding: 0 0.5rem 0 0.1rem ;
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
