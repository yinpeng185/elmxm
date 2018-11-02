<template>
  <div id="foot">
      <div id="first">
          <router-link to="/first">
          <div class="s1" @click="change1">
          <img src="../img/01.png" v-if="down1">
          <img src="../img/20.png" v-else>
          <p><a href="##">外卖</a></p>
          </div>
          </router-link>
          <router-link to="/sousuo">
          <div class="s1" @click="change2()">
           <img src="../img/02.png" v-if="down2">
           <img src="../img/21.png" v-else>
          <p><a href="##">搜索</a></p>
          </div>
          </router-link>
          <router-link to="/dingdan">
          <div class="s1" @click="change3">
           <img src="../img/03.png" v-if="down3">
           <img src="../img/22.png" v-else>
          <p><a href="##">订单</a></p>
          </div>
          </router-link>
          <router-link to="/my">
          <div class="s1" @click="change4">
              <img src="../img/04.png" v-if="down4">
           <img src="../img/23.png" v-else>
          <p><a href="##">我的</a></p>
          </div>
          </router-link>
     
</div>
      
  </div>
</template>

<script>
 

export default {
  created(){
      this.down1 = this.$store.state.down11;
      this.down2 = this.$store.state.down22;
      this.down3 = this.$store.state.down33;
      this.down4 = this.$store.state.down44;
  },
  methods: {
    change1() {
      this.down1 = false;
      this.$store.commit("zhengfan1", this.down1);
      this.$store.commit("zhengfan2", true);
      this.$store.commit("zhengfan3", true);
      this.$store.commit("zhengfan4", true);
    },
    change2() {
      this.down2 = false;
      this.$store.commit("zhengfan2", this.down2);
      this.$store.commit("zhengfan1", true);
      this.$store.commit("zhengfan3", true);
      this.$store.commit("zhengfan4", true);
    },
    change3() {
      this.down3 = false;
      this.$store.commit("zhengfan3", this.down3);
      this.$store.commit("zhengfan1", true);
      this.$store.commit("zhengfan2", true);
      this.$store.commit("zhengfan4", true);
    },
    change4() {
      this.down4 = false;
      this.$store.commit("zhengfan4", this.down4);
      this.$store.commit("zhengfan1", true);
      this.$store.commit("zhengfan3", true);
      this.$store.commit("zhengfan2", true);
    }
  }
};
</script>

<style scoped>
#first {
  /* border: 1px solid black; */
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 0.5rem;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 6;
  background: white;
}
img {
  width: 0.2rem;
  height: 0.2rem;
  vertical-align: bottom;
}
.s1 {
  /* border: 1px solid pink; */
  text-align: center;
  margin-top: 0.05rem;
}
a {
  text-decoration: none;
  color: gray;
}
</style>