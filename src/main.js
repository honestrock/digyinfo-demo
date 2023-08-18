import 'windi.css'
import router from './router'
import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios";
import VueAxios from 'vue-axios';
import store from './store';
import FontAwesomeIcon from './plugins/fontawesome-icons';
import VueCookies from 'vue3-cookies';
import i18n from "@/plugins/i18n";
const app = createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(router)
    .use(i18n)
    .use(VueAxios, axios)
    .use(store)
    .use(VueCookies, {expireTimes: "30d"})
app.axios.defaults.baseURL = process.env.VUE_APP_SERVICE_URL;
/*
app.config.globalProperties.$i18n = i18n.data().i18n;
*/
app.mount('#app')
