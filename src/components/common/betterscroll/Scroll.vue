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
  data() {
    return {
      
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
        probeType: 3,
        pullUpLoad: true,
        click:true,
        pullDownRefresh:{
          threshold: 50,
          stop:20
        }
      });
      this.bs.on('pullingUp',()=>{
        console.log('获取数据，并将数据发射出去，父组件进行接收。展示');
      });
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