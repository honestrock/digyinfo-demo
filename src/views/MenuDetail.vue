<template>
  <div>
    <iframe id="frame" :style="{'height': (windowHeight - 68) + 'px'}" width="100%" :src="getSrc"></iframe>
    <div style="width: 80px; height: 80px; position: absolute; opacity: 0; right: 0; top: 60px;"> </div>
  </div>
</template>

<script>

export default {
  name: "MenuDetail",
  data(){
    return {
      windowHeight: window.innerHeight
    }
  },
  computed: {
    menu() {
      return this.$store.getters.getCompany?.menu;
    },
    locale() {
      return this.$store.getters.getLocale;
    },
    selectedMenu() {
      return this.menu?.find(m => m.id?.toString() === this.$route.params.menuId);
    },
    getSrc() {
      return this.selectedMenu?.detail[this.locale];
    }
  }
}
</script>

<style>
#frame { zoom: 1; -moz-transform: scale(1); -moz-transform-origin: 0 0; }

</style>
