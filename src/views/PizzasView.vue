<script>
import PizzaCard from '../components/PizzaCard.vue'

export default {
  components: {
    PizzaCard
  },
  data() {
    return {
      array: [1, 2, 3, 4, 5]
    }
  }
}
</script>

<template>
  <div class="row row-col-1 row-col-sm-1 row-col-md-2 row-col-lg-2 row-col-xl-3 row-col-xxl-4">
    <div v-for="item in array" :key="item" class="col" style="margin-bottom: 25px">
      <PizzaCard :title="'some text'" :description="'some text'" :cost="500" />
    </div>
  </div>
</template>
