<template>
   <div class='shoprecommand'>
     <div v-for="(item,index) in imgs" :key="index" class='reItem'>
       <a href="">
         <img :src="item" alt="">
         <h3>{{titles[index]}}</h3>
       </a>
     </div>

   </div>
</template>s

<script>
import s1 from '@/assets/img/shop/s1.jpg'
import s2 from '@/assets/img/shop/s2.jpg'
import s3 from '@/assets/img/shop/s4.jpg'
import s4 from '@/assets/img/shop/s5.png'
export default {
  components: {
    
  },
  data() {
    return {
      imgs:[s1,s2,s3,s4],
      titles:['限时开抢','热销榜单','好货精选','新品快抢']
    };
  },
 
  created(){
    
  }
}
</script>
<style lang='less' scoped>
.shoprecommand {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
   
    & .reItem a{
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;   
          width: 25vw;
          padding-bottom:2vw;
          text-decoration: none;
          color:black;
          position: relative;
          & img{
                width: 22vw;
                border-radius: 11px;
          }
          & h3{
                position: absolute;
                bottom: 12%;
                font-size: 35px;
                color: #fff;
          }
    }
}
</style>