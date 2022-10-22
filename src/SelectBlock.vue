<template>
  <form v-on:submit.prevent="formSubmit">
    <select v-model="country">
        <option value="Sp">Spain</option>
        <option value="It">Italy</option>
        <option value="En">England</option>
        <option value="USA">United States of America</option>
    </select>
    <hr />
    <button type="submit" class="btn btn-success">Отправить</button>
  </form>
</template>

<script>
export default {
    data() {
        return {
            country: 'En'
        }
    },
    methods: {
        formSubmit() {
        console.log('country', this.country)
        }
    }
   
}
</script>

<style>

</style>