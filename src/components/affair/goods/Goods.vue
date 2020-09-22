<template>
   <div class='goods'>
     
     <div class="goodsitem demo-image__lazy" v-for="item in goods" :key="item.link">
       <a :href="item.modelData.link">
       <img :src="item.modelData.cover" alt="" >
       <div class="itemcontent">
         <span>{{item.modelData.desc}}</span>
          <div class='user'>
            <img :src="item.modelData.userInfo.avatar" alt="" >
            <h5>{{item.modelData.userId}}</h5>
          </div>
       </div>
       </a>
     </div>
   </div>
</template>

<script>
import goods from '@/assets/json/goods.json'
export default {
  components: {},
  data() {
    return {
      goods:goods.data.list,
    };
  },
  created(){
    console.log(this.goods[0].modelData);
  }
}
</script>
<style lang='less' scoped>
.goods{
  display:flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.goodsitem{
  display: flex;

  & a{
    display: flex;
    flex-direction: column;
    & .itemcontent{
      width:44vw;
      & span{
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      & .user{
        display: flex;
        align-items: center;
        & img{
          width:4vw;
          border-radius: 50%;
        }
      }
    }
    & img{
      width:44vw;
    }
  }
}
</style>