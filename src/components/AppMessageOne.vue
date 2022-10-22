<template>
  <div>
    <h1 v-if="isOpen">{{message}}</h1>
    <button class="btn btn-success" v-on:click="$emit('close')">
        <span>{{isOpen? 'Скрыть сообщение' : 'Показать сообщение'}}</span>
    </button>
  </div>
</template>

<script>
export default {
    emit: ['close'],
    props: {
        isOpen: Boolean,
        message: String
    }
}
</script>

<style>

</style>