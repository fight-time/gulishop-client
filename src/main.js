import Vue from 'vue'
// import App from './App.vue'
import App from '@/App'
// @是src文件的一个别名，是小名，代表的就是src的路径

Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),
})
