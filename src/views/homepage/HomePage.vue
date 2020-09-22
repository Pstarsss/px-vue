<template>
  <div class="homepage">
    <search-bar></search-bar>
    <swiper></swiper>
  </div>
</template>

<script>
import SearchBar from '@/components/common/searchbar/SearchBar.vue'
import Swiper from '@/components/common/swiper/Swiper.vue'
export default {
  name: 'Home',
  components: {
    SearchBar,
    Swiper
  }
}
</script>
<style lang="less" scoped>
.el-carousel__container {
    position: relative;
    height: 280px !important;
}
</style>
