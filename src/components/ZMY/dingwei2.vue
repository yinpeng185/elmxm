<template>
    <div class="all">
        <header>
           <router-link class="luy" :to="{name:'first'}">V</router-link>
           <span>{{city.name}}</span>
           <router-link to="/dingwei">
            <span class="i2">切换城市</span>
           </router-link>
       </header>
       <div class="div1">
           <input v-model="keyword" type="text" placeholder="输入学校、商务楼、地址">
           <button @click="ctss()" type="submit">提交</button>
       </div>
       <div v-if="value" class="ctss">
           <ul v-for="(xx, index) in xinxi" :key="index">
                <li @click="dizhi(index)">
                    <p>{{xx.name}}</p>
                    <p>{{xx.address}}</p>
                </li>
           </ul>
       </div>
       <div v-if="down" class="lsjl">
           <p>搜索历史</p>
           <ul>
               <li v-for="(csx,index) in csxx" :key="index">
                   <p v-for="(cs,index) in csx" :key="index">{{cs}}</p>
               </li>
               <li @click="tingzhi()">清楚记录</li>
           </ul>
       </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            value: false,
            down: false,
            cid: "",
            xinxi: "",
            city: "",
            keyword: "",
            lishi: [],
            csxx: [],
            quan: []
        }
    },
    created() {
        if(this.$store.state.dz == undefined){
            this.csxx = [];
        }else{
            this.csxx = this.$store.state.dz;
        }

        if(this.csxx.length !== 0){
            this.down = true;
        }
        
        this.cid = this.$route.params.id;
        let cityy = "https://elm.cangdu.org/v1/cities/"+this.cid;
        this.$http.get(cityy).then(data => { 
        this.city = data.data;
    })
    },
    methods:{
        ctss(){
            this.value = true;
            this.down = false;
            let api = "https://elm.cangdu.org/v1/pois?city_id="+this.cid+"&keyword="+this.keyword+"&type=search";
        this.$http({
          method: 'get',
          url: api,
          withCredentials: true, // 默认的为false         
        }).then(data => {
            if(this.keyword == ""){
                alert("请输入内容!");
            }else{
                this.xinxi = data.data;
            }    
        });
        },
        dizhi(index){
             this.quan.push(this.xinxi[index].name,this.xinxi[index].address);
             if(this.csxx.join('').indexOf(this.quan) == -1){
                 this.csxx.unshift(this.quan);
             }            
             this.$store.commit("dizhicz", this.csxx);
             this.$router.push({path:"/first"});
        },
        tingzhi() {
            this.down = false;
            this.csxx = undefined;
            this.$store.commit("dizhicz", this.csxx);
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
        transform: rotateZ(90deg);
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
    .lsjl{
        font-size: 0.18rem;
        padding: 0 3%;
        background: white;
    }
    .lsjl li{
        color: black;
        margin: 0.15rem 0;
        border-bottom: 1px solid black;
    }
    .lsjl li p{
        margin: 0.1rem 0;
    }
    .lsjl li:first-child{
        margin: 0.1rem 0;
    }
    .lsjl li:last-child{
        text-align: center;
        padding-bottom: 0.1rem; 
    }
</style>
