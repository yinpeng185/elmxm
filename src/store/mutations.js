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
    add(state,a){
     a.count++
      if (state.ss.indexOf(a) == -1) {
        // 查找添加li食物信息
        this.state.ss.push(a)
    }
    this.state.price += a.price

    // if(this.state.price < 40){
    //   this.state.oo = false;
    // }else{
    //   this.state.oo = true;
    // }


    },
    app(state,a){
       //减
       a.count--;
       for (let i = 0; i < this.state.ss.length; i++) {
           if (this.state.ss[i].count <= 0) {
               this.state.ss.splice(i, 1)
           }
       }
       this.state.price -= a.price
   },
   qk(state) {
    //清空

    for (let i = 0; i < this.state.ss.length; i++) {
        this.state.ss[i].count = 0;
    }
    this.state.price = 0

},

    qw(){
        if(this.state.price >= 40){
         this.state.oo = true;
      }else{
        this.state.oo = false;
      }
    }
  }