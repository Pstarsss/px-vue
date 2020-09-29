<template>
   <div class='nav-1'>
     <div class="left"><slot name="nleft"></slot></div>
     <div class="center"><slot name="ncenter"></slot></div>
     <div class="right"><slot name="nright"></slot></div>
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
.nav-1{
  display: flex;
  align-items: center;
  background-color: rgb(224, 224, 224);
  height: 6vw;
  & .left{
    width: 10vw;
    text-align:center;
    
  }
  & .center{
    flex-grow:1;
    text-align:center;
  }
  & .right{
    width: 10vw;
    text-align:center;
  }
}
</style>