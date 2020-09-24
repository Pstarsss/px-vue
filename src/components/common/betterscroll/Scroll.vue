<template>
   <div class='wrapper' ref="wraps">
     <div class="content">
      <slot></slot>
     </div>
   </div>
</template>

<script>
import BScroll from 'better-scroll'

// 注册插件

export default {
  components: {},
  props:{
    probeType:{
      type:[Number],
      default(){
        return 1
      }
    },
    pullUpLoad:{
      type:[Boolean],
      default(){
        return false
      }
    },
    pullDownRefresh:{
      type:[Object],
      default(){
        
      }
    }
  },
  data() {
    return {
      bs :''
    };
  },
  mounted(){
    this.init();
  },
  beforeDestroy(){

  },
  methods:{
    init(){
      this.bs = new BScroll(this.$refs.wraps, {
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
        click:true,
        pullDownRefresh:this.pullDownRefresh,
      });
      if(this.pullUpLoad){
          this.bs.on('pullingUp',()=>{
          this.$emit('pullingUp');
          this.bs.refresh();
        });
      }
      if(this.probeType >=2){
          this.bs.on('scroll',({ y })=>{
          this.$emit('scroll',y)
        })
      }
      
    }

  }
}
</script>
<style lang='less' scoped>
.wrapper{
  height:600px;
  height:-moz-calc(100vh - 120px);
  height:-webkit-calc(100vh - 120px);
  height:calc(100vh - 120px);
  overflow: hidden;
}
</style>