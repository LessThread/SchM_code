import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// Axios({
//  // url: 'http://150.158.143.166:8080/SchM/rand'
//  url: 'http://123.207.32.32:8000/home/multidata'
// }).then(res => {
//   console.log(res);
// })



//Axios.defaults.baseURL = 'http://150.158.143.166:8080'
Axios.defaults.timeout = 5000