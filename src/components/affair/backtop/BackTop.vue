<template>
   <div class='backtop'>
     <span class="iconfont-ali">&#xe601;</span>
   </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
    };
  },

}
</script>
<style lang='less' scoped>
.backtop{
  position:fixed;
  bottom: 4vw;
  right: 3vw;
  z-index: 100;
  // border-radius: 43%;
  // background-color: #fff;
  & span{
    font-size: 40px;
    color: #a3b2bf;
  }
}

</style>