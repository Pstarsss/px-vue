<template>
   <div class='bottomitem' @click="changes">
      <slot name="bottom-title"></slot>
   </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
    };
  },
  props:{
    path:{
      type:[String]
    }
  },
  methods:{
    changes(){
      this.$router.push(this.path);
    }
  }
}
</script>
<style lang='less' scoped>
</style>