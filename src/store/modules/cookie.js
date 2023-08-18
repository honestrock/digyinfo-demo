import {useCookies} from "vue3-cookies";

const { cookies } = useCookies();
const state = {
    prefix: 'gomymenu.com/',
    expire: '30d',
    cookieLang: null,
}
const getters = {
    getCookieLang(state) {
        return cookies.get(state.prefix + 'user-lang') ?? state.cookieLang;
    }
}
const mutations = {
    setCookie(state, payload) {
        cookies.set(payload.key, payload.data, payload.expire ?? state.expire);
    },
    setCookieLang(state, payload, expire) {
        state.cookieLang = payload;
        mutations.setCookie('setCookie', {key: state.prefix + 'user-lang', data: payload, expire})
    }
}
const actions = {}
export default {
    state,
    getters,
    mutations,
    actions,
}
