<template>
    <div>
        <div class="a1">
             <router-link :to="{path:'/neirongo/'+this.id}">
                 <i  style="color:white;font-size:0.18rem;" class="el-icon-arrow-left"></i>
             </router-link>
             <p style="color:white;font-size:0.18rem;">确认订单</p>
             <router-link to="/My">
                 <img class="a2" src="../img/04.png">
             </router-link>
        </div>

        <div class="a3">
            <router-link to="">
                  <p>
                      <span style="font-size:0.18rem; padding-left:0.1rem;">请添加一个收货地址</span>
                      
                      <i style="font-size:0.15rem; float:right;margin-top:0.22rem;margin-right:0.05rem;" class="el-icon-arrow-right"></i>
                      </p>   
                 
             </router-link>
        </div>

        <div class="a4">
            <div style="text-align: center;line-height: 0.6rem;">
             <p style="font-weight:bold;color:black;font-size:0.15rem;padding-left:0.1rem;">送达时间</p>
             </div>
             <div>
                 <p style="color:blue;padding:0.1rem;font-size:0.12rem">尽快送达|预计 01:35</p>
                 <span style="border:1px solid blue;color:white;background:blue;padding:0.02rem;font-size:0.12rem;float:right;margin-right:0.1rem;">蜂鸟专送</span>
             </div>
        </div>

        <div class="a5" style="border:1px solid lightgray;">
               <div style=" display: flex;justify-content: space-between;padding:0.05rem;border-bottom:1px solid lightgray">
                   <p style="font-size:0.18rem">支付方式</p>
                   <router-link to="">
                        <p style="color:gray;font-size:0.14rem">在线支付<i style="font-size:0.15rem;" class="el-icon-arrow-right"></i>
                        </p>                   
                   </router-link>
               </div>
               <div style=" display: flex;justify-content: space-between;padding:0.05rem;">
                    <p style="color:gray;font-size:0.14rem">红包</p>
                    <p style="color:gray;font-size:0.14rem">暂时只在饿了么APP中支持</p>
               </div>
        </div>

        <div class="a6" style="border:1px solid lightgray;display:flex;text-align: center;line-height: 0.3rem;height: 0.3rem;padding:0.1rem;">
             <img style="width:0.3rem" :src="'https://elm.cangdu.org/img/'+data.image_path" alt=""> 
             <p style="font-size:0.15rem;color:black;">{{data.name}}</p>
        </div>

        <div class="a7" style="border:1px solid lightgray;">

            <ul>
                 <li v-for="(item,index) in ss" :key="index" style="padding:0.05rem;">
                     <span style="font-size:0.14rem;">{{item.name}}</span>
                     <div style="float:right;margin-top:0.05rem;margin-right:0.05rem;">
                          <span style="font-size:0.14rem;color:red;">x{{item.count}}</span>
                          <span style="font-size:0.14rem;">￥{{item.price}}</span>
                    </div>
                 </li>
            </ul>

            <div style="padding:0.05rem;">
                <span style="font-size:0.14rem;">餐盒</span>
                <span style="font-size:0.14rem;float:right;margin-top:0.05rem;margin-right:0.05rem;">￥26755</span>
            </div>
            <div style="padding:0.05rem;">
                <span style="font-size:0.14rem;">配送费</span>
                <span style="font-size:0.14rem;float:right;margin-top:0.05rem;margin-right:0.05rem;">￥4</span>
            </div>
            <div style="padding:0.05rem;">
                <span style="font-size:0.14rem;">订单￥26819</span>
                <span style="color:red;font-size:0.14rem;float:right;margin-top:0.05rem;margin-right:0.2rem;">待支付</span>
            </div>
            <div style="padding:0.05rem;">
                <span style="color:red;font-size:0.14rem; padding-left:80%">￥26819</span>
            </div>
        </div>

        <div class="a7" style="border:1px solid lightgray;padding:0.1rem;">
            <router-link to="">
                <span style="color:gray;font-size:0.18rem;">订单备注</span>
                <i style="color:gray;font-size:0.14rem;float:right;margin-top:0.05rem;margin-right:0.05rem;" class="el-icon-arrow-right"></i>
            </router-link>
        </div>

        <div class="a8" style="border:1px solid lightgray;padding:0.1rem;">
            <router-link to="">
                <span style="color:gray;font-size:0.18rem;">发票抬头</span>
                <i  style="color:gray;font-size:0.14rem;float:right;margin-top:0.05rem;margin-right:0.05rem;" class="el-icon-arrow-right"></i>
            </router-link>
        </div>
        
        <div class="a9" style="border:1px solid lightgray;">
            <span style="font-size:0.15rem;color:white;float:left;margin-top:0.15rem;margin-left:0.05rem;">待支付￥26819</span>
            <router-link to="">
                <button style="padding:0.1rem;font-size:0.15rem;color:white;background:green;float:right;">确认下单</button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:"makesure",
    data: () => ({
    id:"",  
    data:[],
  }),
  created(){
       this.id = this.$route.params.id;
        let api =
      "https://elm.cangdu.org/shopping/restaurant/"+this.id;

    this.$http.get(api).then(data => {      
      this.data = data.data;   
    });
  },
  computed:{
      ss(){
          return this.$store.state.ss;
      }
  }
}
</script>

<style scoped>
.a1{
    background: blue;
    border:1px solid lightgray;
    display: flex;
    justify-content: space-around;
    padding: 0.1rem;
    position: fixed;
    width:100%;
    height: 0.2rem;
    
}
.a2{
     width: 0.2rem;
     height: 0.2rem;
}
.a3{
    padding-top:0.4rem; 
    border:1px solid lightgray;
    height: 0.6rem;
    line-height: 0.6rem;
}
.a4{
    display: flex;
    justify-content: space-between;
     border:1px solid lightgray;
    height: 0.6rem;
    /* line-height: 0.6rem; */
}
.a9{
    position: fixed;
    left:0;
    bottom: 0;
    width: 100%;
    background: black;
}
</style>
