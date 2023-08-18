import cookie from './cookie';
import axios from "axios";
import {_TRANSLATIONS} from "@/utils/translations";

const state = {
    locale: null,
    locales: [],
    translation: {},
}
const getters = {
    getLocales(state) {
        return state.locales
    },
    getLocale(state) {
        return state.locale
    },
    getTranslation(state) {
        return state.translation
    },
    findLang(state, payload) {
        return payload ? state.locales.find(l => l.lang?.toLowerCase() === payload?.toLowerCase())?.lang?.toLowerCase() : false;
    },
}
const mutations = {
    setLocales(state, payload) {
        state.locales = payload;
        mutations.setLocale(state);
    },
    setTranslation(state, payload) {
        state.translation = payload
    },
    setLocale(state, payload) {
        let lang = null;
        if (payload) lang = getters.findLang(state, payload);
        if (!payload || !lang) {
            lang = cookie.getters.getCookieLang(state);
            if (!lang) lang = getters.findLang(state, navigator.language.split('-')[0])
            if (!lang) lang = state.locales[0]?.lang;
        }
        if (state.locale !== lang) {
            cookie.mutations.setCookieLang(state, lang, null);
            state.locale = lang;
            axios.defaults.headers.common['Accept-Language'] = lang;
            actions.setTranslation(state);
        }
    },
}
const actions = {
    setTranslation(state) {
        /*        axios.get('baresweb/dic').then(rs => {
                    mutations.setTranslation(state, rs.data);
                })*/
        mutations.setTranslation(state, _TRANSLATIONS[state.locale?.toUpperCase()]);
    },
}
export const translateFnc = {
    functionName: (data) => {
        return data;
    }
}
export default {
    state,
    getters,
    mutations,
    actions,
}
