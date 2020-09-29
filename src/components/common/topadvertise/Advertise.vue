<template>
   <div class='topadv'>
     <a class="adv-left" @click="tohome">
       <img :src="mogulogo" alt="">
     </a>
     <div class="adv-center">
       <h2>{{info[0].mainTitle}}</h2>
        <div>
          <img :src="star" alt="">
          <img :src="star" alt="">
          <img :src="star" alt="">
          <img :src="star" alt="">
          <img :src="star" alt="">
          <span>{{info[0].subTitle}}</span>
        </div>
     </div>
     <a class="adv-right" href="https://m.mogu.com/">
       <el-button type="danger" round>打开App</el-button>
     </a>
   </div>
</template>

<script>
import Advertiseda  from '@/assets/json/Advertise.json'
import star from '@/assets/img/star.png'
import mogulogo from '@/assets/img/mogulogo.png'
export default {
  components: {
    star,
    mogulogo,
    Advertiseda
  },
  data() {
    return {
      star:star,
      mogulogo:mogulogo,
      info:''
    };
  },
  methods:{
    tohome(){
      this.$router.push('/mogu/homepage');
    }
  },
  created(){
   this.info = Advertiseda.data.list;
  }
}
</script>
<style lang='less' scoped>
.topadv {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #b8c2cc;
    position: relative;
    & .adv-left{
      display: flex;
      align-self: center;
      padding:2vw 3vw;
      & img{
        width:8vw;
      }
    }
    & .adv-center{
      flex-grow: 1;
      & h2{
        font-weight: 400;
        font-size: 4vw;
      }
      & div{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        & img{
            width: 2.5vw;
            padding:0 1vw;
            box-sizing:content-box;
            &:first-child{
              padding-left:0;
            }
        }
        & span{
          font-size: 13px;
          color: #b0a7a7;
          padding-left: 1vw;
        }
      }
      
    }
    & .adv-right{
      padding:2vw 4vw;
    }
}
.el-button.is-round {
    padding: 2vw 3vw;
}
</style>