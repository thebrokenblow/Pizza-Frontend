<script>
export default {
  data() {
    return {
      currentView: 0
    }
  },
  methods: {
    onChangeSelect() {}
  }
}
</script>

<template>
  <div class="container mt-4 d-flex justify-content-end">
    <div class="d-flex gap-3">
      <select class="form-select" @change="onChangeSelect">
        <option value="name">По названию</option>
        <option value="price">По цене (Дешёвые)</option>
        <option value="-price">По цене (Дорогие)</option>
      </select>
      <input
        class="form-control input-form"
        type="text"
        placeholder="Название"
        aria-label="default input example"
      />
    </div>
  </div>
</template>

<style scoped></style>
