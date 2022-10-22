import { createStore } from "vuex";
import counter from "./modules/counter.js";

const store = createStore({
    modules: {
        counter
    }
}) 
export default store;