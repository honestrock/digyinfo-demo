import {_HOTEL} from "@/utils/static";

const state = {
    company: null,
    hotName: null,
}
const getters = {
    getHostname(state) {
        return state.hotName;
    },
    getCompany(state) {
        return state.company;
    }
}
const mutations = {
    setHostName(state, payload) {
        state.hotName = payload;
    },
    setCompany(state, payload) {
        state.company = payload;
    }
}
const actions = {
    initApp({commit}, payload) {
        commit('setHostName', payload);
        const company = _HOTEL[process.env.VUE_APP_COMPANY]
        commit('setCompany', company);
        commit('setLocales', company.languages);
    },
}
export default {
    state,
    getters,
    mutations,
    actions,
}
