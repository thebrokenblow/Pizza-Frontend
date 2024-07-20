<script>
export default {
  props: {
    title: String,
    description: String,
    cost: Number
  }
}
</script>
<template>
  <div class="card" style="width: 18rem">
    <img
      src="https://static.tildacdn.com/tild3436-3938-4234-b032-396565623632/540fbe0940c088c5138f.jpeg"
      class="card-img-top"
      :alt="title"
    />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">
        {{ description }}
      </p>
      <p class="card-text">{{ cost }} ₽</p>
      <button class="btn btn-dark">Выбрать</button>
    </div>
  </div>
</template>