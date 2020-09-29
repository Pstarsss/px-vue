<template>
   <div class='c-cal'>
     <div class="cal-check">
         <span class="iconfont-ali" @click="checks" >&#xe686;</span>
         全选
     </div>
     <div class="cal-price">
       <span>合计: </span>
     </div>
     <div class="cal-buy">
        去付钱()
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
    checks(){
      console.log('---');
    },  

  }
}
</script>
<style lang='less' scoped>
.c-cal{
  display: flex;
  align-items:center;
  height: 40px;
  background-color: antiquewhite;
  justify-content: space-around;
  & .cal-check{
    & span{
      border:1px solid #911515;
      border-radius: 50%;
      color:red;
    }
      
  }
  & .cal-price{
    background-color: antiquewhite;
  }
  & .cal-buy{
    background-color: beige;
  }
}
.active{
    color: #fff !important;
    border-color: aqua !important;
}
</style>