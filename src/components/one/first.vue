<template>
<div>
  <div id="hao3">
  <div id="hao">
         <router-link to="/sousuo"> 
          <img src="../img/02.png" alt="">
          </router-link>        
 </div>
 <div id="hao2">
     <router-link v-if="value1" to="/dingwei"> 
              <span>请选择地址...</span>
          </router-link>
      <router-link v-else to="/dingwei"> 
              <span v-if="value2">{{csxx[0][0]}}</span>
              <span v-else>{{csxx[index][0]}}</span>
          </router-link>
 </div>
 <div id="hao1">
     <router-link v-if="value" to="/denglu"> 
              <span>登录|注册</span>
          </router-link>
      <router-link v-else to="/my"> 
              <span>我的</span>
          </router-link>
 </div>
 </div>

<swiper id="d6" :options="swiperOption" ref="mySwiper">
       <swiper-slide id="d1" >
         <div class="s1" v-for="(item,index) in imgs1" :key="index">
           <router-link :to="{name: 'sweet', query:{id: item.title}}">
         <img  width="40"  :src="item.src" alt="">
         </router-link>
         <p>{{item.title}}</p>
         </div>
         </swiper-slide>
         <swiper-slide id="d2">
         <div class="s1" v-for="(item,index) in imgs2" :key="index">
           <router-link :to="{name: 'sweet', query:{id: item.title}}">
         <img width="40"  :src="item.src" alt="">
         </router-link>
         <p>{{item.title}}</p>         
         </div>
         </swiper-slide>
      <div class="swiper-pagination "  slot="pagination"></div>
</swiper> 
  <div id="sum">
      <img src="../img/01.png" alt="">
      <span>附近商家</span>
  </div>

 <!-- <div id="sup" v-for="item in data" :key="item.id">        
  {{item.name}}
   <img :src='"https://elm.cangdu.org/img/"+item.image_path' alt=""> 
 </div> -->

<ul class="content_ul">
   <router-link tag="li" :key="index" v-for="(k,index) in data" :to="{path:'/neirongo/'+k.id}">
        <div>
            <img class="img2" :src="'https://elm.cangdu.org/img/'+k.image_path" alt="">
        </div>
        <div class="content_div">
            <p>
                <span id="sp1">品牌</span>
                <span id="sp2">{{k.name}}</span>
                <span id="sp3">保准票</span>
            </p>
            <p>
                <span>
                    <el-rate v-model="k.rating" disabled show-score text-color="#ff9900" score-template="{value}" class="el-rate">
                    </el-rate>
                </span>
                <span id="sp4">月售106单</span>
                <span id="sp5" v-if="k.delivery_mode">{{k.delivery_mode.text}}</span>
                <span id="sp6">准时达</span>
            </p>
            <p>
                <span class="sp7">￥{{k.float_minimum_order_amount}}起送/</span>
                <span class="sp7">{{k.piecewise_agent_fee.tips}}</span>
                <span class="sp7">10公里<span style="color:blue">/40分钟</span></span>
            </p>
        </div>
    </router-link>
  
    </ul>
     <foot></foot> 
 </div>

</template>

<script>

//引入loading样式
import { Loading } from "element-ui";
import { mapState, mapMutations } from "vuex";
import { swiper, swiperSlide } from "vue-awesome-swiper";

import foot from "../one/foot";

import img1 from "../img/1.png";
import img2 from "../img/2.png";
import img3 from "../img/3.png";
import img4 from "../img/4.png";
import img5 from "../img/5.png";
import img6 from "../img/6.png";
import img7 from "../img/7.png";
import img8 from "../img/8.png";
import img9 from "../img/9.png";
import img10 from "../img/10.png";
import img11 from "../img/11.png";
import img12 from "../img/12.png";
import img13 from "../img/13.png";
import img14 from "../img/14.png";
import img15 from "../img/15.png";
import img16 from "../img/16.png";
//创建组件
let First = {
  //组件名
  name: "first"
};


//导出模块:组件必须是default
export default {
  name:"first",
  components: {
    swiper,
    swiperSlide,
    foot,
  },
 

  data: () => ({
    data: [],
    name: "",
    value: true,
    value1: true,
    value2: true,
    csxx: "",
    index: "",
     imgs1: [
      { title: "甜品饮品", src: img1 },
      { title: "商超便利", src: img2 },
      { title: "美食", src: img3 },
      { title: "简餐", src: img4 },
      { title: "新店特惠", src: img5 },
      { title: "准时达", src: img6 },
      { title: "预定早餐", src: img7 },
      { title: "土豪推荐", src: img8 }
    ],
    imgs2: [
      { title: "川湘菜", src: img9 },
      { title: "麻辣烫", src: img10 },
      { title: "包子粥店", src: img11 },
      { title: "鲜花蛋糕", src: img12 },
      { title: "日韩料理", src: img13 },
      { title: "果蔬生鲜", src: img14 },
      { title: "汉堡薯条", src: img15 },
      { title: "披萨意面", src: img16 },
 
    ],
    swiperOption: {
      notNextTick: true,
      loop: true,
      initialSlide: 0,
      autoplay: false,
      effect: "slide",
      speed: 800,
      direction: "horizontal",
      on: {
        slideChangeTransitionEnd: function() {}
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },

      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    },
    swiperSlides: [1, 2]
  }),
  getIndex(index){
    console.log(index);
},
  created() {
    if(this.$store.state.username == undefined){
      this.value = true;
    }else{
      this.value = this.$store.state.value;
    }
    if(this.csxx == undefined){
      this.value1 = true;
      this.csxx = ["请选择地址.."];
    }

    if(this.$store.state.dz == undefined){
      this.value1 = true;
    }else{
      this.value1 = this.$store.state.value;
      this.csxx = this.$store.state.dz;

    }
    if(this.$store.state.index !== undefined){
      this.value2 = this.$store.state.value1;
      this.index = this.$store.state.index;
    }
          
    console.log(this.csxx);
      let loadingInstance = Loading.service({
        fullscreen:true
      });
   
    let api =
      "https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762";
    //promise写法
    this.$http.get(api).then(data => {
        //在成功的时候,关闭加载提示
        loadingInstance.close();

      this.data = data.data;
    });
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    console.log("this is current swiper instance object", this.swiper);
  }
};
</script>

<style scoped>
#sum {
  border: 1px solid lightgray;
  margin-top: 3%;
  width: 100%;
  height: 0.3rem;
}
#sum img {
  width: 0.2rem;
  margin-top: 0.05rem;
  margin-left: 0.1rem;
}
.s1 {
  /* border: 1px solid yellow; */
  width: 25%;
  height: 40%;
  text-align: center;
}
#d6 {
  width: 100%;
  height: 40%;
  border: 1px solid lightgray;
}
#d1 {
  /* border: 1px solid black; */
  padding-bottom: 5%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 0.5rem;
}
#d2 {
  /* border:1px solid black; */
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 0.5rem;
}
#hao3 {
  /* border: 1px solid black; */
  background: blue;
  height: 0.5rem;
  width: 100%;
  position: fixed;
  z-index: 6;
}
#hao2{
  /* border: 1px solid black; */
  width:1.5rem;
  height: 0.25rem;
  float: left;
  text-align: center;
  margin-top: 0.15rem;
  margin-left: 0.35rem;
  line-height: 0.25rem;
}
#hao2 span {
  font-size: 0.2rem;
  color: white;
 
}
#hao img {
  width: 0.3rem;
  float: left;
  margin-top: 0.13rem;
  margin-left: 0.15rem;
}
#d1 img,
#d2 img {
  width: 60%;
  margin-top: 10px;
}
#hao1 span {
  float: right;
  color: white;
  margin-top: 0.2rem;
  margin-right: 0.15rem;
}
.swiper-slide {
  height: 200px;
}
* {
  margin: 0;
  padding: 0;
}

.content_ul {
  border: 1px solid lightgray;
  padding-bottom: 50px;
}
.content_ul li {
  height: 1.2rem;
  border: 1px solid lightgray;
  overflow: hidden;
}
.content_ul li div {
  /* border: 1px solid palegreen; */
  float: left;
}
.content_ul li > div:first-child {
  width: 20%;
  height: 1rem;
  /* border: 1px solid yellow; */
}
.content_div {
  margin-top: 3%;
}
.img2 {
  width: 75px;
  padding-top: 20px;
}
.content_ul li > div:nth-child(2) {
  width: 80%;
  height: 1rem;
  /* border: 1px solid yellow; */
}
.content_div p {
  height: 0.2rem;
  margin: 10px 0;
  /* background: blue; */
  overflow: hidden;
}
.content_div p > span {
  float: left;
  /* border: 1px solid black; */
  /* margin: 0 20px 0 5px; */
}
.content_div p > span:last-child {
  float: right;
  margin-right: 0.1rem;
}
.content_div #sp1 {
  background: yellow;
  font-size: 0.1rem;
  /* line-height: .2rem; */
}
.content_div #sp2 {
  font-size: 0.2rem;
}
.content_div #sp3 {
  font-size: 0.1rem;
}
.content_div #sp4 {
  font-size: 0.1rem;
}
.content_div #sp5 {
  font-size: 0.1rem;
  background: rgb(38, 117, 190);
  color: white;
  margin-left: 0.33rem;
  margin-top: 0.02rem;
}
.content_div #sp6 {
  font-size: 0.1rem;
  border: 1px solid rgb(49, 144, 232);
  color: rgb(38, 117, 190);
}
.content_div .sp7 {
  font-size: 0.1rem;
}
.box > img {
  width: 0.3rem;
  position: absolute;
  left: 0;
  top: 0.1rem;
  bottom: 0.1rem;
  height: 0.3rem;
}
.box > a {
  float: right;
  right: 0;
  top: 0.1rem;
  bottom: 0.1rem;
}
/* a{
    display: block;
} */
</style>
<style>
.el-rate__icon {
  font-size: 10px;
  z-index: -5;
}
</style>
