<template>
   <div class='wrapper' ref="wraps">
     <div class="content">
       <ul>
         <li>wdoa1</li>
         <li>wdoa2</li>
         <li>wdoa3</li>
         <li>wdoa4</li>
         <li>wdoa5</li>
         <li>wdoa6</li>
         <li>wdoa7</li>
         <li>wdoa8</li>
         <li>wdoa9</li>
         <li>wdoa10</li>
         <li>wdoa11</li>
         <li>wdoa12</li>
         <li>wdoa13</li>
         <li>wdoa14</li>
         <li>wdoa15</li>
         <li>wdoa16</li>
         <li>wdoa17</li>
         <li>wdoa18</li>
         <li>wdoa19</li>
         <li>wdoa20</li>
         <li>wdoa21</li>
         <li>wdoa22</li>
         <li>wdoa23</li>
         <li>wdoa24</li>
         <li>wdoa25</li>
         <li>wdoa26</li>
         <li>wdoa27</li>
         <li>wdoa28</li>
         <li>wdoa29</li>
         <li>wdoa30</li>
         <li>wdoa31</li>
         <li>wdoa32</li>
         <li>wdoa33</li>
         <li>wdoa34</li>
         <li>wdoa35</li>
         <li>wdoa36</li>
         <li>wdoa37</li>
         <li>wdoa38</li>
         <li>wdoa39</li>
         <li>wdoa40</li>
         <li>wdoa41</li>
         <li>wdoa42</li>
         <li>wdoa43</li>
         <li>wdoa44</li>
         <li>wdoa45</li>
         <li>wdoa46</li>
         <li>wdoa47</li>
         <li>wdoa48</li>
         <li>wdoa49</li>
         <li>wdoa50</li>
         <li>wdoa51</li>
         <li>wdoa52</li>
         <li>wdoa53</li>
         <li>wdoa54</li>
         <li>wdoa55</li>
         <li>wdoa56</li>
         <li>wdoa57</li>
         <li>wdoa58</li>
         <li>wdoa59</li>
         <li>wdoa60</li>
         <li>wdoa61</li>
         <li>wdoa62</li>
         <li>wdoa63</li>
         <li>wdoa64</li>
         <li>wdoa65</li>
         <li>wdoa66</li>
         <li>wdoa67</li>
         <li>wdoa68</li>
         <li>wdoa69</li>
         <li>wdoa70</li>
         <li>wdoa71</li>
         <li>wdoa72</li>
         <li>wdoa73</li>
         <li>wdoa74</li>
         <li>wdoa75</li>
         <li>wdoa76</li>
         <li>wdoa77</li>
         <li>wdoa78</li>
         <li>wdoa79</li>
         <li>wdoa80</li>
         <li>wdoa81</li>
         <li>wdoa82</li>
         <li>wdoa83</li>
         <li>wdoa84</li>
         <li>wdoa85</li>
         <li>wdoa86</li>
         <li>wdoa87</li>
         <li>wdoa88</li>
         <li>wdoa89</li>
         <li>wdoa90</li>
         <li>wdoa91</li>
         <li>wdoa92</li>
         <li>wdoa93</li>
         <li>wdoa94</li>
         <li>wdoa95</li>
         <li>wdoa96</li>
         <li>wdoa97</li>
         <li>wdoa98</li>
         <li>wdoa99</li>
         <li>wdoa100</li>
       </ul>
     </div>
   </div>
</template>

<script>
import BScroll from 'better-scroll'
import goods from '@/assets/json/goods.json'
// 注册插件

export default {
  components: {},
  data() {
    return {
      goods:goods
    };
  },
  mounted(){
    this.init();
  },
  beforeDestroy(){

  },
  methods:{
    init(){
      let bs = new BScroll(this.$refs.wraps, {
        probeType: 3,
        pullUpLoad: true,
        click:true
      });
      bs.on('scrollEnd',()=>{
        console.log("sdas");
      })
    }
  }
}
</script>
<style lang='less' scoped>
.wrapper{
  height:400px;
  overflow: hidden;
  & li{
    height:30px;
    font-size: 20px;;
  }
}
</style>