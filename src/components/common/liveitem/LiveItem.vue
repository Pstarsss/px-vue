<template>
   <div class='LiveItem'>
     <a :href="lists.link">
      <div class="topitem" >
        <img :src="lists.avatar" alt="">
        <h4>{{lists.userName}}</h4>
      </div>
      <div class="downitem">
          <img :src="lists.bgImg" alt="">
          <div class="downitem1">
            <div class="leftdown">
            <div class="living">
              <span><i class="circle"></i>直播中</span>&nbsp;|
              <span><i class="iconfont-ali">&#xe639;</i>{{lists.visitorCount}}</span>
            </div>
            <div>
              <span class="titles">{{lists.intro}}</span>
            </div>
            <div class="shopcarts">
              <div v-for="item in lists.shopCarts.goods" :key="item.itemId">
                <img :src="item.cover" alt="">
                <span>{{item.price}}</span>
              </div>
            </div>
          </div>
          <div class="rightcomment">
            <div v-for="m in lists.comments" :key="m.commentId">
              <img :src="m.avatar" alt="">
              <span>{{m.content}}</span>
            </div>
          </div>
          </div>
          
      </div>
     </a>
   </div>
   
</template>

<script>
export default {
  components: {

  },
  props:{
    lists:{
      type:[Array,Object]
    }
  },
  data() {
    return {
      items:''
    };
  },
  created(){
  }
}
</script>
<style lang='less' scoped>
.LiveItem{
    margin-bottom: 8vh;
  & a{
    
    & .topitem{
      display: flex;
      align-items: center;
      position: relative;
      height:5vh;
      & img{
            position:absolute;
            width: 9vw;
            border-radius: 50%;
            border: 2px solid #fff;
            bottom: -50%;
            left: 5%;

      }
      & h4{
        text-indent: 15vw;
        font-size: 3vw;
        font-weight: 400;
      }
    }
    & .downitem{
      position: relative;
      
      & .downitem1{
        display: flex;
        padding-top: 32vh;
        width: 94vw;
        margin: 0 auto;
        justify-content: space-between;
      }
      & > img{
        width: 95vw;
        height: 57vh;
        position: absolute;
        z-index: -1;
        left: 2.5%;
        right: 2.5%;
        border-radius: 18px;
      }
      & .leftdown{
        & div{
          margin:1vw;
        }
        & .living{
          border: 1px solid transparent;
          display: inline;
          padding: 1vw;
          color: #fff;
          background-color: #7e787896;
          border-radius: 10px;

          & i.circle{
                width: 12px;
                height: 12px;
                border: 1px solid transparent;
                display: inline-block;
                border-radius: 50%;
                opacity: 0;
                animation:flash 2s infinite;
          }
          @keyframes flash{
            0%{

            }
            100%{
              opacity: 1;
              background-color: red;
            }
          }
        }
        & .titles{
          font-size: 3.5vw;
          color:#fff;
        }
        & .shopcarts{
          display: flex;
          & > div{
            position: relative;
          }
          & img{
            width: 13vw;
            height: 13vh;
          }
          & span{
            position: absolute;
            color:#fff;
            font-size: 2.3vw;
            bottom: 5%;
            left: 25%;
          }
        }
      }
      & .rightcomment{
         
         & img{
           width: 5vw;
           border-radius: 50%;
         }
         & > div{
           display:flex;
           align-items:center;
           margin: 1vw;
           & span{
                 font-size: 2vw;
              width: 20vw;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              text-indent: 0.5vw;
           }
         }
      }
    }
  }
}

</style>