<template>
   <div class='app'>
     
     <router-view></router-view>
     <main-bottom-bar ></main-bottom-bar>
   </div>
</template>

<script>
import MainBottomBar from '@/components/affair/mainbottombar/MainBottomBar.vue'
export default {
  components: {
    MainBottomBar
  },
  data() {
    return {
    };
  },
}
</script>
<style lang='less' scoped>
</style>