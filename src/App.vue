<template>
  <div class="container-fluid">
    <h1>App</h1>
    <my-component />
    <my-notes 
      v-for="note in notes" 
      v-bind:key="note" 
      v-bind:task="note.task" 
      v-bind:time="note.time"
      v-bind:id="note.id" 
      v-bind:isOpen="note.isOpen" 
      v-bind:wasTaskRead="note.wasTaskRead"
      v-on:countTaskOpen="countTaskOpen" 
      />
      <hr />
      <app-slots>
      <template v-slot="slotProps">
        <p>{{slotProps.i}} : {{slotProps.item}}</p>
      </template>
      <!-- <template v-slot:content>
        <p>Content</p>
      </template> 
      <template v-slot:footer>
        <p>Footer</p>
      </template>   -->
      </app-slots>
      <br/>
      <hr/>
    <keep-alive>
      <component :is="changeComponent"></component>
    </keep-alive>
    
      
      <button v-on:click="nameComponent = 'One'" class="btn btn-success">ONE</button>
      <hr/>
      <button v-on:click="nameComponent = 'Two'" class="btn btn-success">TWO</button>
      <hr/>
      <button v-on:click="nameComponent = 'Three'" class="btn btn-success">THREE</button>
      <br/>
      <hr/>
      <forms-block></forms-block>
      <br />
      <hr />
      <check-box></check-box>
      <br />
      <hr />
      <radio-buttons></radio-buttons>
      <br />
      <hr />
      <select-block></select-block>
      <br />
      <hr />
    <div class="container-fluid">
      <app-message-one
        message="Сообщение с компонента app-message-one" :isOpen="isOpen"
        @close="close"
      ></app-message-one>
      <app-message-two></app-message-two>
    </div>
    <br />
    <hr />
    <div class="container-">
      <h1>Teleport</h1>
      <div class="app-vue">
          <teleport to="#modalWindow">
        <the-teleport @closeModal="closeModal" v-if="isModal"></the-teleport>
          </teleport>
      </div>
      <button class="btn btn-success" @click="isModal = !isModal">
        Показать модальное окно
      </button>
    </div>
    <br />
    <hr />
    <h1>App Router</h1>
    <router-view></router-view>
    <br />
    <hr />
    <div class="container-fluid">
      <h1>VUEX</h1>
      <the-counter></the-counter>
    </div>  
  </div>
</template>

<script>
import MyComponent from './MyComponent.vue'
import MyNotes from './MyNotes.vue'
import AppSlots from "./AppSlots.vue"
import BlockContentOne from "./BlockContentOne.vue"
import BlockContentTwo from "./BlockContentTwo.vue"
import BlockContentThree from "./BlockContentThree.vue"
import formsBlock from './formsBlock.vue'
import CheckBox from './CheckBox.vue'
import RadioButtons from './RadioButtons.vue'
import SelectBlock from './SelectBlock.vue'
import AppMessageOne from './components/AppMessageOne.vue'
import AppMessageTwo from './components/AppMessageTwo.vue'
import messageMixin from './messageMixin';
import TheTeleport from './components/TheTeleport.vue'
import TheCounter from './TheCounter.vue'

export default {
  mixins: [messageMixin],
  components: {
    MyComponent,
    MyNotes,
    AppSlots,
    BlockContentOne,
    BlockContentTwo,
    BlockContentThree,
    formsBlock,
    CheckBox,
    RadioButtons,
    SelectBlock,
    AppMessageOne,
    AppMessageTwo,
    TheTeleport,
    TheCounter
  },
  data() {
    return {
      notes: [
        { task: 'Почистить зубы', 
          id: 1, 
          time: '07:00', 
          isOpen: false, 
          wasTaskRead: 0 
        },
        { task: 'Покушать', 
          id: 2, 
          time: '08:00', 
          isOpen: false, 
          wasTaskRead: 0 
        },
        { task: 'Сходить на работу', 
          id: 3, 
          time: '09:00', 
          isOpen: false, 
          wasTaskRead: 0 
        }
      ],
      nameComponent: 'One',
      isModal: false
    }
  },
  computed: {
    changeComponent() {
      return 'BlockContent' + this.nameComponent
    }
  },
  
  methods: {
    countTaskOpen(id) {
      const index = this.notes.find(task => task.id == id)
      index.wasTaskRead++;
    },
    closeModal() {
      this.isModal = false
    }
  },
  name: 'App',
}
</script>

<style>

</style>
