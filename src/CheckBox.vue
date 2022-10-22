<template>
  <form v-on:submit.prevent="formSubmit">
    <strong>Где предпочитаете отдыхать?</strong>
    <br />
    <label>
        <input class="form-check-input" type="checkbox" v-model="rest" value="Cyprus"> Кипр
    </label>
    <br />
    <label>
        <input class="form-check-input" type="checkbox" v-model="rest" value="Israel"> Израиль
    </label>
    <br />
    <label>
        <input class="form-check-input" type="checkbox" v-model="rest" value="Greece"> Греция
    </label>
    <br />
    <label>
        <input class="form-check-input" type="checkbox" v-model="rest" value="Bulgaria"> Болгария
    </label>
    <br />
    <hr />
    <strong>Согласны ли вы с условиями регистрации?</strong>
    <br />
    <label>
        <input class="form-check-input" type="checkbox" v-model="agree"> Да
    </label>
    <br />
    <hr />
    <button type="submit" class="btn btn-success">Отправить</button>
  </form>
</template>

<script>
export default {
    data() {
        return {
            rest: [],
            agree: false
        }
    },
    methods: {
        formSubmit() {
            console.log('rest', this.rest)
            console.log('agree', this.agree)
        }
    }
}
</script>

<style>

</style>