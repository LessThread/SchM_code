<template>

  <div class="month">
    <div class="background">
    </div>

    <!-- 背景图 -->
    <img
        class="cactus"
        src="../assets/cactus.png"
    />
    <!-- 背景图 -->

    <div class="back_button">
      <back_button></back_button>
    </div>

    <div id="mon_txt" style="color:rgb(0,160,233);font-weight: 900; font-size: 25px;">
      <p>-月底套餐-</p>
      <p> 可以选择以下食堂</p>
    </div>


    <div id="cm_box">
      <div class="cm1">
        <img src="../assets/home_img.png" @click="to1">
      </div>
      <div class="cm1">
        <img src="../assets/home_img.png" @click="to1">
      </div>

    </div>

    <div id="cm_box2">
      <div class="cm1">
        <p>xueyi</p>
      </div>
      <div class="cm1">
        <p>liou</p>
      </div>

    </div>


    <div id="button-div" v-show="0">

      <div class="button-down">
        <button class="month-button">&nbsp;&nbsp;&nbsp;就它了&nbsp; &nbsp;&nbsp;</button>
      </div>

      <div class="button-down">
        <button class="month-button">&nbsp;&nbsp;&nbsp;换一波&nbsp; &nbsp;&nbsp;</button>
      </div>
    </div>


  </div>
</template>

<script>
import back_button from '@/components/back_button'
//import Axios from "axios";

export default {
  name: 'chose_month',
  components: {
    back_button,
  },
  methods:{
    to1(){
      this.$router.push("/month")
    }
  },

  data(){
    return{
    }
  }
}
</script>

<style>
#mon_txt{
  height: 20%;
  width: 80%;
  //border-style: dashed;
  margin-left: 10%;
  margin-top: 10%;
  text-align: center;
}
#cm_box2{
  height: 50%;
  width: 80%;
  //border-style: dashed;
  display: flex;
  justify-content: space-between;
  margin-top: 0%;
  text-align: center;
  margin-left: 10%;
}
#cm_box{
  height: 50%;
  width: 80%;
  //border-style: dashed;
  display: flex;
  justify-content: space-between;
  margin-top: 20%;
  text-align: center;
  margin-left: 10%;
}

.cm1{
  height: 50%;
  width: 40%;
  text-align: center;
}

.cm1>img{
  height:80%;
  width: 80%;
}


.back_button{
  width: 7.78vw;
  height: 7.78vw;
  margin: 6.01vw 0 0 7.68vw;

}



.cactus {
  width: 11.9vw;
  height: 25.5vw;
  margin-top: 140%;
  margin-left: 6%;

  z-index:-99;
  position: absolute;
}


#button-div{
  display: flex;
  justify-content: space-between;

  margin:5%;

}

.button-down{
  margin:10%;
  width: 30%;
  height: 10%;
  text-align: center;
}

.month-button {
  box-shadow:inset 0px 10px 16px -9px #bbdaf7;
  background:linear-gradient(to bottom, #79bbff 5%, #378de5 100%);
  background-color:#79bbff;
  border-radius:6px;
  border:1px solid #84bbf3;
  display:inline-block;
  cursor:pointer;
  color:#ffffff;
  font-family:Arial;
  font-size:8px;
  font-weight:bold;
  padding:8px 9px;
  text-decoration:none;
  text-shadow:-1px 0px 14px #528ecc;
}
.month-button:hover {
  background:linear-gradient(to bottom, #378de5 5%, #79bbff 100%);
  background-color:#378de5;
}
.month-button:active {
  position:relative;
  top:1px;
}

</style>
