const mixin = {
    computed: {
        $i18n() {
            return {
                locale: this.$store.getters.getLocale,
                locales: this.$store.getters.getLocales,
                translation: this.$store.getters.getTranslation,
                setLocale: (locale) => {
                    this.$store.commit('setLocale', locale, {root: true});
                },
                setLocales: (locales) => {
                    this.$store.commit('setLocales', locales, {root: true});
                },
            }
        }
    },
    methods: {
        $t(key) {
            const translations = this.$i18n.translation;
            if (translations && translations[key]) return translations[key]
            return key;
        },
    }
}
export default {
    install: function (app, options) {
        /*
                app.config.globalProperties.$i18n = $i18n;
        */
        app.mixin(mixin);
        if (options) {
            app.config.globalProperties.$i18n.config(options);
        }
    },
};
