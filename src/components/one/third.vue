<template>
  <div>
           
           <foot></foot> 
 
 </div>
</template>

<script>
import foot from "../one/foot";

   //创建组件
   let Third = {
       //组件名
       name:"third"
   };

   //导出模块:组件必须是default
   export default{
  Third,
  components: {
    foot
  }
};
</script>