export default{
    //store.commit（‘方法名’，附加参数），触发incurement，会把state给带过来
    //state是自动过来的，n是附加的
    saveuser(store, name){
      this.state.username = name;
    },
    dizhicz(store, csxx){
      this.state.dz = csxx;
    },
    dizhiin(store, index){
      this.state.index = index;
    },
    dizhipd(store, value1){
      this.state.value1 = value1;
    },
    sousuols(store, arr){
      this.state.ssls = arr;
    },
    zhengfan1(store, down1){
      this.state.down11 = down1;
    },
    zhengfan2(store, down2){
      this.state.down22 = down2;
    },
    zhengfan3(store, down3){
      this.state.down33 = down3;
    },
    zhengfan4(store, down4){
      this.state.down44 = down4;
    },
    ss(state,n){
      this.state.arr=n;
    },
    add(state,id){
      this.state.arr.filter(num => id.a == num.id)[0].foods.filter(num => id.b == num.specfoods[0].food_id)[0].specfoods[0].count++
      if (state.ss.indexOf(id.c) == -1) {
        // 查找添加li食物信息
        this.state.ss.push(id.c)
    }
    var sumValue = 0;
    for (let i = 0; i < this.state.ss.length; i++) {
        sumValue += this.state.ss[i].price * this.state.ss[i].count;
    }
    this.state.price = sumValue



    },
    app(state,id){
      this.state.ss.filter(num => id == num.food_id)[0].count--

      var sumValue = 0;
      for (let i = 0; i < this.state.ss.length; i++) {
          sumValue += this.state.ss[i].price * this.state.ss[i].count;
      }
      this.state.price = sumValue
    }
       
  }