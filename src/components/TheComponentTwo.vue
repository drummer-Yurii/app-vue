<template>
  <h1 class="bg-danger">Второй компонент</h1>
  <ul>
    <li v-for="car in cars" :key="car.id">
      <router-link :to="'/two/' + car.name">{{car.name}}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      cars: [
        {name: 'BMW', id: 1},
        {name: 'AUDI', id: 2},
        {name: 'FORD', id: 3},
      ]
    }
  },
  updated() {
    console.log('params', this.$route.params.namecar)
  }
}
</script>

<style>

</style>