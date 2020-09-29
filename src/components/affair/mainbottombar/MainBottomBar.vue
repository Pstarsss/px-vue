<template>
   <div class='bottombar'>
      <bottombar>
        <!-- <bottombaritem path="/mogu/homepage">
          <h4 slot='bottom-title'>首页</h4>
        </bottombaritem>
        <bottombaritem path="/mogu/shop">
          <h4 slot='bottom-title'>商城</h4>
        </bottombaritem>
        <bottombaritem path="/mogu/live">
          <h4 slot='bottom-title'>直播</h4>
        </bottombaritem>
        <bottombaritem path="/mogu/person">
          <h4 slot='bottom-title'>个人</h4>
        </bottombaritem> -->
        <bottombaritem v-for="(item,index) in infos" :key="index" :index="index" :path="infos[index].path"
         @ishow="re" :class="{'active':index==temp}">
          <h4 slot="bottom-title">{{item.titles}}</h4>
        </bottombaritem>
      </bottombar>
   </div>
</template>

<script>
import bottombar from '@/components/common/bottombar/Bottom.vue'
import bottombaritem from '@/components/common/bottombar/BottomItem.vue'
export default {
  components: {
    bottombar,
    bottombaritem
  },
  
  data() {
    return {
      temp:0,
      infos:[
        {
          titles:'首页',
          path:'/mogu/homepage'
        },
        {
          titles:'商城',
          path:'/mogu/shop'
        },
        {
          titles:'直播',
          path:'/mogu/live'
        },
        {
          titles:'个人',
          path:'/mogu/person'
        },
      ]
    };
  },
  methods:{
    re(val){
      this.temp = val;
    }
  },
  created(){
    let a2 = this.$route.path;
    switch (this.$route.path){
      case '/':this.temp = 0;break;
      case '/mogu/homepage' : this.temp = 0;break;
      case '/mogu/shop' : this.temp = 1;break;
      case '/mogu/live/hot' : this.temp = 2;break;
      case '/mogu/person' : this.temp = 3;break;
    }
   
  }
}
require('@/assets/css/base.css')
</script>
<style lang='less' scoped>
.bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 6vh;
    z-index: 10;
    border-top: 1px solid #abc;
    background-color:#fff;
}
.active{
  color:red;
}
</style>