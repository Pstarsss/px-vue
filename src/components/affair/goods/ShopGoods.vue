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
  background-color: #dadfe49e;
}
.goodsitem{
  display: flex;
  background-color: #fff;
  margin: 1vw;
  & a{
    display: flex;
    flex-direction: column;
    & .itemcontent{
          width: 42vw;
          margin: 0 auto;
          font-size: 3vw;
      & h4{
          overflow: hidden;
          text-overflow: ellipsis;
          white-space:nowrap;
          padding: 1vw;
          font-weight: 300;
      }    
      & span{
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }
     & .itemcontent2{
           display: flex;
          justify-content: space-between;
          align-items: center;
     }
    }
    & img{
      width:46vw;
      border-radius:10px;
      padding:1vw;
    }
  }
}
.el-button--danger{
    width: 100%;
    color: #fff;
    font-size: 2.5vw;
    background: #d71212f2;
    border-color: #d96161;
    margin-bottom: 1vw;
}
</style>