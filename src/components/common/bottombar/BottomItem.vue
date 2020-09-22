<template>
   <div class='bottomitem' @click="changes()" >
      <slot name="bottom-title"></slot>
   </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      paths:'',
    };
  },
  props:{
    index:{
      type:[Number]
    },
    path:{
      type:[String]
    }
  },
  methods:{
    changes(){
      this.$router.push(this.path);
      this.$emit('ishow',this.index);
    }
  }
}
</script>
<style lang='less' scoped>

</style>