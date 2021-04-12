export default new Vuex.Store({
    state: {
        user: ''
    },
    mutations: {
        login(state, data) {
            state.user = data
        }
    },
    actions: {
        
    },
})