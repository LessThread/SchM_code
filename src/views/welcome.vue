<template>
   <div class="welcome">
      <div id="wel_img" >
        <img src="../assets/wel2.png" @click="go_on" alt="..."/>
      </div>
     <button id="kk" @click="go_on">开始使用</button>

   </div>

</template>

<script>
export default {
    name: 'welcome',
    methods: {
        go_on(){
            this.$router.push("/home");
        }
    },
}
</script>

<style>
#wel_img{
width: 100%;
height: 100%;
position: absolute;
z-index: 0;
}

#wel_img>img{
width: 100%;
height: 100%;
position: absolute;
}

/*#wel_button{*/
/*height:10%;*/
/*margin-top: 135%;*/
/*margin-left: 30%;*/
/*//border-style: dashed;*/
/*position: absolute;*/
/*}*/

#kk {
  display: none;
	box-shadow: 0 0 3px 1px #1564ad;
  background: #79bbff linear-gradient(to bottom, #79bbff 5%, #378de5 100%);
  border-radius:18px;
	border:4px solid #337bc4;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:18px;
	font-weight:bold;
	padding:5% 10%;
	text-decoration:none;
	text-shadow:0px 4px 2px #528ecc;
  //position: absolute;
  margin-top: 165%;
  margin-left: 33%;
}

#wel_button>button:active {
	position:relative;
	top:1px;
}
</style>