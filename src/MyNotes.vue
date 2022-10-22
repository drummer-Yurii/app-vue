<template>
    <div>
        <h2 v-if="isTaskOpen"
        v-bind:class="wasTaskRead < 2 ? 'bg-success' : 'bg-danger'"
        >Задание №{{id}}: {{task}}</h2>
        <p>{{time}}</p>
        <button class="btn btn-success" v-on:click="openTask">Задание прочитано</button>
        <strong>Прочитано: {{wasTaskRead}}</strong>
    </div>
</template>

<script>

export default {
    props: {
        task: {
            type: String,
            required: true,
            default: 'Отсутствует значение',

        },
        time: { type: String, required: true, default: 'Отсутствует значение' },
        id: {
            type: Number,
            required: true,
            default: 5,
        },
        isOpen: {
            type: Boolean,
        },
        wasTaskRead: {
            type: Number,
        },
    },
    data() {
        return {
            isTaskOpen: this.isOpen
        }
    },
    methods: {
        openTask() {
            this.isTaskOpen = !this.isTaskOpen
            if(this.isTaskOpen) {
                this.$emit('countTaskOpen', this.id)
            }
        }
    },
}
</script>

<style>

</style>