<template>
    <div class="all">
        <header>
           <p @click="houtui()" class="luy">
               <i class="el-icon-arrow-left"></i>
           </p>
           <span>搜索地址</span>
       </header>
       <div class="div1">
           <input v-model="keyword" type="text" placeholder="请输入小区/写字楼/学校等">
           <button @click="ctss()" type="submit">提交</button>
       </div>
       <div class="ctss">
           <ul v-if="value" v-for="(xx, index) in xinxi" :key="index">
                <li @click="dizhi(index)">
                    <p>{{xx.name}}</p>
                    <p>{{xx.address}}</p>
                </li>
           </ul>
       </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            value: true,
            cid: "",
            xinxi: "",
            city: "",
            keyword: "",
            csxx: []
        }
    },
    created() {
        
    },
    methods:{
        houtui(){
            this.$router.push({path:"/zengdz"})
        },
        ctss(){
            let api = "https://elm.cangdu.org/v1/pois?city_id=32&keyword="+this.keyword+"&type=search";
        this.$http({
          method: 'get',
          url: api,
          withCredentials: true, // 默认的为false         
        }).then(data => {
            if(this.keyword == ""){
                alert("请输入内容!");
                this.down = true;
            }else{
                this.xinxi = data.data;
                console.log(this.xinxi);
            }    
        });
        },
        dizhi(index){
            this.$router.push({path:"/zengdz", query:{dz:this.xinxi[index].name}})
            console.log(this.xinxi[index].name);
        }
    }
}
</script>
    
<style scoped>
.all{
    width: 100%;
    position: absolute;
}
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
    .div1{
        text-align: center;
        background: white;
        height: 0.9rem;
        margin-top: 0.1rem;
        /* overflow: hidden; */
    }
    input{
        height: 30%;
        width: 90%;
        border: 1px solid gray;
        margin-top: 3%;
        background: lightgray;
        outline: none;
        font-size: 0.16rem;
    }
    button{
        width: 90%;
        height: 30%;
        background: blue;
        color: white;
        border: 1px solid blue;
        margin-top: 3%;
        outline: none;
        font-size: 0.16rem;
    }
    .ctss{
        background: white;
    }
    .ctss li{
        border: 1px solid gray;
    }
    .ctss li p{
        margin: 0.1rem 0;
        font-size: 0.16rem;
        color: black;
    }
</style>
