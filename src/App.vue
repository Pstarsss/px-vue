<template>
   <div class='app'>
     
     <router-view></router-view>
     <main-bottom-bar ></main-bottom-bar>
     <TopAdvertise></TopAdvertise>
   </div>
</template>

<script>
import MainBottomBar from '@/components/affair/mainbottombar/MainBottomBar.vue'
import TopAdvertise from '@/components/common/topadvertise/Advertise.vue'




// import {getadvertisedata} from '@/network/index.js'

import goodsdata  from '@/assets/json/goods.json'
import recommanddata  from '@/assets/json/recommand.json'

export default {
  components: {
    MainBottomBar,
    TopAdvertise,


 
    // getadvertisedata,
  },
  data() {
    return {
      gooddata:'',
      recommanddata:''
    };
  },
  methods:{
  },
  created(){
  }
}
</script>
<style lang='less' scoped>
</style>