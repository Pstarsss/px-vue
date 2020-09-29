<template>
   <div class='C-List'>
       <ul class="ulist">
        <router-link v-for="(i,j) in list" :key="j" to="/mogu/classify/pa" class="c-item" :class="{active:j==temp}" @click.native="changes(j)">{{i.title}}</router-link>
      </ul>
      <div class="ulist2">
        <router-view></router-view>
      </div>
     
   </div>
</template>

<script>
import Scroll from '@/components/common/betterscroll/Scroll.vue'
import {getclass2} from '@/network/index.js'
export default {
  props:{
    list:{
      type:[Array,String]
    }
  },
  components: {
    Scroll
  },
  data() {
    return {
      temp:0,
    };
  },
  methods:{
    changes(index){
      this.temp = index;
    }
  },
  created(){

  }
}
</script>
<style lang='less' scoped>
.active{
  color:red;
}
.C-List{
  display: flex;

}
ul.ulist{
    display: flex;
    flex-flow: column;
    background-color: #dad2c254;
    align-items: center;
    width: 20%;
    & .c-item{
      padding:3vw 2vw;
      font-size: 4vw;
    }
}
.ulist2{
  width:80%;
}
</style>