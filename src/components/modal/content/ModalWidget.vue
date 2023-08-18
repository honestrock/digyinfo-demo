<template>
  <div>
    <widget-container-modal />
  </div>
</template>

<script>
import {container} from "jenesius-vue-modal";

export default {
  name: "ModalWidget",
  components: {WidgetContainerModal: container},

}
</script>

<style scoped>

</style>
