<template>
  <div class="person">
    <pic></pic>
    <personer></personer>
    
  </div>
</template>

<script>
import Pic from '@/components/box/persons/Pic.vue'
import Personer from '@/components/box/persons/Personer.vue'

export default {
  name: 'Home',
  components: {
    Personer,
    Pic,
  },
  methods:{

  },
  created () {
    
  }
}
</script>
<style scoped>

</style>
