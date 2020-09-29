<template>
   <div class='classify'>
     <search-bar></search-bar>
     <scroll>
       <div>分类页面</div>
     </scroll>
   </div>
</template>

<script>
import SearchBar from '@/components/common/searchbar/SearchBar.vue'
import Scroll from '@/components/common/betterscroll/Scroll.vue'
export default {
  components: {
    SearchBar,
    Scroll
  },
  data() {
    return {
      
    };
  },

}
</script>
<style lang='less' scoped>
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