<template>
  <div class="page flex-col">
    <div class="Body flex-col">
      <div class="box1 flex-col">

        <div class="layer1 flex-row">
          <back_button></back_button>
        </div>


        <div id="rand0">
          <img
          src="../assets/rand.png"
          @click="z_rand">
        </div>

        <div class="layer2 flex-row">
          <span class="txt2" style="color:rgb(0,160,233);font-weight: 900;">选择就餐食堂</span>
        </div>

        <div class="layer3 flex-row justify-between">
          <img
            class="img4"
            src="../assets/cactus.png"
          />

          <div class="layer4 flex-row">
            <div class="outer1 flex-col">
              <div class="box2 flex-col justify-between">
                <div class="wrap1 flex-col">
                  <img
                    class="img5"
                     @click="turn2range_1"
                    src="../assets/home_img.png"
                  />
                </div>
                <span class="word1">学一梅园</span>
              </div>
            </div>


            <div class="outer2 flex-col">
              <div class="wrap2 flex-col justify-between">
                <div class="main1 flex-col">
                  <div class="box3 flex-col" @click="turn2range_2"></div>
                </div>
                <span class="txt3">学二兰园</span>
              </div>
            </div>


            <div class="outer3 flex-col">
              <div class="mod2 flex-col justify-between">
                <div class="section1 flex-col">
                  <img
                    class="img6"
                    @click="turn2range_3"
                    src="../assets/home_img.png"
                  />
                </div>
                <span class="txt4">学三棠园</span>
              </div>
            </div>
            <div class="outer4 flex-col">
              <div class="bd1 flex-col justify-between">
                <div class="section2 flex-col">
                  <img
                    class="img7"
                    @click="turn2range_4"
                    src="../assets/home_img.png"
                  />
                </div>
                <span class="info1">学四竹园</span>
              </div>
            </div>
            <div class="outer5 flex-col">
              <div class="outer6 flex-col justify-between">
                <div class="outer7 flex-col">
                  <img
                    class="pic2"
                    @click="turn2range_5"
                    src="../assets/home_img.png"
                  />
                </div>
                <span class="info2">学五桃园</span>
              </div>
            </div>
            <div class="outer8 flex-col">
              <div class="section3 flex-col justify-between">
                <div class="bd2 flex-col">
                  <img
                    class="img8"
                    @click="turn2range_6"
                    src="../assets/home_img.png"
                  />
                </div>
                <span class="word2">留园</span>
              </div>
            </div>
            <div class="outer9 flex-col">
              <div class="group1 flex-col justify-between">
                <div class="group2 flex-col">
                  <img
                    class="img9"
                    @click="turn2range_7"
                    src="../assets/home_img.png"
                  />
                </div>
                <span class="info3">清真食堂</span>
              </div>
            </div>

            <div class="outer10 flex-col">
              <div class="group3 flex-col justify-between">
                <div class="box4 flex-col">
                  <img
                    class="pic3"
                    @click="turn2month"
                    src="../assets/home_img.png"
                  />
                </div>
                <span class="info4">月底套餐</span>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import back_button from '@/components/back_button'
import Axios from "axios";

export default {
  name: "home",
  data() {
    return {
      constants: {},
    };
  },
  methods: {
    z_rand(){
      Axios.all([
        Axios({
          //url: 'localhost:8080/SchM/rand',
          url:'http://150.158.143.166:8080/SchM/rand',
          params: {
            din: 0,
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

      }));
      this.$router.push("/fin");
    },
    turn2month(){
      //alert("bingo");
      this.$router.push("/month_chose");
    },

    turn2range_1(){
      this.$router.push("/range");
      this.$store.commit("din_1");
    },

    turn2range_2(){
      this.$router.push("/range");
      this.$store.commit("din_2");
    },
    turn2range_3(){
      this.$router.push("/range");
      this.$store.commit("din_3");
    },
    turn2range_4(){
      this.$router.push("/range");
      this.$store.commit("din_4");
    },
    turn2range_5(){
      this.$router.push("/range");
      this.$store.commit("din_5");
    },
    turn2range_6(){
      this.$router.push("/range");
      this.$store.commit("din_6");
    },
    turn2range_7(){
      this.$router.push("/range");
      this.$store.commit("din_7");
    },
  },
  components: {
      back_button,
  },
};
</script>

 
<style src="../css/common.css"/>
<style>
#rand0{
  width: 100%;
  margin-top: 5%;
}

#rand0>img{
  width: 8vw;
  height: 8vw;
  margin-left: 8%;
}
.page {
  background-color: rgba(255, 255, 255, 1);
  position: relative;
  width: 100vw;
  height: 197.78vw;
  overflow: hidden;
}

.Body {
  z-index: 2;
  position: relative;
  width: 100vw;
  height: 100%;
  margin-bottom: 0.1vw;
  overflow-y: auto;
}

.box1 {
  z-index: 2;
  height: 100%;
  background: url(../assets/bg0.png) -0.19vw
    0vw no-repeat;
  background-size: 100vw 177.12vw;
  width: 99.82vw;
  position: absolute;
  left: 0;
  top: 1.58vw;
}

.layer1 {
  width: 7.78vw;
  height: 7.78vw;
  margin: 6.01vw 0 0 7.68vw;
}

.layer2 {
  width: 44.17vw;
  height: 7.13vw;
  margin-left: 27.78vw;
}

.txt2 {
  width: 44.17vw;
  height: 7.13vw;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 7.22vw;
  font-family: STSong;
  text-align: left;
  white-space: nowrap;
  line-height: 7.23vw;
  display: block;
}

.layer3 {
  width: 72.78vw;
  height: 137.88vw;
  margin: 5.92vw 0 5.27vw 6.57vw;
}

.img4 {
  width: 11.02vw;
  height: 25vw;
  margin-top: 112.88vw;
}

.layer4 {
  width: 58.8vw;
  height: 129.63vw;
  flex-wrap: wrap;
}

.outer1 {
  width: 23.15vw;
  height: 29.08vw;
  margin: 0 12.5vw 4.44vw 0;
}

.box2 {
  width: 23.15vw;
  height: 29.08vw;
}

.wrap1 {
  box-shadow: 0px 3px 5px 0px rgba(70, 69, 69, 0.35);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 30px;
  height: 23.15vw;
  width: 23.15vw;
}

.img5 {
  width: 23.15vw;
  height: 23.15vw;
}

.word1 {
  width: 17.78vw;
  height: 4.26vw;
  overflow-wrap: break-word;
  color: rgba(55, 55, 55, 1);
  font-size: 4.44vw;
  font-family: STSong;
  text-align: left;
  white-space: nowrap;
  line-height: 4.45vw;
  display: block;
  margin: 1.66vw 0 0 2.59vw;
}

.outer2 {
  width: 23.15vw;
  height: 29.08vw;
  margin-bottom: 4.45vw;
}

.wrap2 {
  width: 23.15vw;
  height: 29.08vw;
}

.main1 {
  box-shadow: 0px 3px 5px 0px rgba(70, 69, 69, 0.35);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 30px;
  height: 23.15vw;
  width: 23.15vw;
}

.box3 {
  width: 23.06vw;
  height: 23.15vw;
  background: url(../assets/home_img.png) -0.1vw
    0vw no-repeat;
  background-size: 23.14vw 23.14vw;
}

.txt3 {
  width: 17.78vw;
  height: 4.26vw;
  overflow-wrap: break-word;
  color: rgba(55, 55, 55, 1);
  font-size: 4.44vw;
  font-family: STSong;
  text-align: left;
  white-space: nowrap;
  line-height: 4.45vw;
  display: block;
  margin: 1.66vw 0 0 2.49vw;
}

.outer3 {
  width: 23.15vw;
  height: 29.08vw;
  margin: 0 12.5vw 4.44vw 0;
}

.mod2 {
  width: 23.15vw;
  height: 29.08vw;
}

.section1 {
  box-shadow: 0px 3px 5px 0px rgba(70, 69, 69, 0.35);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 30px;
  height: 23.15vw;
  width: 23.15vw;
}

.img6 {
  width: 23.15vw;
  height: 23.15vw;
}

.txt4 {
  width: 17.78vw;
  height: 4.26vw;
  overflow-wrap: break-word;
  color: rgba(55, 55, 55, 1);
  font-size: 4.44vw;
  font-family: STSong;
  text-align: left;
  white-space: nowrap;
  line-height: 4.45vw;
  display: block;
  margin: 1.66vw 0 0 2.59vw;
}

.outer4 {
  width: 23.15vw;
  height: 29.08vw;
  margin-bottom: 4.45vw;
}

.bd1 {
  width: 23.15vw;
  height: 29.08vw;
}

.section2 {
  box-shadow: 0px 3px 5px 0px rgba(70, 69, 69, 0.35);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 30px;
  height: 23.15vw;
  width: 23.15vw;
}

.img7 {
  width: 23.15vw;
  height: 23.15vw;
}

.info1 {
  width: 17.78vw;
  height: 4.26vw;
  overflow-wrap: break-word;
  color: rgba(55, 55, 55, 1);
  font-size: 4.44vw;
  font-family: STSong;
  text-align: left;
  white-space: nowrap;
  line-height: 4.45vw;
  display: block;
  margin: 1.66vw 0 0 2.49vw;
}

.outer5 {
  width: 23.15vw;
  height: 29.17vw;
  margin: 0 12.5vw 4.44vw 0;
}

.outer6 {
  width: 23.15vw;
  height: 29.17vw;
}

.outer7 {
  box-shadow: 0px 3px 5px 0px rgba(70, 69, 69, 0.35);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 30px;
  height: 23.15vw;
  width: 23.15vw;
}

.pic2 {
  width: 23.15vw;
  height: 23.15vw;
}

.info2 {
  width: 17.78vw;
  height: 4.36vw;
  overflow-wrap: break-word;
  color: rgba(55, 55, 55, 1);
  font-size: 4.44vw;
  font-family: STSong;
  text-align: left;
  white-space: nowrap;
  line-height: 4.45vw;
  display: block;
  margin: 1.66vw 0 0 2.77vw;
}

.outer8 {
  width: 23.15vw;
  height: 29.08vw;
  margin-bottom: 4.45vw;
}

.section3 {
  width: 23.15vw;
  height: 29.08vw;
}

.bd2 {
  box-shadow: 0px 3px 5px 0px rgba(70, 69, 69, 0.35);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 30px;
  height: 23.15vw;
  width: 23.15vw;
}

.img8 {
  width: 23.15vw;
  height: 23.15vw;
}

.word2 {
  width: 8.43vw;
  height: 4.26vw;
  overflow-wrap: break-word;
  color: rgba(55, 55, 55, 1);
  font-size: 4.44vw;
  font-family: STSong;
  text-align: left;
  white-space: nowrap;
  line-height: 4.45vw;
  display: block;
  margin: 1.66vw 0 0 7.31vw;
}

.outer9 {
  width: 23.15vw;
  height: 29.08vw;
  margin: 0 12.5vw 4.44vw 0;
}

.group1 {
  width: 23.15vw;
  height: 29.08vw;
}

.group2 {
  box-shadow: 0px 3px 5px 0px rgba(70, 69, 69, 0.35);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 30px;
  height: 23.15vw;
  width: 23.15vw;
}

.img9 {
  width: 23.15vw;
  height: 23.15vw;
}

.info3 {
  width: 18.06vw;
  height: 4.26vw;
  overflow-wrap: break-word;
  color: rgba(55, 55, 55, 1);
  font-size: 4.44vw;
  font-family: STSong;
  text-align: left;
  white-space: nowrap;
  line-height: 4.45vw;
  display: block;
  margin: 1.66vw 0 0 2.31vw;
}

.outer10 {
  width: 23.15vw;
  height: 29.08vw;
  margin-bottom: 4.45vw;
}

.group3 {
  width: 23.15vw;
  height: 29.08vw;
}

.box4 {
  box-shadow: 0px 3px 5px 0px rgba(70, 69, 69, 0.35);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 30px;
  height: 23.15vw;
  width: 23.15vw;
}

.pic3 {
  width: 23.15vw;
  height: 23.15vw;
}

.info4 {
  width: 18.06vw;
  height: 4.26vw;
  overflow-wrap: break-word;
  color: rgba(55, 55, 55, 1);
  font-size: 4.44vw;
  font-family: STSong;
  text-align: left;
  white-space: nowrap;
  line-height: 4.45vw;
  display: block;
  margin: 1.66vw 0 0 2.4vw;
}

</style>
