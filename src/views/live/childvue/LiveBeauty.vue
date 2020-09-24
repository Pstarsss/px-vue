<template>
   <div class='Beauty'>
      <placeholder></placeholder>
      <live-item v-for="(item,index) in hotlist" :key="index" :lists="hotlist[index]"></live-item>
   </div>
</template>

<script>
import Livegood from '@/assets/json/lives.json'
import placeholder from '@/components/common/kongbai/placeholder.vue'
import LiveItem from '@/components/common/liveitem/LiveItem.vue'
export default {
  components: {
    placeholder,
    LiveItem,
    Livegood
  },
  data() {
    return {
      hotlist:''
    };
  },
  created(){
    this.hotlist = Livegood[0].data.lives;
    
  }
}
</script>
<style lang='less' scoped>
</style>