<template>
  <div class="box">
    <div class="top">
      我的订单
      <span class="top-right">
        全部
        <svg class="icon1" aria-hidden="true">
            <use xlink:href="#icon-xiangyou"></use>
        </svg>
      </span>
    </div>
    <div class="sec-box">
      <div class="sec-box-chi">
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fukuan"></use>
          </svg>
        </div>
        <div class="tex">待付款</div>
      </div>
      <div class="sec-box-chi">
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-huoche"></use>
          </svg>
        </div>
        <div class="tex">待发货</div>
      </div>
      <div class="sec-box-chi">
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-icon-receive
"></use>
          </svg>
        </div>
        <div class="tex">待收货</div>
      </div>
      <div class="sec-box-chi">
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shouhou"></use>
          </svg>
        </div>
        <div class="tex">售后</div>
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style scoped>
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
  .box{
    margin: .2rem auto;
    width: 90%;
    border-radius: .5rem;
    height: 8rem;
    background-color: rgb(248, 242, 242);
  }
  .top{
    padding-top: .5rem;
    height: 2rem;
    width: 90%;
    margin: auto;
    border-bottom: 2px solid #ccc;
  }
  .top-right{
    /* font-size: 1.5em; */
    float: right;
    color: rgb(105, 98, 98);
  }
  .icon {
    font-size: 1.5rem;
  width: 2em;
  height: 1em;
  /* margin-left: .8em; */
  text-align: center;
}
  .icon1 {
  /* float: right; */
    font-size: 1rem;
  width: 2em;
  height: 1em;
  /* margin-left: .8em; */
  text-align: center;
}

</style>