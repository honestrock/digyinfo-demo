<template>
  <div :class="[positionClass]" class="min-w-96 min-h-40 bg-white rounded-lg shadow-lg font-sans">
    <slot></slot>
  </div>
</template>

<script>
import {popModal} from "jenesius-vue-modal";

export default {
  name: "Modal",
  props: {
    position: {
      default: 'center'
    }
  },
  computed: {
    positionClass() {
      let css = '';
      switch (this.position) {
        case 'top' :
          css = 'fixed top-0';
          break;
        case 'bottom' :
          css = 'fixed bottom-0';
          break;
/*        case 'center' :
          css = 'flex justify-center items-center';
          break*/
      }
      return css;
    }
  },
  methods: {
    close() {
      popModal()
    }
  }
}
</script>

<style scoped>

</style>
