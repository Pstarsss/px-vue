<template>
   <div class='swiper'>
     <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="item in imgs" :key="item">
        <img :src="item" alt="">
      </el-carousel-item>
      </el-carousel>
   </div>
</template>

<script>
import lun1 from '@/assets/img/lunbo/lun1.webp'
import lun2 from '@/assets/img/lunbo/lun2.webp'
import lun3 from '@/assets/img/lunbo/lun3.webp'
export default {
  components: {},
  data() {
    return {
      imgs:[lun1,lun2,lun3]
    };
  },

}
</script>
<style lang='less' scoped>
.el-carousel__item img {
    width:100%;
    height:100%;
    opacity: 0.75;
    margin: 0;
  }
.el-carousel__item{
  height:100%;
}  
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.el-carousel--horizontal {
    overflow-x: hidden;
    height: 258px;
    margin-bottom: 4vw;
}
</style>