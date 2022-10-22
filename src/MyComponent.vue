<template>
    <div>
        <hr />
        <h2 v-bind:class="notes.length > 5 ? 'first' : 'second'">Список заметок:</h2>
        <input 
            type="text" 
            v-bind:placeholder="clue" 
            v-model="inputValue"
            v-on:keypress.enter="addNewNote"
        />
        <ul v-bind:class="{yellow: true, green: notes.length > 5}" v-if="notes.length != 0">
            <li v-bind:class="['list-group-item', 'yellow', {'green': notes.length > 5}]" v-for="(oneNote, index) in notes" v-bind:key="index">
                {{oneNote}}
                <br />
                <button class="btn btn-danger" v-on:click="deleteNote(index)">Удалить</button>
            </li>
        </ul>
        <div v-else>Здесь заметок нет!</div>
        <div>{{calculateNotes}}</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            clue: 'Введите текст',
            inputValue: "",
            notes: ['one', 'two', 'three']
        }
    },
    methods: {
        addNewNote() {
            this.notes.push(event.target.value);
            this.inputValue = "";
        },
        deleteNote(index) {
            this.notes.splice(index, 1);
        },
    },
    computed: {
        calculateNotes() {
            return this.notes.length * 5;
        }
    },
    watch: {
        inputValue(value) {
            console.log('value', value);
            if(value.length == 10 ) {
                this.inputValue = 0;
            }
        }
    }
}
</script>
<style scoped>
.first {
    background: rgb(30, 255, 0);
}
.second {
    background: rgb(255, 0, 76);
}
.yellow {
    background: rgb(255, 230, 0);
}
.green {
    background: rgb(43, 255, 0);
}
</style>