<template>
  <form v-on:submit.prevent="formSubmit">
    <span>Что предпочитаете на ужин?</span>
    <br />
    <label><input class="form-check-input" type="radio" value="krab" v-model="dish">Крабы</label>
        <br />
    <label><input class="form-check-input" type="radio" value="rak" v-model="dish">Раки</label>
        <br />
    <label><input class="form-check-input" type="radio" value="omar" v-model="dish">Омары</label>
        <br />
    <label><input class="form-check-input" type="radio" value="krev" v-model="dish">Креветки</label>
        <hr />
    <button type="submit" class="btn btn-success">Отправить</button>
  </form>
</template>

<script>
export default {
    data() {
        return {
            dish: null
        }
    },
    methods: {
        formSubmit() {
            console.log('dish', this.dish)
        }
    }
}
</script>

<style>

</style>