<template>
   <div class='searchbar'>
      <div class="left" @click="classifypage">
        <span class="iconfont-ali">&#xe66d;</span>
      </div>
      <div class="center" @click="searchpage">
        <span class="iconfont-ali">&#xe645;</span>
        <input type="text" placeholder="连衣裙">
      </div>
      <div class="right" @click="chatpage">
        <span class="iconfont-ali">&#xe7db;</span>
      </div>
   </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
    };
  },
  methods:{
    chatpage(){
      this.$router.push('/mogu/chat');
    },
    classifypage(){
      this.$router.push('/mogu/classify');
    },
    searchpage(){
      this.$router.push('/mogu/search');
    }
  }
}
require('@/assets/css/icon/iconfont.css')
</script>
<style lang='less' scoped>
.searchbar{
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding:1vw;
    animation: abab 0.6s ;
    @keyframes abab {
      0%{
        transform: translateY(-3px);
      }
      100%{
        transform: translateY(3px);
        height: initial;
      }
    }
  & .left{
    width: 10vw;
    padding: 2vw;
    display: flex;
    justify-content: center;
    & span{
      color:#a0a0a0;
    }
  }
  & .center{
    flex-grow: 1;
    background-color: rgb(238,238,238);
    display: flex;
    padding: 1.2vw 1vw;
    border-radius: 5px;
    & input{
      outline: none;
      border-width: 0;
      background-color: rgb(238,238,238);
      flex-grow: 1;
    }
  }
  & .right{
    width: 10vw;
    padding: 2vw;
    display: flex;
    justify-content: center;
  }
}
.iconfont-ali{
  font-size:30px;
}
</style>