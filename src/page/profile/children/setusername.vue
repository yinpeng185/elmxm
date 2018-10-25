<template>
<div>
    <div class="hello">
         <router-link to="/my/profile"><i class="el-icon-arrow-left"></i></router-link>
         <span class="span">修改用户名</span>
    </div>
    <div class="two">
        <input type="text" placeholder="输入用户名">
        <p>用户名只能修改一次（5-24字符之间）</p>
        <button>确认修改</button>
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
.two{
    color: black;
    position: relative;
    top: 0.5rem;
}
.two input{
    border: 1px solid gray;
    height: 30px;
    line-height: 30px;
    margin-left: 10%;
}
.two p{
    height: 30px;
    line-height: 30px;
    margin-left: 10%;
    font-size: 0.1rem;
    color: gray;
}
button{
    color: white;
    background: blue ;
    border:none;
    width: 3rem;
    height: 0.5rem;
    font-size: 0.2rem;
    margin: 0.2rem 0 0rem .5rem ;
}


</style>
