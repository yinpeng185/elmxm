<template>
  <div>
           
  <foot></foot> 
 </div>
</template>

<script>
import foot from "../one/foot";

//创建组件
let Second = {
  //组件名
  name: "second"
};

//导出模块:组件必须是default
export default {
  Second,
  components: {
    foot
  }
};
</script>