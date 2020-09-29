<template>
   <div class='chat'>
     <navs>
       <div slot="nleft" class="bb" @click="bbb">&lt;</div>
       <div slot="ncenter">聊天</div>
     </navs>
     <div class="content">
       <div class="ac">
          <div>活动消息</div>
          <div>3天前</div>
        </div>
        <div class=gf>
          <div>官方消息</div>
          <div>3天前</div>
        </div>
     </div>
     
   </div>
</template>

<script>
import navs from '@/components/common/title/Title.vue'
export default {
  components: {
    navs,
  },
  data() {
   return {

    };
  },
  methods:{
    bbb(){
      this.$router.go(-1);
    }
  }
}
</script>
<style lang='less' scoped>
.bb{
  font-size: 20px;
}
.chat{
    position: absolute;
    width: 100%;
    height: 133vw;
    top: 0;
    overflow: hidden;
    background-color: #fff;
    z-index: 100;
}
.content{
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  & > div{
    width: 100%;
    height: 100%;
    display: flex;
    padding:3vw;
    justify-content: space-between;
    border-bottom: 1px solid ;
  }
}
</style>