<template>
  <div id="check_box">

 <div class="div_box">
    <div id="op_box">

                <div class="label_box">
                 <label class="lab">
                    <input type="checkbox" name="spicy" v-model="$store.state.Spicy" value="spicy">
                    <div>辣度</div>
                    
                </label>
                <label class="lab">
                    <input type="checkbox" name="price" v-model="$store.state.Price" value="price">
                    <div>价格</div>
                </label>
                  <label class="lab">
                    <input type="checkbox" name="spice" v-model="$store.state.Spice" value="spice">
                    <div>种类</div>
                  </label>

                 </div>

                <div class="label_box" >
                <label class="lab" v-show="0">
                    <input type="checkbox" name="hobby">
                    <div>随机</div>
                </label>



                </div>

    </div>



   <div id="next_box">
        <button class="next" @click.prevent="next"
                v-show="$store.state.Price||$store.state.Spice||$store.state.Spicy">
               下一步
        </button>

     <button class="next" @click.prevent="next2"
             v-show="!$store.state.Price&&!$store.state.Spice&&!$store.state.Spicy">
       随机
     </button>



        </div>

</div>
 
  </div>
</template>

<script>
//import Axios from "axios";

import Axios from "axios";

export default {
  name: 'check_box',
  data() {
      return {
          isSpicy: false,
          isPrice: false,
          test: [],
      }
  },
  methods: {
     next(){
     this.$router.push("/chose");
     this.$emit("toRange",this.test);
    // alert(this.$store.state.Spicy);
    },
    next2(){
      this.$router.push("/fin");
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
    },
    random(){
    }
  },
}
</script>


<style>
.lab{
/*text-align: center;*/
/*left: 10%;*/
/*  right :10%;*/
}

#op_box{
  //border-style: dashed;
  text-align: center;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: space-between;

}

.next {
	/*box-shadow:inset 0px -3px 7px 0px #29bbff;*/
  background: rgba(35, 185, 243, 0.96);
/*linear-gradient(to bottom, #2dabf9 5%, #0688fa 100%);*/
  border-radius: 25px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-size:18px;
	padding:9px 23px;
	text-decoration:none;
  border-style: solid;
  border-width: 8px;
  border-color: #a3ddf5;

}
/*.next:hover {*/
/*  background: #0688fa linear-gradient(to bottom, #0688fa 5%, #2dabf9 100%);*/
/*}*/
/*.next:active {*/
/*	position:relative;*/
/*	top:1px;*/
/*}*/
#next_box
{
 //border-style: dashed;
 text-align: center;
}





.label_box{
  //border-style: dashed;
  text-align: center;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 5%;
  margin-top: 5%;
}
 
.div_box {
	margin:0 auto;
  list-style:none;
	width:80%;
  padding: 2px;
  text-align: center;
  height: 50%;

}
.label_box>label {
	display:block;
	float:left;
	margin:0 10px 10px 0;
	position:relative;
	overflow:hidden;
}

.label_box>label>input {
	position:absolute;
	top:0;
	left:-20px;
}
.label_box>label>div {
	width: 80px;
	text-align:center;
	border:#0090C7 solid 3px;
	height:40px;
	line-height:40px;
	color:#0090C7;
	user-select:none;
	overflow:hidden;
	position:relative;
  border-radius: 15px;
}

.label_box>label>input:checked + div {
	border: #1C1EFF solid 3px;
	color:#1C1EFF;
  border-radius: 15px;
}

.label_box>label>input:checked + div:after {
	content:'';
	display:block;
	width:20px;
	height:20px;
	background-color:#1C1EFF;
	transform:skewY(-45deg);
	position:absolute;
	bottom:-10px;
	right:0;
	z-index:1;
   border-radius: 5px;
}
.label_box>label>input:checked + div:before {
	content:'';
	display:block;
	width:3px;
	height:8px;
	border-right:#ffffff solid 2px;
	border-bottom:#ffffff solid 2px;
	transform:rotate(35deg);
	position:absolute;
	bottom:2px;
	right:4px;
	z-index:2;
   border-radius: 5px;
}

/*.label_box>label>div {*/
/*  width: 80px;*/
/*  text-align:center;*/
/*  border:#7dc5eb solid 5px;*/
/*  height:40px;*/
/*  line-height:40px;*/
/*  color: #889da9;*/
/*  user-select:none;*/
/*  overflow:hidden;*/
/*  position:relative;*/
/*  border-radius: 20px;*/
/*  font-size: 18px;*/
/*  font-weight: 900;*/
/*  box-shadow:0 0 1px #000 inset;*/
/*}*/

/*.label_box>label>input:checked + div {*/
/*  border:  #7dc5eb solid 5px;*/
/*  background-color: #7dc5eb;*/
/*  border-radius: 20px;*/
/*  color:white;*/
/*  font-size: 18px;*/
/*  font-weight: 900;*/
/*  box-shadow:2px 2px 1px #cecbcb;*/
/*}*/
</style>