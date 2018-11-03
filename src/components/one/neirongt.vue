<template>
    <div>

     <div class="big">
       
   <div class="top">
<div class="all" :style="{ 'background-image': 'url(https://elm.cangdu.org/img/' + data.image_path + ')','background-repeat':'no-repeat','background-size':'cover', }">
             <router-link :to="{path:'/sweet', query:{id:this.idd}}"> 
           <i style="color:white" class="el-icon-arrow-left"></i>
      

            <img class="img2" style="width:0.7rem" :src="'https://elm.cangdu.org/img/'+data.image_path" alt=""> 
            <p class="a3">{{data.name}}</p>
</router-link>

            
            <router-link :to='"/xiangqing/"+this.id'> 
            <div class="a1">
            
            <span class="a2">商家配送 / 分钟送达 / {{datas.tips}}</span>
            <p class="a2">公告:{{data.promotion_info}}</p>        
           <i style="color:white" class="el-icon-arrow-right"></i> 
            </div>
            </router-link>
     </div> 
     </div>
    

      <div class="q1">
          <p v-if="show3" class="q2" @click="change1()">商品</p>
          <p v-else class="q2" @click="change1()" style="color:blue;border-bottom:0.03rem solid blue">商品</p>
          <p v-if="show4" class="q3" @click="change2()">评价</p>
          <p v-else class="q3" @click="change2()" style="color:blue;border-bottom:0.03rem solid blue">评价</p>
      </div>
      
  </div>
  
<div class="w1" v-if="show1">
             <div ref="top" class="w2">
               <ul>
                 <li @click="xuanze(index)" class="ww" v-for="(k,index) in datass" :key="index" :class="{ red:changeRed == index}">{{k.name}}</li>
               </ul>
             </div>

             <div class="w3">
               
               <div v-for="(k,index) in datass" :key="index" > 
               <div style="background:lightgray;width:100%;height:0.5rem;line-height:0.5rem;">
               <span ref="tout" style="font-size:0.2rem;font-weight:bold;">{{k.name}}</span>
               <span style="font-size:0.15rem;color:gray;padding-top:0.5rem;" v-if="k.description">{{k.description}}</span> 
              </div>

               <ul>
                 <li class="t1" v-for="(da,index1) in k.foods" :key="index1">
                   <div style="display:flex; justify-content: space-around;">
                       <div>
                          <img class="img3" style="width:0.5rem;margin-left:0.1rem;margin-top:0.1rem;" :src="'https://elm.cangdu.org/img/'+da.image_path" alt="">
                       </div>
                       <div style="padding-top:0.1rem;width:1rem;">
                         <span class="z1">{{da.name}}</span>
                         <p class="z2">{{da.description}}</p>
                         <span class="z3"> 月售{{da.month_sales}}份 好评率{{da.satisfy_rate}}%</span>
                         <br>
                         <span class="z4">{{da.description}}</span>
                         <p style="color:red;font-size:0.13rem;" class="z5">￥{{da.specfoods[0].price}}
                            <span style="color:gray;font-size:0.12rem;">起</span>                   
                         </p>
                       </div>
                       <div style="padding-top:0.8rem ;  width:0.7rem;" >

                         <i v-if="da.specfoods[0].count>0" @click="app(da.specfoods[0])" class="el-icon-remove"></i>
                            <span v-if="da.specfoods[0].count>0">{{da.specfoods[0].count}}</span>
                         <i  @click="add(da.specfoods[0])" class="el-icon-circle-plus"></i>
                       </div>
                       <!-- <div style="padding-top:0.8rem">
                         <i @click="app($event)" class="el-icon-remove"></i>
                          <span>{{0}}</span>
                         <i @click="add($event)" class="el-icon-circle-plus"></i>
                       </div> -->
                   </div>
                 </li>
               </ul>
            </div> 
               
               
             </div>
                 <buycar v-bind:id="this.id"></buycar>
</div>

<div class="e1" v-if="show2">
         <div class="ee">
             <div class="e2">
                   <p class="h1">4.4</p>
                   <span class="h2">综合评价</span>
                   <p class="h3">高于周边商家76.9%</p>
             </div>
             <div class="e3">
                 <div>
                    <span class="h4">服务态度  </span>
                     <el-rate class="o1" v-model="value5" disabled show-score text-color="#ff9900" score-template="{value}">
                    </el-rate>
                   
                </div>
                <div>
                   <span class="h4">菜品评价</span>
                    <el-rate class="o1" v-model="value5" disabled show-score text-color="#ff9900" score-template="{value}">
                    </el-rate>
                    
                </div>
                <div>
                    <p class="h4">送达时间<span class="h5">分钟</span></p>
                </div>            
             </div>
      </div>

      <div>       
                <ul class="f1">
                  <li class="f2" v-for="(daa,index) in agree" :key="index" @click="menu1(index)" :class="{active:index==facevalue}"><span :class="{active:index==facevalue}">{{daa.name}}({{daa.count}})</span></li>
                </ul>
       
     </div>
     
      <div class="gg">
         <div class="g1">           
                <ul class="g2" v-for="(daaa,index) in onee" :key="index">
                  <li class="g3" >
                    <div style="display:flex;justify-content: space-between;">
                    <span>{{daaa.username}}</span>
                    <span>{{daaa.rated_at}}</span>
                    </div>
                    <div style="display:flex;">
                     <span class="span">
                       <el-rate v-model="daaa.rating_star" disabled show-score text-color="#ff9900" score-template="{value}" class="el-rate">
                    </el-rate>
                </span>
                <span>{{daaa.time_spent_desc}}</span>
                </div>
 <ul style="display:flex;flex-direction:row;">
  <li v-for="(da,index) in daaa.item_ratings" :key="index"> 
  <img style="width:0.8rem;margin-left:0.1rem;margin-top:0.1rem;"
                 :src="'https://fuss10.elemecdn.com/'+da.image_hash+'.jpeg'" alt="">
                <p>{{da.food_name}}</p>
  </li>
  </ul>
                

                  </li>
                </ul>
          </div>
     </div>

</div>

     


 </div>
</template>

<script>
import Vue from "vue";

import { Loading } from "element-ui";
import buycar from "../one/buycar";

export default {
  components: {
    buycar
  },
  name: "neirongt",
  data: () => ({
    data: [],
    datas: [],
    datass: [],
    agree: [],
    onee: [],
    count: 0,
    value5: 3.7,
    num7: 0,
    facevalue: "0",
    id: "",
    idd: "",
    show1: true,
    show2: false,
    show3: false,
    show4: true,
    changeRed: 0
  }),
  created() {
    this.idd = this.$route.query.id;
    // console.log(this.idd);
    this.id = this.$route.params.id;
    let loadingInstance = Loading.service({
      fullscreen: true
    });

    let api = "https://elm.cangdu.org/shopping/restaurant/" + this.id;

    this.$http.get(api).then(data => {
      loadingInstance.close();
      this.data = data.data;
      this.datas = data.data.piecewise_agent_fee;
      // console.log(this.id);
      // console.log(this.data);
    });

    let apc =
      "https://elm.cangdu.org/shopping/v2/menu?restaurant_id=" + this.id;
    this.$http.get(apc).then(data => {
      for (let i = 0; i < data.data.length; i++) {
        for (let ii = 0; ii < data.data[i].foods.length; ii++) {
          Vue.set(data.data[i].foods[ii].specfoods[0], "count", 0);
          // console.log(i,ii)
        }
      }
      this.datass = data.data;
      this.$store.commit("ss", data.data);
      console.log(this.datass);
      console.log(this.$store.arr);
    });

    let apc1 = "https://elm.cangdu.org/ugc/v2/restaurants/1/ratings/tags";
    this.$http.get(apc1).then(data => {
      this.agree = data.data;
    });

    let apc2 =
      "https://elm.cangdu.org/ugc/v2/restaurants/1/ratings?offset=0&limit=10";
    this.$http.get(apc2).then(data => {
      this.onee = data.data;
    });
  },
  methods: {
    add(a) {
      this.$store.commit("add", a);
      console.log(this.$store.state.price);
      console.log(this.$store.state.ss);


    },
    app(id) {
      this.$store.commit("app", id);
      console.log(this.$store.state.ss);      
    },
    // add(ev) {
    //   // this.$store.commit("add", id);
    //   console.log(ev.target.text());
    // },
    // app(ev) {
    //   // this.$store.commit("app", id);
    //   console.log(ev.target);
    // },

    change1() {
      this.show1 = true;
      this.show2 = false;
      this.changeRed = 0;
      document.documentElement.scrollTop = 0;
      this.show3 = false;
      this.show4 = true;
    },
    change2() {
      this.show2 = true;
      this.show1 = false;
      document.documentElement.scrollTop = 0;
      this.show4 = false;
      this.show3 = true;
    },
    menu1(id) {
      this.facevalue = id;
    },
    xuanze(index) {
      this.changeRed = index;
      document.documentElement.scrollTop =
        this.$refs.tout[index].offsetTop - this.$refs.top.offsetTop;
    }
  }
};
</script>

<style scoped>
.big {
  position: fixed;
  width: 100%;
}
.all:before {
  filter: blur(500px);
}
.all p,
.all span {
  color: white;
}
.all {
  position: relative;
  background-size: 100% 100%;
}
.top {
  position: fixed;
  width: 100%;
  height: 1rem;
}
.el-icon-arrow-left {
  position: relative;
  font-size: 0.3rem;
  left: 0rem;
  top: -0.4rem;
}
.el-icon-arrow-right {
  position: relative;
  font-size: 0.3rem;
  top: -0.4rem;
  right: -2.5rem;
}
.img2,
.a1 {
  position: relative;
}
.img2 {
  left: -0.2rem;
  top: 0.1rem;
}
.a1 {
  width: 80%;
  top: -0.6rem;
  right: -0.9rem;
}
.a2 {
  padding: 0.03rem;
  font-size: 0.12rem;
}
.a3 {
  padding: 0.03rem;
  font-size: 0.15rem;
  position: relative;
  top: -0.65rem;
  left: 0.9rem;
  font-weight: bold;
}
.q1 {
  /* border: 1px solid black; */
  background: white;
  width: 100%;
  height: 0.43rem;
  position: fixed;
  top: 1rem;
  display: flex;
  justify-content: space-around;
  text-align: center;
  line-height: 0.4rem;
  padding: 0.15rem 0.05rem 0.05rem 0.05rem;
}
.q1 p {
  color: black;
  font-size: 0.15rem;
}
.w1 {
  width: 100%;
  padding-top: 1.5rem;
  padding-bottom: 1rem;
  overflow: hidden;
}
.w2 {
  width: 27%;
  border: 1px solid lightgray;
  position: fixed;
  top: 1.63rem;
  left: 0;
}
.ww {
  border: 1px solid lightgray;
  padding: 0.3rem 0 0.3rem 0.1rem;
  font-size: 0.18rem;
}
.w3 {
  width: 75%;
  margin-left: 27%;
  padding-bottom: 1rem;
  /* 超出滚动,x轴隐藏滚动条,y轴显示 */
  /* overflow-x: hidden;
      overflow-y: scroll;  */
}
.e1 {
  padding-top: 1.5rem;
}
.ee {
  border: 1px solid lightgray;
  height: 1.5rem;
  display: flex;
  overflow: hidden;
  justify-content: space-around;
}
.e2 {
  /* border: 1px solid black; */
  width: 50%;
  text-align: center;
  margin-top: 0.4rem;
}
.e3 {
  /* border: 1px solid black; */
  width: 50%;
  /* text-align: center; */
  margin-top: 0.4rem;
}
.t1 {
  width: 100%;
  border: 1px solid lightgray;
  /* height:1.3rem; */
  padding: 0.1rem 0 0.1rem 0;
  background: white;
}
.img3,
.z1,
.z2,
.z3,
.z4,
.z5 {
  font-size: 0.12rem;
}
.z1 {
  font-size: 0.13rem;
  font-weight: bold;
}
.z2 {
  color: gray;
}
.z4 {
  border: 1px solid red;
  border-radius: 30%;
  color: orangered;
}

.f1 span {
  font-size: 0.15rem;
  color: black;
}
.f1 .active {
  background: #3190e8;
  color: white;
}
.f1 {
  /* border:1px solid black; */
  padding: 0.1rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 90%;
}
.f2 {
  background: rgb(209, 227, 241);
  border: 1px solid lightgray;
  padding: 0.05rem;
  text-align: center;
  border-radius: 0.05rem;
  margin-top: 0.03rem;
}
.gg {
  /* z-index: -1; */
}
.g3 {
  padding-top: 0.1rem;
  border: 1px solid lightgray;
  height: 1.5rem;
}
.h1 {
  font-size: 0.3rem;
  color: orangered;
}
.h2 {
  font-size: 0.2rem;
  color: gary;
}
.h3 {
  font-size: 0.12rem;
  color: lightgary;
}

.h4 {
  font-size: 0.2rem;
}
.h5 {
  font-size: 0.12rem;
}

.red {
  color: red;
  border-left: 5px solid blue;
}

.el-icon-circle-plus{
  float: right;
}
</style>
