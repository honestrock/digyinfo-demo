<template>
  <div class="border-b px-2">
    <div class="flex justify-between  items-center">
      <a @click="close()" class="px-3 py-2 rounded">
        <font-awesome-icon size="lg" icon="angle-left"></font-awesome-icon>
      </a>
      <h4 class="px-3 w-full text-primary text-center text-gray-600">
        {{title}}
      </h4>
      <a v-if="!hiddenSave" @click="$emit('save')" class="text-primary px-1">
        {{saveText}}
      </a>
    </div>

  </div>

</template>

<script>
import {popModal} from "jenesius-vue-modal"
export default {
  name: "ModalHeader",
  props: {
    title: undefined,
    saveText: {
      default: 'Kaydet'
    },
    hiddenSave: {
      default: false,
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
