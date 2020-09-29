<template>
   <div class='c-goods'>
     <div class="small-img">
       <div v-for="(i,j) in a1" :key="j">
         <a :href="i.link">
           <img :src="i.image" alt="">
           <h4>{{i.title}}</h4>
         </a>
       </div>
     </div>
     <div class="more-shop">
       <div class="more-title">
         <span>综合</span>
         <span>销量</span>
         <span>新品</span>
       </div>
       <goods :homegoods="shops" class="more-shop1"></goods>
     </div>
   </div>
</template>

<script>
import cc from '@/assets/json/c1.json'
import cc1 from '@/assets/json/c11.json'
import shops1 from '@/assets/json/shops1.json'
import Goods from '@/components/affair/goods/ShopGoods.vue'
export default {
  components: {
    Goods
  },
  data() {
    return {
      a1:'',
      a2:'',
      shops:shops1[0].data.wall.docs,
    };
  },
  created(){
    this.a1 = cc.data.list;
    this.a2 = cc1.result.wall.docs;
    console.log(cc1.result.wall.docs);
  }
}
</script>
<style lang='less' scoped>
.more-title{
  display: flex;
  justify-content: space-around;
  margin-top: 3vh;
  border-top: 1px solid royalblue;
  border-bottom: 1px solid royalblue;
  & span{
    padding:2vw;
    
  }
}
.small-img{
    display: flex;
    flex-wrap: wrap;
    
    align-items: center;
    & a{
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-grow: 1;
      & img{
        width: 22vw;
      }
    }
    & > div{
      padding:2vw;
    }
}
.more-shop1{
  & img{
    width: 80vw;
  }
}
</style>