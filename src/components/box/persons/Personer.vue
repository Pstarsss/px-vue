<template>
  <div>
    
    

    <div class="sec-box">
      <div class="sec-box-chi">
        <a href="https://h5.mogu.com/brand-content/personal-homepage.html?uid=1f8tmds&acm=3.mce.1_10_1m5di.139413.0.bbTeUsbXjoaQE.pos_9900-m_516671-sd_119&ptp=32.qr95G.0.0.hlTjyZFb">
         <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zhuye"></use>
          </svg>
        </div>
        <div class="tex">我的主页</div>
        </a>
      </div>
      <div class="sec-box-chi">
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xiaoxi"></use>
          </svg>
        </div>
        <div class="tex">消息</div>
      </div>
      <div class="sec-box-chi">
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shoucangmian"></use>
          </svg>
        </div>
        <div class="tex">收藏</div>
      </div>
      <div class="sec-box-chi">
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-A"></use>
          </svg>
        </div>
        <div class="tex">关注</div>
      </div>
    </div>
    
  </div>
</template>
<script>
export default{
  components: {
    
  },
  data () {
    return {
      
    };
  },
}
require('@/assets/css/icon2/iconfont.js')

</script>

<style scoped>
  

  .icon {
    font-size: 1.5rem;
  width: 3em;
  height: 1em;
  padding-right: .5rem;
  /* margin-left: .8em; */
  text-align: center;
}
  .sec-box{
    width: 95%;
    height: 5rem;
    margin: .5rem auto;
    background-color: rgb(248, 242, 242);
    border-radius: .5rem;
  }
  .sec-box-chi{
    display: inline-block;
    margin:0.8rem 0.4rem;
  }
 .tex{
   font-size: 1rem;
    width: 4em;
    text-align: center;
    margin-top: .2rem;
  }
</style>