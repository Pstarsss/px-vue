<template>
   <div class='classify'>
     <search-bar></search-bar>
     <scroll class="wrapper">
       <classify-list :list='list'></classify-list>
     </scroll>
   </div>
</template>

<script>
import SearchBar from '@/components/common/searchbar/SearchBar.vue'
import Scroll from '@/components/common/betterscroll/Scroll.vue'
import ClassifyList from './Classifylist.vue'
import {getclass} from '@/network/'
export default {
  components: {
    SearchBar,
    Scroll,
    ClassifyList
  },
  data() {
    return {
      list:'',
    };
  },
  created(){
    getclass().then(res=>{
      
      this.list = res.data.category.list;
    })
  }
}
</script>
<style lang='less' scoped>
.wrapper{
  height:calc(100% - 70px);
}
.classify{
  position:absolute;
  top:0;
  width: 100vw;
  height:100vh;
  z-index: 100;
  overflow: hidden;
  background-color: #fff;
}
</style>