<template>
 <div>

    <div id="big">
     <div id="s1">
         <router-link class="luy" :to="{name:'first'}">V</router-link>
       <p>{{id}}</p>
    </div>

 <div id="ss">

     <div id="s2" @click="change()">    
         <span>{{old}}<i class="el-icon-arrow-down el-icon--right"></i> </span>  
  </div>  
    <div id="s3" @click="change1()">
      <span >
        排序<i class="el-icon-arrow-down el-icon--right"></i>
      </span>     
    </div>
    <div id="s4" @click="change2()">   
      <span >
        筛选<i class="el-icon-arrow-down el-icon--right"></i>
      </span>    
      </div>
 </div>

<div id="aa" v-if="show">
 <div id="a1">
     <ul>
         <li class="v1" v-for="(k,index) in arr" :key="index" @click="add(index)"> 
              <img class="img" src="https://fuss10.elemecdn.com/b/ff/533cf9617bd57fe1dfb05603bebcfpng.png"
              alt="">         
             {{k.name}}--{{k.count}}
             </li>
             
     </ul>
 </div>
<div id="a2">
     <ul>
          <li class="v1" v-for="value in data" :key="value.id">{{value.name}}--{{value.count}}</li>

     </ul>
 </div>
   </div> 

   <div id="bb" v-if="show1">
       <div id="b1">
           <ul>
               <li class="b6" v-for="vvv in datas" :key="vvv.id">
                    <img class="img" src="https://fuss10.elemecdn.com/b/ff/533cf9617bd57fe1dfb05603bebcfpng.png"
              alt="">  
                   {{vvv}}</li>
           </ul>
       </div>

       </div> 

       <div id="cc" v-if="show2">
       <div id="c1">
           <ul>
               
               <p class="c6">配送方式</p>
               <div class="c8">
               <li class="c7" v-for="vv in datass" :key="vv.id">
                   
                  <img class="img" src="https://fuss10.elemecdn.com/b/ff/533cf9617bd57fe1dfb05603bebcfpng.png"
              alt="">   
                   {{vv.text}}</li>
                   </div>
              
           </ul>
          <ul>   
              <p class="c6">商家属性（可以多选）</p>
              <div class="dd">
                  <li class="d7" v-for="vvvv in datasss" :key="vvvv.id">          
                  <img class="img" src="https://fuss10.elemecdn.com/b/ff/533cf9617bd57fe1dfb05603bebcfpng.png"
              alt="">   
                   {{vvvv}}</li>
          </div>
         </ul>
       </div>

       <div class="ee">
               <button class="e1">清空</button>
               <button class="e2">确定</button>
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
   data: () => ({
    data: [],
    datas:["智能排序","距离最近","销量最高","起送价最低","配送速度最快","评分最高"],
    datass:[],
    datasss:["品牌商家","外卖保","准时达","新店","在线支付","开发票"],
    arr:[],
    show:false,
    show1:false,
    show2:false,
    }),

     created() {
        this.id = this.$route.query.id;
        this.old = this.$route.query.id;
        let api =
      "https://elm.cangdu.org/shopping/v2/restaurant/category";
    //promise写法
    this.$http.get(api).then(data => {
         //成功后的回调
        console.log('成功了---');
        //展示所有商店
        console.log(data.data);
      this.arr = data.data;
    });
    let apii = "https://elm.cangdu.org/shopping/v1/restaurants/delivery_modes";
    this.$http.get(apii).then(data => {
      this.datass = data.data;
    });
    },
    methods:{
        add(index){
        this.data=this.arr[index].sub_categories;
        console.log(index);
  },
  change(){
      
      this.show = !this.show;
      this.show1 = false;
      this.show2 = false; 
      if(this.show === true){
         this.old = "分类";
      }else{
          this.old = this.id;
      }
  },change1(){
      this.show1 = !this.show1;
      this.show = false;
      this.show2 = false;
  },change2(){
      this.show2 = !this.show2;
      this.show1 = false;
      this.show = false;
  }

    }
    }
</script>

<style scoped>
.ee{
    /* border: 1px solid black; */
    margin-top: 0.1rem;
    width: 100%;
    display: flex;
    justify-content: space-around;
}
.e1,.e2{
    width: 47%;
    height: 0.5rem;
    font-size: 0.3rem;
    border-radius: 10%;
}
.e1{
    background: white;
    color:black;
}
.e2{
    background: springgreen;
    color:white;
}
.dd{
    /* border: 1px solid black; */
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.d7{
     border: 1px solid lightgray;
     width: 28%;
     margin-top: 0.1rem;
}
.img{
      width: 20px;
}
#aa{
    background: white;
    display: flex;
    justify-content: space-around;
}
#bb,#cc{
    background: white;
}
#a1,#a2{
    width: 50%;
}
#b1,#c1{
    width: 100%;
}

.v1{
    border: 1px solid lightgray;
    padding: 0.1rem;
}
.b6{
    border: 1px solid lightgray;
    padding: 0.2rem;
}
.c6{
    padding-top: 0.1rem;
    margin-left: 0.1rem;
}
.c8{
    border: 1px solid lightgray;
    width: 1.1rem;
    padding: 0.05rem;
    margin-top: 0.1rem;
    margin-left: 0.1rem;
}
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
    #ss{
        display: flex;
        justify-content: space-around;
    }
    .luy {
  float: left;
  margin-left: 0.1rem;
  color: white;
  text-decoration: none;
  transform: rotateZ(90deg);
}

#s2,#s3,#s4{
    border: 1px solid lightgray;
    padding: 0.06rem;
    width: 30%;
    text-align: center;
    background: white;
}
#s2{
    border-right: 1px solid lightgray; 
    /* height: 5px; */
}
#s4{
    border-left: 1px solid lightgray; 
}
</style>
