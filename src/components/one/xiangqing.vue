<template>
<div>
    <div id="s1">
         <router-link :to="{path:'/neirongo/'+this.id}">
               <i style="color:white;font-size:0.3rem;float:left;margin-top:0.12rem;" class="el-icon-arrow-left"></i>
         </router-link>
       <span>商家详情</span>
    </div>
    </div>
</template>

<script>
export default {
    name:"xiangqing",
    data: () => ({
    id:"",  
  }),
  created(){
       this.id = this.$route.params.id;
  }
}
</script>

<style scoped>
      #s1{
        /* border: 1px solid black; */
        background: blue;
        height: 0.5rem;
        text-align: center;
        line-height: 0.5rem;
    }
    #s1 span{
         color:white;
         font-size: 0.2rem;
         font-weight: bold;
    }
</style>
