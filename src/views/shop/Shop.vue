<template>
  <div class="shop">
    <scroll ref='scr' @scroll="showbacktop" @pulling-up="pullup1" :pullUpLoad="true">
      <search-bar></search-bar>
      <shop-recommand1></shop-recommand1>
      <shop-recommand2></shop-recommand2>
      <placeholder></placeholder>
      <goods :homegoods="shops"></goods>
      <back-top @click.native="toTop" v-show="isShow"></back-top>
    </scroll>
    
  </div>
</template>

<script>
import SearchBar from '@/components/common/searchbar/SearchBar.vue'
import ShopRecommand1 from '@/components/common/recommand/Shoprecommand1.vue'
import ShopRecommand2 from '@/components/common/recommand/Shoprecommand2.vue'
import placeholder from '@/components/common/kongbai/placeholder.vue'
import Goods from '@/components/affair/goods/ShopGoods.vue'
import shops1 from '@/assets/json/shops1.json'
import Scroll from '@/components/common/betterscroll/Scroll.vue'

import BackTop from '@/components/affair/backtop/BackTop.vue'
export default {
  name: 'shop',
  components: {
    SearchBar,
    ShopRecommand1,
    ShopRecommand2,
    placeholder,
    Goods,
    Scroll,
    BackTop,
  },
  data(){
    return {
      shops:shops1[0].data.wall.docs,
      isShow:false,
    }
  },
  created(){

  },
  methods:{
    toTop(){
      this.$refs.scr.bs.scrollTo(0,0,400);
    },
    showbacktop(y){
      if((-y)>=1000){
        this.isShow = true;
      }else{
        this.isShow = false;
      }
    },
    pullup1(){
      console.log('加载新数据');
      this.this.$refs.scr.bs.finishpullUp();
    }
  },
}
</script>