<template>
    <div>
        <header>
           <router-link class="luy" :to="{name:'first'}">V</router-link>
           <span>订单列表</span>
       </header>
       <router-view></router-view>
       <foot></foot>
    </div>
</template>

<script>

import foot from '../one/foot'

export default {
    name: "dingdan",
    components:{
        foot
    }
}
</script>

<style scoped>
    header{
        background: blue;
        text-align: center;
        overflow: hidden;
        padding: 0 5%;
    }
    .luy{
        float: left;
        margin: 4% 0 0;
        color: white;
        text-decoration: none;
        transform: rotateZ(90deg);
    }
    span{
        display: inline-block;
        margin: 4% 0;
        color: white;
    }
</style>
