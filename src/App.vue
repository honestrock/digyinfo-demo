<template>
  <div v-if="company" id="nav">
    <div>
      <navbar>
        <div v-if="!searchBar" class="flex justify-between items-center w-full">
          <!--
                  <font-awesome-icon @click="searchBar = true" size="lg" icon="search"/>
          -->
          <div v-if="company.menu && company.menu.length > 1" style="width: 55px">
            <font-awesome-icon v-if="isSearchable" @click="searchBar = true" size="lg" icon="search"/>
            <router-link v-else to="/">
              <font-awesome-icon size="lg" icon="angle-left"/>
            </router-link>
          </div>
          <div v-else></div>

          <router-link to="/">
            <img :src="require('./assets/images/logos/' + company.logo.src)" :height="company.logo.height" class="px-1"/>
          </router-link>
          <div @click="selectLanguage()" class="flex items-center">
            <img class="pr-2" :alt="'flag-' + selectedLang" height="35"
                 :src="require('./assets/images/flags/' + selectedLang.toLocaleLowerCase() + '.png')"/>
            <font-awesome-icon style="color: darkgray" @click="selectLanguage()" icon="angle-down"/>
            <!--            <font-awesome-icon @click="selectLanguage()" size="lg" icon="globe"/>
                        <span class="text-xs text-center mt-1">{{ selectedLang }}</span>-->
          </div>
        </div>
        <search-bar @close="searchBar = false" v-model="search" v-else></search-bar>
      </navbar>
      <router-view/>
    </div>
    <modal-widget/>
  </div>
</template>
<script>
import "./assets/css/main.css";
import ModalWidget from "@/components/modal/content/ModalWidget";
import {openModal} from "jenesius-vue-modal";
import LanguagePicker from "@/components/modal/LanguagePicker";
import SearchBar from "@/components/form/SearchBar";
import Navbar from "@/components/theme/Navbar";

export default {
  components: {ModalWidget, SearchBar, Navbar},
  data() {
    return {
      searchBar: false,
      search: '',
    }
  },
  mounted() {
    document.title = this.company.title;
  },
  methods: {
    selectLanguage() {
      openModal(LanguagePicker, {});
    }
  },
  computed: {
    isSearchable() {
      return this.$route.name !== 'MenuDetail';
    },
    companyName() {
      return this.company?.key
    },
    company() {
      return this.$store.getters.getCompany;
    },
    selectedLang() {
      return this.$store.getters.getLocale?.toUpperCase();
    }
  },
  beforeCreate() {
    const hotName = 'demo';
    this.axios.defaults.headers.common['api_key'] = hotName;
    this.$store.dispatch('initApp', hotName);
  },
  watch: {
    company() {
      if (this.company) {
        this.$i18n.setLocales(this.company?.languages);
        this.$store.dispatch('setMenu', this.company.menu);
      }
    }
  }
}
</script>
