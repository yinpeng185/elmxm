<template>
<div class="wrap">
     <div class="hello">
         <router-link to="/my/benefit"><i class="el-icon-arrow-left"></i></router-link>
         <span class="span">历史红包</span>
    </div>

    <div class="list">
      <ul    >
        <li v-for="(zitem,index) in data" :key="index">
          <div v-for="(ztem,index) in zitem.limit_map" :key="index">
          <div class="zys1">
            <div class="zys11">
              <p class="p">￥<span class="big">{{zitem.amount}}</span>.0</p>
              <p>满{{zitem.sum_condition}}元可用</p>
            </div>
            <div class="zys12">
              <p class="p1">{{zitem.name}}</p>
              <p>{{zitem.end_date}}到期</p>
              <p>限收货手机号为</p>
              <p>{{zitem.phone}}</p>
            </div>
            <div class="zys13">
              <p>已过期</p>
            </div>
          </div>  
          <div class="poi">{{ztem}}</div>
          </div>
        </li>
      </ul>
    </div>
</div>
</template>

<script>
export default {
  data: () => ({
    data: [],
  }),
   created() {
     let api =
      "https://elm.cangdu.org/promotion/v2/users/1/expired_hongbaos?limit=20&offset=0";
    //promise写法
    this.$http.get(api).then(data => {
      this.data = data.data;
    });
   },

  }
  
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;}
.hello {
  background: blue;
  text-align: center;
  /* height: 2rem; */
  width: 100%;
  /* border: 5px solid black; */
  position: fixed;
  z-index: 5;
  overflow: hidden;}
.bd{
    padding-top: 5%;
    padding-bottom: 5%;
    padding-left: 3%;}
.el-icon-arrow-left {
  color: white;
  font-size: 0.3rem;
  float: left;
  margin-top: 0.01rem;}
.span {
  color: white;
  font-size: 0.3rem;
  z-index: 5;}
.list{
  /* background: gray; */
  padding-top: 0.5rem;
  padding-left: 0.2rem;
  padding-right: 0.2rem;}
.zys1{
  border-top: 3px dashed gray;
  display: flex;
  width: 90%;
  padding: 0.2rem 0 0.2rem 0;
  margin-top: 0.2rem;  
  font-size: 0.1rem;}
.zys11{
  border-right: 1px dashed gray;
  padding-right: 0.2rem;
  margin-right: 0.2rem;}
.zys12{
  padding-right: 0.1rem;
  margin-right: 0.1rem;}
.zys13{
  }
  .poi{
    color: gray;
    font-size: 0.1rem;
  }
  .p1{
    color: black;
  }
  .big{
   font-size:  0.5rem;
  }
</style>
