import { createRouter, createWebHashHistory } from "vue-router";
import TheComponentOne from "./components/TheComponentOne.vue";
import TheComponentTwo from "./components/TheComponentTwo.vue";
import TheComponentThree from "./components/TheComponentThree.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/one', component: TheComponentOne, alias: '/'},
        {path: '/two/:namecar?', component: TheComponentTwo},
        {path: '/three', component: TheComponentThree}
    ]
})