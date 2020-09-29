<template>
   <div class='app'>
     <main-bottom-bar ></main-bottom-bar>
     <TopAdvertise ></TopAdvertise>
     <router-view></router-view>
   </div>
</template>

<script>
import MainBottomBar from '@/components/affair/mainbottombar/MainBottomBar.vue'
import TopAdvertise from '@/components/common/topadvertise/Advertise.vue'




// import {getadvertisedata} from '@/network/index.js'

// import goodsdata  from '@/assets/json/goods.json'
// import recommanddata  from '@/assets/json/recommand.json'

export default {
  components: {
    MainBottomBar,
    TopAdvertise,

  },
  data() {
    return {
      

    };
  },
  methods:{

  },
  computed:{
    
  },
  watch:{

  },
  created(){

  },

}
require('@/assets/css/normalize.css')
</script>
<style lang='less' scoped>
.app{
  position: relative;
}
</style>