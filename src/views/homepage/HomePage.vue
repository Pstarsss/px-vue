<template>
  <div class="homepage">
    <search-bar></search-bar>
    
    <scroll ref="scr" @scroll="showbacktop" @pulling-up="pullup1" :pullUpLoad="true">
      <swiper></swiper>
      <recommand></recommand>
      <goods></goods>
    </scroll>
    <back-top @click.native="toTop" v-show="isShow"></back-top>
  </div>
</template>

<script>
import SearchBar from '@/components/common/searchbar/SearchBar.vue'
import Swiper from '@/components/common/swiper/Swiper.vue'
import Recommand from '@/components/common/recommand/Recommand.vue'
import Goods from '@/components/affair/goods/Goods.vue'
import Scroll from '@/components/common/betterscroll/Scroll.vue'
import BackTop from '@/components/affair/backtop/BackTop.vue'

export default {
  name: 'homepage',
  components: {
    SearchBar,
    Swiper,
    Recommand,



 
    Scroll,
    Goods,
    BackTop,
  },
  data(){
    return{
      isShow:false,
      lists:'',
    }
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
  created(){
    
    // console.log(Recommand.components.recommand.data[140653].list);
  }
}
</script>
<style lang="less" scoped>

</style>
