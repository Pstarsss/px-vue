<template>
   <div class='searchbar'>
      <div class="left">
        <span class="iconfont-ali">&#xe66d;</span>
      </div>
      <div class="center">
        <span class="iconfont-ali">&#xe645;</span>
        <input type="text" placeholder="连衣裙">
      </div>
      <div class="right">
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

}
require('@/assets/css/icon/iconfont.css')
</script>
<style lang='less' scoped>
.searchbar{
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding:1vw;
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