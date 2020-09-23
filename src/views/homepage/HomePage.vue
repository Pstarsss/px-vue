<template>
  <div class="homepage">
    
    
    <scroll ref="scr" @scroll="showbacktop" @pulling-up="pullup1" :pullUpLoad="true">
      <search-bar></search-bar>
      <swiper></swiper>
      <recommand></recommand>
      <goods :homegoods='homegoods'></goods>
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
import homegood from '@/assets/json/goods.json'


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
      homegoods:homegood.data.list
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
     
  }
}
</script>
<style lang="less" scoped>

</style>
