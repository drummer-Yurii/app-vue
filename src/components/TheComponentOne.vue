<template>
  <h1 class="bg-info">Первый компонент</h1>
  <p><router-link to="/two">
    <button class="btn btn-success">Two Page</button>
  </router-link></p>
  <p><button class="btn btn-success" @click="goToThreePage">Three Page</button></p>
</template>

<script>
export default {
    methods: {
        goToThreePage() {
            this.$router.push('/three')
        }
    }
}
</script>

<style>

</style>