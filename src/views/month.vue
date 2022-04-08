<template>
  <div class="month">
       <div class="background_month">
       </div>



        <div class="back_button">
          <back_button></back_button>
        </div>

        <div class="layer2_1 flex-row">
          <span class="txt2" style="color:rgb(0,160,233);font-weight: 900;">-月底套餐-</span>
        </div>

        <div id="food_month" style="color:rgb(0,160,233);">
          <p>食堂：留园</p>
          <p>窗口：份饭窗口附近</p>
        </div>

        <img
           class="month_pic"
           src="../assets/0.jpg"
          />

    <br>
    <br>
          <div id="month_text"
          style="color:rgb(102,102,102);">
            资金短缺经费不足？<br><br>
            没关系<br><br>
            月底套餐包你满意
          </div>



          <div id="button_div">

          <div class="button_down">
          <button class="month_button">&nbsp;&nbsp;&nbsp;评价一下&nbsp; &nbsp;&nbsp;</button>
          </div>
          
          <div class="button_down">
          <button class="month_button">查看所有评价</button>
          </div>

          </div>



          
         
      
    
  </div>
</template>

<script>
import back_button from '@/components/back_button'

export default {
  name: 'month',
  components: {
      back_button,
  }
}
</script>


<style>
#food_month{
  width: 50%;
  margin-left: 20%;
}

.background_month {
  height: 100%;
  background-color: red; /* 浏览器不支持时显示 */
  background-image: linear-gradient(#fafbfb,#d7f0fb);
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
  margin:10%;
  width: 30%;
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
