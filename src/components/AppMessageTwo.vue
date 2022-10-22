<template>
  <div>
      <app-message-one
        message="Сообщение с компонента app-message-two" :isOpen="isOpen"
        @close="close"
      ></app-message-one>
    </div>  
</template>

<script>
import AppMessageOne from './AppMessageOne.vue'
import messageMixin from '../messageMixin';

export default {
    mixins: [messageMixin],
    components: {
        AppMessageOne
    }
}
</script>

<style>

</style>