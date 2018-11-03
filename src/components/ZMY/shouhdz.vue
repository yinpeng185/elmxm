<template>
    <div>
        <header>
            <p class="luy">
                <router-link to="/my/profile">
                    <i class="el-icon-arrow-left"></i>
                </router-link> 
           </p>
           <span>新增地址</span>
           <span class="i2">编辑</span>
        </header>
        <ul>
            <li @click="zeng" v-for="(dat,index) in data" :key="index">
                <p>{{dat[0]}}</p>
                <p>{{dat[1]}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            data: ""
        }
    },
    created(){
        this.data = this.$store.state.tianjiadz;
        console.log(this.data);
    },
    methods:{
        zeng(){
            this.$router.push({path:"/zengdz"})
        }
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
    }
    span{
        display: inline-block;
        margin: 5% 0;
        color: white;
    }
    .i2{
      width: 0.6rem;
      float: right;
      margin: 5% 0 5% 0;
      font-size: 0.14rem;
      color: white;
    }
    ul li{
        margin-top: 0.1rem;
        padding: 0 0.1rem;
        height: 0.5rem;
        line-height: 0.5rem;
        font-size: 0.2rem;
        border: 0.2px solid gray;
        /* overflow: hidden; */
    }
    ul li p:first-child{
        float: right;
    }
</style>
