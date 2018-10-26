<template>
    <div class="all">
        <header>
           <router-link class="luyy" :to="{name:'first'}">ele.me</router-link>
           <router-link to="/denglu">
            <span class="i2">登录|注册</span>
           </router-link>
       </header>
       <p class="p1">当前定位城市:
           <span>定位不准时, 请在城市列表中选择</span>
       </p>
       <router-link class="city" :to="{path:'/dingwei2/'+dingwei.id}">
           <p class="p2">
               <span>{{dingwei.name}}</span>
           <span class="next">></span>
           </p>
           
       </router-link>

       <div class="hot">
           <p>热门城市</p>
           <ul>
               <router-link v-for="(htc, index) in hot" :key="index" :to="{path: '/dingwei2/'+htc.id}">
               <li>{{htc.name}}</li>
               </router-link>
           </ul>
           
       </div>

       <div class="list">
           <ul v-for="(city, key, index) in City" :key="index">
               <div class="listt">
               <p>{{key}}</p>
               <li v-for="(item,key,index) in city" :key="index">
                   <router-link class="a" :to="{path:'/dingwei2/'+item.id}">
                      {{item.name}}
                   </router-link>
               </li>
               </div>
           </ul>
       </div>
    </div>
</template>

<script>
export default {
    name: "dingwei",
    data(){
        return{
            data: [],
            dingwei: "",
            hot: []
        }
  },
  created() {
  let api =
      "https://elm.cangdu.org/v1/cities?type=group";
    this.$http.get(api).then(data => {
      //成功后的回调
      console.log("成功了......");
      //展示所有商店名
    //   console.log(data);
      this.data = data.data;
    });

    let dwc = "https://elm.cangdu.org/v1/cities?type=guess";
    this.$http.get(dwc).then(data => { 
       this.dingwei = data.data;
    //    console.log(this.dingwei);
    })

    let htc = "https://elm.cangdu.org/v1/cities?type=hot";
    this.$http.get(htc).then(data => { 
       this.hot = data.data;
    //    console.log(this.hot);
    })
  },
  computed:{
      City(){
          let zimu = {};
      for(let i = 65; i <= 90; i++){
          if(this.data[String.fromCharCode(i)]){
              zimu[String.fromCharCode(i)] = this.data[String.fromCharCode(i)];
          }
      }
      return zimu
      }
     
  }
}
</script>

<style scoped>
header {
  background: blue;
  text-align: center;
  overflow: hidden;
  padding: 0 3%;
}
.luyy {
  float: left;
  margin: 5% 0 0;
  color: white;
  text-decoration: none;
}
.i2{
    width: 0.8rem;
    float: right;
    margin: 5% 0 5% 0;
    font-size: 0.14rem;
    color: white;
}
.p1{
    font-size: 0.12rem;
    padding: 5% 3% 2% 3%;
}
p{
    background: white;
}
.p1>span{
    float: right;
    color: gray;
}
.city{
    text-decoration: none; 
}
.p2{
    font-size: 0.18rem;
    padding: 2% 3% 2% 3%;
    border-top: 0.1px solid gray;
    border-bottom: .1px solid gray; 
}
.p2>span{
    color: blue;
}
.next{
    float: right;
    color: lightgray;
}
.hot{
    background: white;
    overflow: hidden;
    font-size: 0.12rem;
    color: blue;
    margin-top: 3%;
}
.hot p{
    padding: 2% 3%;
    color: black;
}
.hot ul li{
    float: left;
    list-style-type: none;
    width: 24.9%;
    text-align: center;
    color: blue;
    height: 0.35rem;
    line-height: 0.35rem;
    border: .1px solid gray;
}
.list p{
    padding: 2% 3%;
    color: black;
}
.listt{
    background: white;
    border: 1 solid black;
    margin-top: 0.1rem;
    overflow: hidden;
}
.list ul li{
    float: left;
    list-style-type: none;
    width: 24.9%;
    text-align: center;
    height: 0.35rem;
    font-size: 0.12rem;
    line-height: 0.35rem;
    border: .1px solid gray;
    overflow: hidden;
}
.listt li .a{
    text-decoration: none;
    color: black;
}
</style>
