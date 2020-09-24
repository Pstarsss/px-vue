<template>
  <div class="live">
    <scroll :pullUpLoad="true">
      <div class="banners">
        <span v-for="(item,index) in titles" :key="index" @click="changeColor(index)" :class="{bot:(index==temp)}">{{item}}</span>
      </div>
      <router-view></router-view>
    </scroll>
  </div>
</template>

<script>

import Scroll from '@/components/common/betterscroll/Scroll.vue'
export default {
  name: 'Home',
  components: {
    Scroll
  },
  data(){
    return{
      titles:['热门','关注','穿搭','美妆'],
      temp:0,
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
        
      
    }
  },
}
</script>
<style lang="less" scoped>
.banners{
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 2.3vw;
    border-bottom: 1px solid #aaaaaa78;
    & span{
      text-align: center;
      margin: 0 auto;
      height: 100%;
      vertical-align: bottom;
      padding: 2vw 5vw;
      
      border-radius: 1px;
    }
}
.bot{
  border-bottom: 2px solid red;
}
</style>
