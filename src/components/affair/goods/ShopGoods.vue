<template>
   <div class='goods'>
     
     <div class="goodsitem demo-image__lazy" v-for="item in goods" :key="item.link">
       <a :href="item.link">
       <img :src="item.img" alt="" >
       <div class="itemcontent">
         <h4>{{item.title}}</h4>
         <div class='itemcontent2'>
           <span>￥{{item.price}}</span>
           <span class="iconfont-ali">{{item.cfav}} &#xe66d;</span>
         </div>
          <el-button type="danger" plain>立即购买</el-button>
       </div>
       </a>
     </div>
   </div>
</template>

<script>

export default {
  components: {
    
  },
  props:{
    homegoods:{
      type:[Array]
    }
  },
  data() {
    return {
      goods:this.homegoods

    };
  },
 
  created(){
    
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
    
    }
    & img{
      width:44vw;
    }
  }
}
</style>