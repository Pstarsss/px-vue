<template>
  <div class="homepage">
    <search-bar></search-bar>
    
    <scroll>
      <swiper></swiper>
      <recommand></recommand>
      <goods></goods>
    </scroll>
    
  </div>
</template>

<script>
import SearchBar from '@/components/common/searchbar/SearchBar.vue'
import Swiper from '@/components/common/swiper/Swiper.vue'
import Recommand from '@/components/common/recommand/Recommand.vue'
import Goods from '@/components/affair/goods/Goods.vue'
import Scroll from '@/components/common/betterscroll/Scroll.vue'
export default {
  name: 'homepage',
  components: {
    SearchBar,
    Swiper,
    Recommand,

    Scroll,
    Goods,
  },
  methods:{

  },
  created(){
    // console.log(Recommand.components.recommand.data[140653].list);
  }
}
</script>
<style lang="less" scoped>

</style>
