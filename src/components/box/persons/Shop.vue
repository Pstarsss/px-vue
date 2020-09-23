<template>
<div>
  <div class="left">
    <div class="wz"> 
      购物车
    </div> 
    <div class="ty">

    </div>
  </div>
  <div class="right">
    <div class="wz2"> 
      <span>
      卡卷红包
      </span>
      <span>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xiangyou"></use>
        </svg>
      </span>
    </div>
    <div class="wz2"> 
      <span>
      补贴保障
      </span>
      <span>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xiangyou"></use>
        </svg>
      </span>
    </div>
    <div class="wz2"> 
      <span>
      我的钱包
      </span>
      
      <span>
        
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xiangyou"></use>
        </svg>
      </span>
    </div>
    <div>
      
    </div>
  </div>
</div>
  
</template>

<script>

</script>

<style scoped>
.icon {
  /* float: right; */
    font-size: 1rem;
  width: 2em;
  height: 1em;
  /* margin-left: .8em; */
  text-align: center;
}
  .left{
    display: inline-block;
    width: 43%;
    height: 8rem;
    border: 1px solid rgb(235, 221, 221);
    border-radius: .5rem;
    margin: .7rem;
  }
  .right{
    display: inline-block;
    width: 43%;
    height: 8rem;
    border-radius: .5rem;
    margin: .7rem;
    background-color: rgb(248, 242, 242);
  }
  .wz{
    float: left;
    display: inline-block;
    /* width: 3rem; */
    margin: .5rem;
    height: 1rem;
    background-color: rgb(248, 242, 242);
  }
  .wz2{
    float: left;
    display: inline-block;
    width: 80%;
    margin: .5rem;
    height: 1.5rem;
    border-bottom: 1.5px solid rgb(235, 221, 221);
  }
  .ty{
    width: 100%;
    height: 5.9rem;
    background: url("https://s10.mogucdn.com/mlcdn/c45406/190815_3637hh8ac09e50j7f07i7eealck4i_513x360.png")no-repeat;
    background-size: 100% 100%;
  }
  
</style>