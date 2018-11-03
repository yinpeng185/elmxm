<template>
    <div>
        <div class="a1">
             <router-link :to="{path:'/neirongo/'+this.id}">
                 <i  style="color:white;font-size:0.15rem;" class="el-icon-arrow-left"></i>
             </router-link>
             <p style="color:white;font-size:0.15rem;">确认订单</p>
             <router-link to="/My">
                 <img class="a2" src="../img/04.png">
             </router-link>
        </div>

        <div class="a3">
            <router-link to="">
                  <p style="font-size:0.12rem">请添加一个收货地址</p>   
                 <i style="font-size:0.15rem;" class="el-icon-arrow-right"></i>
             </router-link>
        </div>

        <div class="a4">
            <div style="text-align: center;line-height: 0.6rem;">
             <p style="font-weight:bold;color:black;font-size:0.15rem">送达时间</p>
             </div>
             <div>
                 <p style="color:blue;padding:0.1rem;font-size:0.12rem">尽快送达|预计 01:35</p>
                 <span style="border:1px solid blue;color:white;background:blue;padding:0.02rem;font-size:0.12rem;float:right;margin-right:0.1rem;">蜂鸟专送</span>
             </div>
        </div>

        <div class="a5" style="border:1px solid black;">
               <div style=" display: flex;justify-content: space-between;padding:0.05rem;border-bottom:1px solid lightgray">
                   <p style="font-size:0.15rem">支付方式</p>
                   <router-link to="">
                        <p style="color:gray;font-size:0.12rem">在线支付<i style="font-size:0.15rem;" class="el-icon-arrow-right"></i>
                        </p>                   
                   </router-link>
               </div>
               <div style=" display: flex;justify-content: space-between;padding:0.05rem;">
                    <p style="color:gray;font-size:0.12rem">红包</p>
                    <p style="color:gray;font-size:0.12rem">暂时只在饿了么APP中支持</p>
               </div>
        </div>

        <div class="a6" style="border:1px solid black;display:flex;text-align: center;line-height: 0.3rem;height: 0.3rem;"> 
             <img style="width:0.3rem ;height:0.3rem" src="../../images/elmlogo.jpeg" alt=""> 
             <p>1231233212321</p>
        </div>

        

    </div>
</template>

<script>
export default {
    name:"makesure",
    data: () => ({
    id:"",  
  }),
  created(){
       this.id = this.$route.params.id;
  }
}
</script>

<style scoped>
.a1{
    background: blue;
    border:1px solid black;
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
    display: flex;
    justify-content: space-between;
    border:1px solid black;
    height: 0.6rem;
    line-height: 0.6rem;
}
.a4{
    display: flex;
    justify-content: space-between;
     border:1px solid black;
    height: 0.6rem;
    /* line-height: 0.6rem; */
}
</style>
