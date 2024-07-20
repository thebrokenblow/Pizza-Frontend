import { createRouter, createWebHistory } from 'vue-router'
import CocktailsView from '../views/CocktailsView.vue'
import DessertsView from '../views/DessertsView.vue'
import DrinksView from '../views/DrinksView.vue'
import MainView from '../views/MainView.vue'
import PizzasView from '../views/PizzasView.vue'
import SaucesView from '../views/SaucesView.vue'
import SnacksView from '../views/SnacksView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
      path: '/сocktails',
      name: 'сocktails',
      component: CocktailsView
    },
    {
      path: '/desserts',
      name: 'desserts',
      component: DessertsView
    },
    {
      path: '/drinks',
      name: 'drinks',
      component: DrinksView
    },
    {
      path: '/pizzas',
      name: 'pizzas',
      component: PizzasView
    },
    {
      path: '/sauces',
      name: 'sauces',
      component: SaucesView
    },
    {
      path: '/snacks',
      name: 'snacks',
      component: SnacksView
    }
  ]
})

export default router
