const state = {
    menu: null,
}
const getters = {
    getMenu(state) {
        return state.menu;
    }
}
const mutations = {
    setMenu(state, payload) {
        state.menu = payload;
    },
}
const actions = {
    setMenu({commit}, payload) {
        commit('setMenu', payload);
    },
}
export default {
    state,
    getters,
    mutations,
    actions,
}
