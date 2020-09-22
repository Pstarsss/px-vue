<template>
  <div class="homepage">
    <search-bar></search-bar>
    <swiper></swiper>
    <recommand></recommand>
  </div>
</template>

<script>
import SearchBar from '@/components/common/searchbar/SearchBar.vue'
import Swiper from '@/components/common/swiper/Swiper.vue'
import Recommand from '@/components/common/recommand/Recommand.vue'
export default {
  name: 'homepage',
  components: {
    SearchBar,
    Swiper,
    Recommand
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
