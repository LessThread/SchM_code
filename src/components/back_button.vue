<template>
  <div id="back_button">
  <img
            class="img3"
            referrerpolicy="no-referrer"
            @click="back"
            src="../assets/back2.png"
          />
<!--    <img-->
<!--        class="img3"-->
<!--        referrerpolicy="no-referrer"-->
<!--        src="../assets/home.png"-->
<!--        @click="home"-->
<!--    />-->
  </div>
</template>

<script>
export default {
  name: 'back_button',
  methods: {
    back(){
      this.$router.go(-1);
      this.$store.commit("rest");
    },
    home(){
      this.$router.push("/");
      this.$store.commit("rest");
    }
  },
}
</script>

<style>
#back_button{
  width: 100%;
}
.img3 {
  width: 7.78vw;
  height: 7.78vw;
}
</style>