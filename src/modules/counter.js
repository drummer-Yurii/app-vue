import mutation from "./mutation.js"
export default {
    state() {
        return {
            count: 1
        }
    },
    mutations: mutation,
    getters: {
        count(state) {
            return state.count
        },
        multByThree(state, getters) {
            return getters.count * 3
        },
    },
    actions: {
        asyncMultByFive({commit}, payload) {
            setTimeout(() => {
                commit('multByFive', payload)
            }, 1000)
            
        }
    }
}