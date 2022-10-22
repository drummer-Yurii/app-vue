<template>
    <form v-on:submit.prevent="formSubmit">
        <input type="text" v-bind:value="inputOne" v-on:input="inputChangeOne" class="form-control">
        <hr />
        <input 
            type="text" 
            v-model="inputTwo" 
            class="form-control"
            ref="inputRefTwo"
        >
        <br />
        <hr />
        <button type="submit" class="btn btn-success">Отправить</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            inputOne: '',
            inputTwo: ''
        }
    },
    methods: {
        formSubmit() {
            console.log('formSubmit', this.inputOne)
            console.log('formSubmit', this.inputTwo)
            console.log('inputRefTwo', this.$refs.inputRefTwo.value)
        },
        inputChangeOne(event) {
            console.log('event.target.value', event.target.value);
            this.inputOne = event.target.value
        },
    }
}
</script>

<style>

</style>