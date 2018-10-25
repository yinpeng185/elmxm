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
          <router-link to="/second">
          <div class="s1" @click="change2">
           <img src="../img/02.png" v-if="down2">
           <img src="../img/21.png" v-else>
          <p><a href="##">搜索</a></p>
          </div>
          </router-link>
          <router-link to="/third">
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
      <!-- 路由出口 -->
  </div>
</template>

<script>
 

export default {
  data: () => ({
    down1: true,
    down2: true,
    down3: true,
    down4: true
  }),
  methods: {
    change1() {
      this.down1 = this.$store.state.down;
      this.down2 = true;
      this.down3 = true;
      this.down4 = true;
      if (this.down1 === true) {
        this.down1 = !this.down1;
      }
    },
    change2() {
      this.down2 = this.$store.state.down;
      this.down1 = true;
      this.down3 = true;
      this.down4 = true;
      if (this.down2 === true) {
        this.down2 = !this.down2;
      }
    },
    change3() {
      this.down3 = this.$store.state.down;
      this.down1 = true;
      this.down2 = true;
      this.down4 = true;
      if (this.down3 === true) {
        this.down3 = !this.down3;
      }
    },
    change4() {
      this.down4 = this.$store.state.down;
      this.down1 = true;
      this.down2 = true;
      this.down3 = true;
      if (this.down4 === true) {
        this.down4 = !this.down4;
      }
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