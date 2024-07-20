<script>
import CardProduct from '../components/CardProduct.vue'

export default {
  components: {
    CardProduct
  },
  data() {
    return {
      array: [1, 2, 3, 4, 5]
    }
  }
}
</script>

<template>
  <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4">
    <div v-for="item in array" :key="item" class="col" style="margin-bottom: 25px">
      <CardProduct :title="'some text'" :description="'some text'" :cost="500" />
    </div>
  </div>
</template>
