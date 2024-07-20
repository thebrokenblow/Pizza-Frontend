<script>
export default {
  data() {
    return {
      currentView: 0
    }
  },
  methods: {
    setView(index) {
      if (index == 0) {
        this.$emit('hideMainHeader')
        console.log('hideMainHeader')
      } else {
        this.$emit('showMainHeader')
        console.log('showMainHeader')
      }
      this.currentView = index
    }
  }
}
</script>

<template>
  <nav
    class="navbar bg-dark border-bottom border-bodynavbar navbar-expand-lg bg-body-tertiary navbar-fixed-top"
    data-bs-theme="dark"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Красов Пицца</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul
          class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px"
        >
          <li class="nav-item">
            <RouterLink
              @click="setView(0)"
              to="/"
              class="nav-link"
              :class="{ active: currentView == 0 }"
              >Главная</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              @click="setView(1)"
              to="/pizzas"
              class="nav-link"
              :class="{ active: currentView == 1 }"
              >Пиццы</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              @click="setView(2)"
              to="/snacks"
              class="nav-link"
              :class="{ active: currentView == 2 }"
              >Закуски</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              @click="setView(3)"
              to="/сocktails"
              class="nav-link"
              :class="{ active: currentView == 3 }"
              >Коктейли</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              @click="setView(4)"
              to="/drinks"
              class="nav-link"
              :class="{ active: currentView == 4 }"
              >Напитки</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              @click="setView(5)"
              to="/desserts"
              class="nav-link"
              :class="{ active: currentView == 5 }"
              >Десерты</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              @click="setView(6)"
              to="/sauces"
              class="nav-link"
              :class="{ active: currentView == 6 }"
              >Соусы</RouterLink
            >
          </li>
        </ul>
        <div class="d-flex gap-3">
          <button type="button" class="btn btn-outline-light">Войти</button>
          <button type="button" class="btn btn-outline-light">Корзина | 0</button>
        </div>
      </div>
    </div>
  </nav>
</template>
