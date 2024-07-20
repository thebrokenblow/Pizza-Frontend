<script>
import MainHeader from './components/MainHeader.vue'
import FilteredPanel from './components/FilteredPanel.vue'
import axios from 'axios'
export default {
  mounted() {
    try {
      axios.get('https://localhost:7243/Products').then((response) => {
        console.log(response)
      })
    } catch (error) {
      console.log(error)
    }
  },
  components: {
    MainHeader,
    FilteredPanel
  },
  data() {
    return {
      isShowMainHeader: true,
      array: [1, 2, 3, 4, 5]
    }
  },
  methods: {
    hideMainHeader() {
      this.isShowMainHeader = false
    },
    showMainHeader() {
      this.isShowMainHeader = true
    }
  }
}
</script>

<template>
  <MainHeader @hide-main-header="hideMainHeader" @show-main-header="showMainHeader" />
  <div class="main-container container mt-4">
    <FilteredPanel v-if="isShowMainHeader" />
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.main-container {
  position: relative;
}

.content {
  padding-top: 30px;
}
</style>
