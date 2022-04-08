<template>
  <div class="month">
       <div class="background_range">
       </div>

        <div class="back_button">
          <back_button></back_button>
        </div>

        <div class="layer2_1 flex-row">
          <span class="txt2">筛选</span>
        </div>

        <img
           class="range_pic"
           src="../assets/food1.png"
          />

    <br><br>


        <div id="search_box">

          <div id="search_img">
          <img
                id="egg"
                src="../assets/egg.png"
              />
          </div>

          <div id="input_box">
          <input placeholder="请输入筛选条件" id="search_input">
          </div>

          <br>


        </div>

        <check_box @toRange='toMe'></check_box>



  </div>
</template>

<script>
import back_button from '@/components/back_button'
import check_box from '@/components/check_box'

export default {
  name: 'range',
  data() {
    return {
      fathermsg: '',
    }
  },
  components: {
      back_button,
      check_box,
  },
  methods: {
    toMe(data){
      console.log(data);
      this.fathermsg=data;
    }
   
  },
}
</script>

<style src="../css/wave.css"/>

<style>
.background_range {
  height: 100%;
  background: url("../assets/bg2.png");
  background-size: 100% 100%;
  width: 100%;
  left: 0;
  top: 0;
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



.range_pic {
  width: 50%;
  height: 10%;
  margin-left: 25%;
}
.range_pic>img{
  width: 10vm;
  height: 10vm;
}

#search_box{
  width: 80%;
  height: 10%;
  margin-left: 10%;
  text-align: center;
  background: #79bbff;
  border-radius:6px;
  display: flex;
}

#search_input:focus{
    border-color: #001100;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)
}

#search_input{
  font-family: "Microsoft soft";
  text-align: center;
  -web-kit-appearance: none;
   -moz-appearance: none;
   height: 80%;
  outline: none 0;
  font-size:1.0em;
   border-radius:4px;
   border:1px solid #c8cccf;
   color:#6a6f77;
   margin-top:2%;

   
}

#search_img{
left: 10%;
width: 25%;
height: 100%;

}

#egg{
margin-top: 10%;
width: 40%;
height: 50%;
}

#input_box{
width: 70%;
margin-right:0%;
}

</style>
