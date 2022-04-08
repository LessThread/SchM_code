<template>
  <div class="res">
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

        <div class="layer2_1 flex-row">
          <span class="txt2" style="color:rgb(0,160,233);font-weight: 900;">详情介绍</span>
        </div>

        <img
           class="month_pic"
           src="../assets/food_0.png"
          />

          <div id="month_text">
          <p style="color:DodgerBlue;">介绍</p>

            <div v-if="$store.state.isFirst">
              {{$store.state.randomFood_1}}<br>
              {{$store.state.randomFood_1_2}}<br>
              {{$store.state.randomFood_1_3}}<br>
              {{$store.state.hot}}<br>
              {{$store.state.hot2}}<br>
              {{$store.state.hot3}}
            </div>

            <div v-if="$store.state.isSecond">
              {{$store.state.randomFood_2}}<br>
              {{$store.state.randomFood_2_2}}<br>
              {{$store.state.randomFood_2_3}}<br>
              {{$store.state.hot}}<br>
              {{$store.state.hot2}}<br>
              {{$store.state.hot3}}
            </div>

            <div v-if="$store.state.isThird">
            {{$store.state.randomFood_3}}<br>
            {{$store.state.randomFood_3_2}}<br>
            {{$store.state.randomFood_3_3}}<br>
            {{$store.state.hot}}<br>
              {{$store.state.hot2}}<br>
              {{$store.state.hot3}}
          </div>

          </div>



          <div id="button_div">

          <div class="button_down">
          <button class="next2" @click="jump">&nbsp;&nbsp;&nbsp;评价一下&nbsp; &nbsp;&nbsp;</button>
          </div>
          
          <div class="button_down">
          <button class="next2" @click="endUse">&nbsp;&nbsp;&nbsp;谢谢使用&nbsp; &nbsp;&nbsp;</button>
          </div>

          </div>
    
  </div>
</template>

<script>
import back_button from '@/components/back_button'

export default {
  name: 'result',
  components: {
      back_button,
  },
  methods:{
    jump(){
      window.location.href ="https://tieba.baidu.com/f?kw=%CC%EC%BD%F2%B4%F3%D1%A7&fr=ala0&tpl=5&dyTabStr=MCwzLDEsMiw2LDQsNSw3LDgsOQ%3D%3D&p_tk=7436wl%2B8eMgT5YKUqlIoM1AaTVMlKggjDxff1i4tnpNpAGelV3Sy1wq4foW4iNT5Obzo3nOo38MQ1E159FoXmaauvNKRynqNaNJ2DiLsB%2FF6fNy%2B%2Fu21BuyKh9MHz%2BhD1qhB&p_timestamp=1646124156&p_sign=12699b62adc8433796f207356d9ace6d&p_signature=098e2935ce442dd9fb604bd7f226b658&__pc2ps_ab=7436wl%2B8eMgT5YKUqlIoM1AaTVMlKggjDxff1i4tnpNpAGelV3Sy1wq4foW4iNT5Obzo3nOo38MQ1E159FoXmaauvNKRynqNaNJ2DiLsB%2FF6fNy%2B%2Fu21BuyKh9MHz%2BhD1qhB|1646124156|098e2935ce442dd9fb604bd7f226b658|12699b62adc8433796f207356d9ace6d"
    },
    endUse(){
      this.$router.push("/");
    },
  }
}
</script>


<style>
.background {
  height: 100%;
  background: url(../assets/bg0.png) -0.19vw
    0vw no-repeat;
  background-size: 100% 100%;
  width: 100%;
  left: 0;
  top: 1.58vw;
  z-index:-99;
  position: absolute;
  
}

.back_button{
  width: 7.78vw;
  height: 7.78vw;
  margin: 6.01vw 0 0 7.68vw;
  
}


.layer2_1 {
  width: 44.17vw;
  height: 7.13vw;
  margin-left: 27.78vw;
  
  margin: 25px 50px 25px 100px;
}

.txt2 {
  width: 44.17vw;
  height: 7.13vw;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 7.22vw;
  font-family: STSong;
  text-align: center;
  white-space: nowrap;
  line-height: 7.23vw;
  display: block;
  
}


.cactus {
  width: 11.9vw;
  height: 25.5vw;
  margin-top: 140%;
  margin-left: 6%;
  
  z-index:-99;
  position: absolute;
}


.outer10_1 {
  width: 80%;
  height: 50%;
  margin-bottom: 10%;
  
}


.month_pic {
  width: 80%;
  height: 30%;
  
  margin-left: 10%;
}

#month_text{
  width: 80%;
  height: 30%;
  
  margin-left: 10%;
  text-align: center;
}

#button_div{
  display: flex;
  justify-content: space-between;
  
  margin:5%;

}

.button_down{
  margin:5%;
  width: 40%;
  height: 10%;
  
  text-align: center;
}

.month_button {
	box-shadow:inset 0px 10px 16px -9px #bbdaf7;
  background: #79bbff linear-gradient(to bottom, #79bbff 5%, #378de5 100%);
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
.month_button:hover {
  background: #378de5 linear-gradient(to bottom, #378de5 5%, #79bbff 100%);
}
.month_button:active {
	position:relative;
	top:1px;
}

</style>
