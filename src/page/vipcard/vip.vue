<template>
<div class="wrap">
     <div class="hello">
         <router-link to="/MY"><i class="el-icon-arrow-left"></i></router-link>
         <span class="span">会员中心</span>
    </div>
</div>
</template>

<script>
export default {
  }
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.hello {
  background: blue;
  text-align: center;
  /* height: 2rem; */
  width: 100%;
  /* border: 5px solid black; */
  position: fixed;
  z-index: 5;
  overflow: hidden;
}
.bd{
    padding-top: 5%;
    padding-bottom: 5%;
    padding-left: 3%;
}
.el-icon-arrow-left {
  color: white;
  font-size: 0.3rem;
  float: left;
  margin-top: 0.01rem;
}
.span {
  color: white;
  font-size: 0.3rem;
  z-index: 5;
}
</style>
