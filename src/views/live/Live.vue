<template>
  <div class="live">
    <div class="banners bann2" >
        <span v-for="(item,index) in titles" :key="index" @click="changeColor(index)" :class="{bot:(index==temp)}" 
         >{{item}}</span>
    </div>
    <scroll :pullUpLoad="true" :probeType="3" @scroll="livescroll" ref="scroll">
      <!-- <div class="banners">
        <span v-for="(item,index) in titles" :key="index" @click="changeColor(index)" :class="{bot:(index==temp)}">{{item}}</span>
      </div> -->
      <div>
        <keep-alive exclude="">
          <router-view></router-view>
        </keep-alive>
      </div>
      
      
    </scroll>
    <back-top @click.native="toTop" v-show="isShow"></back-top>
  </div>
</template>

<script>

import Scroll from '@/components/common/betterscroll/Scroll.vue'
import BackTop from '@/components/affair/backtop/BackTop.vue'
export default {
  name: 'Home',
  components: {
    Scroll,
    BackTop
  },
  data(){
    return{
      titles:['热门','关注','穿搭','美妆'],
      temp:0,
      isShow:false,
      isShow2:false,
    }
  },
  methods:{

    changeColor(index){
      this.temp = index;
      switch (index){
        case 0 : this.$router.push('/mogu/live/hot');break;
        case 1 : this.$router.push('/mogu/live/concern');break;
        case 2 : this.$router.push('/mogu/live/dress');break;
        case 3 : this.$router.push('/mogu/live/beauty');break;
      }
    },
    toTop(){
      this.$refs.scroll.bs.scrollTo(0,0,400);
    },
    livescroll(y){
      (-y) > 1000 ? this.isShow = true: this.isShow = false;
    
    },

  },
  activated(){
    console.log('11');
  },
  deactivated(){
    console.log('12');
  }
}
</script>
<style lang="less" scoped>
.banners{
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 2.3vw;
    border-bottom: 1px solid #aaaaaa78;
    transition:all 0.3s;
    & span{
      text-align: center;
      margin: 0 auto;
      height: 100%;
      vertical-align: bottom;
      padding: 2vw 5vw;
      
      border-radius: 1px;
    }
}
.bann2{
  position: relative;
}  

.bot{
  border-bottom: 2px solid red;
}
</style>
