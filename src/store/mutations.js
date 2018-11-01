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
    ss(state,n){
      this.state.arr=n;
    },
    add(state,id){
      this.state.arr.filter(num => id == num.foods[0].specfoods[0].food_id)[0].foods[0].specfoods[0].count++
      this.state.newshop = this.state.arr.filter(num => num.foods[0].specfoods[0].count != 0)

    },
    app(state,id){
      this.state.arr.filter(num => id == num.foods[0].specfoods[0].food_id)[0].foods[0].specfoods[0].count--
      this.state.newshop = this.state.arr.filter(num => num.foods[0].specfoods[0].count != 0)

    }
       
  }