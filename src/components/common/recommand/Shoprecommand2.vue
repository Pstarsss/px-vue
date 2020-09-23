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
import s1 from '@/assets/img/shop/sr1.webp'
import s2 from '@/assets/img/shop/sr2.webp'
import s3 from '@/assets/img/shop/sr3.webp'
import s4 from '@/assets/img/shop/sr4.webp'
import s5 from '@/assets/img/shop/sr5.webp'
import s6 from '@/assets/img/shop/sr6.webp'
import s7 from '@/assets/img/shop/sr7.webp'
import s8 from '@/assets/img/shop/sr8.webp'
import s9 from '@/assets/img/shop/sr9.webp'
import s10 from '@/assets/img/shop/sr10.webp'

export default {
  components: {
    
  },
  data() {
    return {
      imgs:[s1,s2,s3,s4,s5,s6,s7,s8,s9,s10],
      titles:['女装','上衣','好鞋','包包','女装','上衣','好鞋','包包','女装','上衣']
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
    justify-content:space-around;
    & .reItem a{
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;   
          width: 19vw;
          padding-bottom:2vw;
          text-decoration: none;
          color:black;
          position: relative;
          & img{
                width: 16vw;
                border-radius: 11px;
          }
          & h3{
                font-size: 30px;
                color: black;
                font-weight:400;
          }
    }
}
</style>