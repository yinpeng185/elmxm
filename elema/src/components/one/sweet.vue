<template>
<div>
    <div id="big">
     <div id="s1">
         <router-link class="luy" :to="{name:'first'}">V</router-link>
       <p>{{id}}</p>
    </div>
<div id="all">
 <div id="s2">    
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        {{id}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>1</el-dropdown-item>
        <el-dropdown-item>2</el-dropdown-item>
        <el-dropdown-item>3</el-dropdown-item>
        <el-dropdown-item>4</el-dropdown-item>
        <el-dropdown-item>5</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
</div>
<div id="s3">
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        排序<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>6</el-dropdown-item>
        <el-dropdown-item>7</el-dropdown-item>
        <el-dropdown-item>8</el-dropdown-item>
        <el-dropdown-item>9</el-dropdown-item>
        <el-dropdown-item>10</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    </div>

<div id="s4">
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        筛选<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>11</el-dropdown-item>
        <el-dropdown-item>12</el-dropdown-item>
        <el-dropdown-item>13</el-dropdown-item>
        <el-dropdown-item>14</el-dropdown-item>
        <el-dropdown-item>15</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
</div>
</div>
</div>
<eat class="eat"></eat>

</div>
</template>

<script>
import eat from "../one/eat";

export default {
    name:"sweet",
     components: {
         eat,
  },

     created() {
        this.id = this.$route.query.id;
    }
    }
</script>

<style scoped>
.eat{
    position: relative;
    top: 0.6rem;
}
#big{
    position: fixed;
    width: 100%;
    z-index: 6;
}
    #s1{
        /* border: 1px solid black; */
        background: blue;
        height: 0.5rem;
        text-align: center;
        line-height: 0.5rem;
    }
    #s1 p{
         color:white;
         font-size: 0.2rem;
    }
    .luy {
  float: left;
  margin-left: 0.1rem;
  color: white;
  text-decoration: none;
  transform: rotateZ(90deg);
}
#all{
    display: flex;
    justify-content: space-between;
    width: 100%;
        border: 1px solid lightgray;
}
#s2,#s3,#s4{
    /* border: 1px solid black; */
    padding: 0.06rem;
    width: 30%;
    text-align: center;
    background: white;
}
#s2{
    border-right: 1px solid black; 
    /* height: 5px; */
}
#s4{
    border-left: 1px solid black; 
}
</style>
