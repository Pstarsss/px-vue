<template>
<div class="person">
 <div class="top">
    <span class="img1">
      <div class="img2"></div>
    </span>
  </div>
</div>
 
</template>
<script>
export default{
  name:'person',
  components: {
    
  },
  data () {
    return {
      
    };
  },
}
require('@/assets/css/icon2/iconfont.js')

</script>
<style scoped>
  .top{
    width: 100%;
    height: 150px;
    background-color: #f00;
  }
  .img1{
    width: 30%;
    height: 100px;
  }
  .img2{
    width: 120px;
    height: 120px;
    background-image: url(小熊.png);
    background-size: 100%;
    border-radius: 5rem;
  }
</style>