<template>
  <div class="month">
       <div class="background_chose">
       </div>

        <div class="back_button">
          <back_button></back_button>
        </div>
    <br>
    <br>

       <img
           class="cho_pic"
           src="../assets/food1.png"
           alt=""/>
          
  
<form  method="get" name="eat">
      <div class="xxx" id="Spicy" v-if="this.$store.state.Spicy">
        <select  v-model=codeSpicy >
          <option class="tab" value="0" style="border: 5px solid #000;width: 100px;border-radius:5px">辣度</option>
          <option class="tab" value="1" >不辣</option>
          <option class="tab" value="2">🌶️</option>
          <option class="tab" value="3">🌶️🌶️</option>
          <option class="tab" value="4">🌶️🌶️🌶️</option>
        </select>
       </div>
      

      
      <div class="xxx" v-if="this.$store.state.Price">
        <select v-model=codePrice>
          <option class="tab" value="0" style="border: 1px solid #000;width: 100px;border-radius:5px">价格</option>
          <option class="tab" value="1">💰️(0-5)</option>
          <option class="tab" value="2">💰️💰️(5-10)</option>
          <option class="tab" value="3">💰️💰️💰️(10+)</option>
        </select>
       </div>

       <div class="xxx" v-if="this.$store.state.Spice">
        <select v-model="codeSpice">
          <option class="tab" value="0" style="border: 1px solid #000;width: 100px;border-radius:5px">种类</option>
          <option class="tab" value="一">面点🥯</option>
          <option class="tab" value="二">米饭🍚</option>
          <option class="tab" value="三">粥和豆浆🥣&🥤</option>
          <option class="tab" value="四">单品🍲</option>
          <option class="tab" value="五">特殊✨</option>
        </select>
       </div>

       <div class="xxx" v-show="0">
        <select>
          <option class="tab" style="border: 1px solid #000;width: 100px;border-radius:5px">Choose Something..</option>
          <option class="tab">Bacon</option>
          <option class="tab">Lettuce</option>
          <option class="tab">Tomato</option>
        </select>
       </div>
</form>

       <div id="de">
       <input type="submit" class="next" @click="i_decide" value="我决定了,开始推荐吧"/>
       </div>
    
  </div>
</template>

<script>
import back_button from '@/components/back_button'
import Axios from "axios";

export default {
  name: 'chose',
  data(){
      return{
        codePrice: 0,
        codeSpicy: 0,
        codeSpice: 0,
        code: "",
      }
       },
  components: {
      back_button,
  },
  methods: {
    i_decide(){
      this.go();
      this.$router.push("/fin");
    },

    go(){
      if(this.$store.state.Price===false&&this.$store.state.Spice===false&&this.$store.state.Spicy===false)
      {
        Axios.all([
          Axios({
            //url: 'localhost:8080/SchM/rand',
            url:'http://150.158.143.166:8080/SchM/rand',
            params: {
              din: this.$store.state.din,
            },
          }),
        ]).then(Axios.spread((res1) =>
        {

          let ran1=res1.data.toString();
          let food=[];

          for(let i=0;i<15;i++){
            let index;
            index=ran1.indexOf("\n");
            food[i]=ran1.slice(0,index);
            ran1=ran1.slice(index+1);

          }
          //拆开了每一行

          this.$store.commit('addFood_1_id',food[0]);
          this.$store.commit('addFood_1',
              {amount1:food[1],amount2:food[2],amount3:food[3]});

          this.$store.commit('addFood_2_id',food[4]);
          this.$store.commit('addFood_2',
              {amount1:food[5],amount2:food[6],amount3:food[7]});

          this.$store.commit('addFood_3_id',food[8]);
          this.$store.commit('addFood_3',
              {amount1:food[9], amount2:food[10], amount3:food[11]});

        }))
      }

      //随机部分
     //.......................................................................
      else{
      // console.log(this.codeSpicy);
       // console.log(this.codePrice);
       // console.log(this.codeSpice);
       // console.log("........"+this.code);

        Axios({
          //url:'localhost:8080/SchM/Com',
          url:'http://150.158.143.166:8080/SchM/com',
          params: {
            din: this.$store.state.din,
            price: this.codePrice,
            type: this.codeSpice,
          },
        }).then(res => {
          //console.log("........"+this.code);

          let ran1=res.data.toString();
          let food=[];

          if(ran1===""){
            alert("欸嘿，没有符合筛选条件的捏🥰")
            this.$router.push("/home");
          }

          for(let i=0;i<15;i++){
            let index;
            index=ran1.indexOf("\n");
            food[i]=ran1.slice(0,index);
            ran1=ran1.slice(index+1);
          }
          //拆开了每一行

          this.$store.commit('addFood_1_id',food[0]);
          this.$store.commit('addFood_1',
              {amount1:food[1],amount2:food[2],amount3:food[3]});

          this.$store.commit('addFood_2_id',food[4]);
          this.$store.commit('addFood_2',
              {amount1:food[5],amount2:food[6],amount3:food[7]});

          this.$store.commit('addFood_3_id',food[8]);
          this.$store.commit('addFood_3',
              {amount1:food[9], amount2:food[10], amount3:food[11]});

          })

      }
            },


}}
</script>

<style>
.background_chose {
  height: 100%;
  background: url("../assets/bg2.png");
  background-size: 100% 100%;
  width: 100%;
  left: 0;
  top: 0;
  z-index:-99;
  position: absolute;

}
.cho_pic {
  width: 50%;
  height: 10%;
  margin-left: 25%;
  margin-top: 10%;
}
.cho_pic>img{
  width: 10vm;
  height: 10vm;
}

.xxx {
    position: relative;
    display: block;
    margin:  10px auto;
    width: 75%;
    min-width: 300px;
    max-width: 400px;
    padding: calc(5px + 1vw);
    background: #009BE2;
  text-align: center;
    border-radius: 9px;
}
select {
    width: 70%;
    height: calc(40px + 2vw);
    border: 3px solid #009BE2;
    background: #fff;
    font-size: calc(10px + 1vw);
    text-indent: calc(5px + 1vw);
    color: #009BE2;
    border-radius: 9px;

   -webkit-appearance: none;
   -moz-appearance: none;
    appearance: none;

    text-align: center;
    
}

#de{
//border-style: dashed;
text-align: center;
  height: 5%;
}

</style>
<style>

.back_button{
  width: 7.78vw;
  height: 7.78vw;
  margin: 6.01vw 0 0 7.68vw;
  
}


</style>
