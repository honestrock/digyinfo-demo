const state = {
    search: null,
}
const getters = {
    getSearch(state) {
        return state.search;
    }
}
const mutations = {
    setSearch(state, payload) {
        state.search = payload;
    },
}
const actions = {
    setSearch({commit}, payload) {
        commit('setSearch', payload);
    },
}
export default {
    state,
    getters,
    mutations,
    actions,
}
