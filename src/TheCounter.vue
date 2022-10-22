<template>
  <h1>Counter</h1>
  <h2>{{count}}</h2>
  <button @click="increaseByOne" class="btn btn-success">Увеличить</button>
  <h2>Умноженое на 3</h2>
  <h2>{{$store.getters.multByThree}}</h2>
  <button @click="asyncMultByFive(55)" class="btn btn-success">Асинхронно умножить на 5</button>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
export default {
    computed: mapGetters(['count']),
    methods: {
        ...mapMutations(['increase']),
        ...mapActions(['asyncMultByFive']),
        increaseByOne() {
            this.increase(1)
        }
    }
}
</script>

<style>

</style>