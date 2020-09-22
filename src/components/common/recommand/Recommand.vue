<template>
   <div class='recommand'>
     
      <div v-for="(item) in lists" :key="item.link"  class="reItem">
        <a :href="item.h5Link|links">
        <img :src="item.image" alt="" >
        <h4>{{item.title}}</h4>
        </a>
      </div>
   </div>
</template>

<script>
import recommand from '@/assets/json/recommand.json'
export default {
  components: {
    recommand,
  },
  data() {
    return {
      lists:recommand.data[140653].list
    };
  },
  filters:{
    links(val){
      return val.substr(2,val.length-3);
    }
  },
  created(){
    
  }
}
</script>
<style lang='less' scoped>
.recommand {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
   
    & .reItem a{
          display: flex;
          flex-direction: column;
          align-items: center;   
          width: 25vw;
          padding-bottom:2vw;
          text-decoration: none;
          color:black;
          & img{
            width:50%;
          }
    }
}
</style>