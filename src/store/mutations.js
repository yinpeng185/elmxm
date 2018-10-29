export default{
    //store.commit（‘方法名’，附加参数），触发incurement，会把state给带过来
    //state是自动过来的，n是附加的
    saveuser(store, name){
      this.state.username = name;
    },
    dizhicz(store, csxx){
      this.state.dz = csxx;
    },
    sousuols(store, arr){
      this.state.ssls=arr;
    }
  }