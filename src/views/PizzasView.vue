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
  <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4">
    <div v-for="item in array" :key="item" class="col" style="margin-bottom: 25px">
      <PizzaCard :title="'some text'" :description="'some text'" :cost="500" />
    </div>
  </div>
</template>
