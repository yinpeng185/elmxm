<template>
       
        <ul class="content_ul">
   <router-link tag="li" :key="index" v-for="(k,index) in data" :to="{path:'/neirong/'+k.id}">
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
                <span class="sp7">{{k.distance}}<span style="color:blue">/{{k.order_lead_time}}</span></span>
            </p>
        </div>
    </router-link>
  
    </ul>
  
</template>

<script>
import { Loading } from 'element-ui';
export default {
  data: () => ({
    data: []
  }),
   created() {
     
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
      // console.log(data.data);
    });
    if(this.$store.state.dataa !== undefined){
         this.data = this.$store.state.dataa;
     };
     console.log(this.data);
  }
}

</script>

<style scoped>
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
  width: 0.75rem;
  padding-top: 0.2rem;
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
  margin-right: 10px;
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
</style>
<style>
.el-rate__icon {
  font-size: 10px;
  z-index: -5;
}
</style>

