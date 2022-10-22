import { createApp } from 'vue'
import App from './App.vue'
import MyComponent from './MyComponent'
import router from './router';
import store from './store';

const app = createApp(App);
app.use(router);
app.component('my-component', MyComponent);
app.use(store);
app.mount('#app');
