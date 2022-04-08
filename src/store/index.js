import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Spicy: false,
    Price: false,
    Spice: false,
    din: 0,
    randomFood_1: "",randomFood_1_2:"",randomFood_1_3:"",randomFood_1_id:"",
    randomFood_2: "",randomFood_2_2:"",randomFood_2_3:"",randomFood_2_id:"",
    randomFood_3: "",randomFood_3_2:"",randomFood_3_3:"",randomFood_3_id:"",
    isFirst:0,
    isSecond: 0,
    isThird: 0,
    hot: "",
    hot2: "",
    hot3: "",
    id:0,
  },
  mutations: {
    rest(){
      // this.state.randomFood_1="";
      // this.state.randomFood_2="";
      // this.state.randomFood_3="";
      // this.$store.state.hot="";
      // this.$store.state.hot2="";
      this.state.isFirst=0;
      this.state.isSecond=0;
      this.state.isThird=0;
      //console.log("ll");
    },
    din_1(){
      this.state.din=1;
      //console.log("OK");
    },
    din_2(){
      this.state.din=2;
      //console.log("OK");
    },
    din_3(){
      this.state.din=3;
      //console.log("OK");
    },
    din_4(){
      this.state.din=4;
      //console.log("OK");
    },
    din_5(){
      this.state.din=5;
      //console.log("OK");
    },
    din_6(){
      this.state.din=6;
     // console.log("OK");
    },
    din_7(){
      this.state.din=7;
      //console.log("OK");
    },

    addFood_1(state,payload){
      this.state.randomFood_1=payload.amount1;
      this.state.randomFood_1_2=payload.amount2;
      this.state.randomFood_1_3=payload.amount3;
      //console.log(this.state.randomFood_1);
    },

    addFood_1_id(state,id){
      this.state.randomFood_1_id=id;
    },

    addFood_2(state,payload){
      this.state.randomFood_2=payload.amount1;
      this.state.randomFood_2_2=payload.amount2;
      this.state.randomFood_2_3=payload.amount3;
    },

    addFood_2_id(state,id){
      this.state.randomFood_2_id=id;
    },

    addFood_3(state,payload){
      this.state.randomFood_3=payload.amount1;
      this.state.randomFood_3_2=payload.amount2;
      this.state.randomFood_3_3=payload.amount3;
    },

    addFood_3_id(state,id){
      this.state.randomFood_3_id=id;
    },

    first(state){
      state.isFirst=1;
    },
    second(state){
      state.isSecond=1;
    },
    third(state){
      state.isThird=1;
    },

  },
  actions: {
  },
  modules: {
  }
})
