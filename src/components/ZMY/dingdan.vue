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
    },
    created(){
        let api = "https://elm.cangdu.org/bos/v2/users/9729132/orders?limit=10&offset=0";
        this.$http.get(api).then(data => {
            this.dat = data;
            console.log(this.dat);
        })
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
