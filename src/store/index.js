import { createStore } from 'vuex'
import company from "@/store/modules/company";
import translate from "@/store/modules/translate";
import cookie from "@/store/modules/cookie";
import global from "@/store/modules/global";
const store = createStore({
    modules: {
        company,
        translate,
        cookie,
        global,
    }
});
export default store
