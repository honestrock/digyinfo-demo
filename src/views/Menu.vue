<template>
  <div class="my-3 h-full">
    <container style="height: calc( 100vh - 110px); max-width: 1200px; margin: auto;"
               class="grid h-full my-10  overflow-auto items-center grid-cols-2 lg:grid-cols-3 mb-2">
      <div v-for="(menu, index) of getMenu" :key="index">
        <div class="mx-auto">
          <div class="h-12 mx-auto text-center">
            <vue-link :link="menu.link">
              <i class="hover:text-primary" style="font-size: 45px" :class="'sc-' + menu.icon"></i>
            </vue-link>
          </div>
          <vue-link :link="menu.link">
            <div style="font-size: 18px; font-family: 'Lato', sans-serif"
                 class="hover:text-primary text-center -px-2 py-3 text-lg">
              {{ $t(menu.key) }}
            </div>
            </vue-link>
        </div>
      </div>
    </container>
    <powered></powered>
  </div>


</template>

<script>
import Container from "@/components/theme/Container";
import VueLink from "@/components/general/VueLink";
import Powered from "@/components/general/Powered";

export default {
  components: {Powered, VueLink, Container},
  computed: {
    getMenu() {
      const search = this.$store.getters.getSearch?.toLowerCase();
      return this.$store.getters.getCompany?.menu.filter(m => !search || this.$t(m.key)?.toLowerCase().indexOf(search) > -1);
    },
    getSearch() {
      return this.$store.getters.getSearch;
    }
  }
}
</script>

<style scoped>

</style>
