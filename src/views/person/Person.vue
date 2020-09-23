<template>
  <div class="person">
    <pic></pic>
    <personer></personer>
    <shop></shop>
    <set></set>
    <order></order>
  </div>
</template>

<script>
import Set from '@/components/box/persons/Set.vue'
import Order from '@/components/box/persons/Order.vue'
import Shop from '@/components/box/persons/Shop.vue'
import Pic from '@/components/box/persons/Pic.vue'
import Personer from '@/components/box/persons/Personer.vue'

export default {
  name: 'Home',
  components: {
    Personer,
    Pic,
    Shop,
    Order,
    Set,
  },
  methods:{

  },
  created () {
    
  }
}
</script>
<style scoped>

</style>
