<template>
  <div id="app">
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
    <div id="cpp">请使用手机或竖屏访问</div>
    <div id="bpp">

    <transition :name="transitionName">
      <router-view></router-view>
   </transition>
  </div>
<!--    <div id="login" v-on:mousedown.left="createLoves($event)" v-on:mouseup="removeSmallHert">-->
<!--		<WaveItem ref="background"></WaveItem>	-->
<!--   </div>-->

  </div>
</template>

<style>
#cpp{
  display: none;
}
#app{
  width: 100%;
  height: 95%;
}

#login{
  display: none;
	//position: absolute;
	/*top: 0;*/
	/*left: 0;*/
	width: 70%;
	/*height: 100%;*/
}
@media only screen and (min-width: 600px) {
  /*body {background-color: lightblue;}*/
  #bpp{
    display: none;
  }

  #cpp{
    display: block;
    margin-top: 40%;
    margin-left: 45%;
  }

  #login{
    display: none;
  }
}
</style>

<style src="./css/tra.css"/>

<script>

//import WaveItem from "./components/wave2.vue"


export default {
  name: 'App',
  components:{
    //WaveItem,
  },
  data () {
    return {
      transitionName:''
    }
  },
  watch: {
    // 使用watch 监听$router的变化
    $route (to, from) {
      // 如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index){
        // 设置动画名称
        this.transitionName = 'slide-right';
      } else{
        this.transitionName = 'slide-right';
      }
    }
  },

  methods:{
    // createLoves(){
    //   setTimeout(this.$refs.background.createLoves(event),10000);
		// 	},
		// 	removeSmallHert(){
    //   setTimeout(this.$refs.background.removeSmallHert(),10000);
		// 	}
  }
}
</script>

