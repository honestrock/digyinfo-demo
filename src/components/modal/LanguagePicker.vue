<template>
  <Modal ref="modal" position="center">
    <modal-header :hidden-save="true" title="Dil Seçiniz"></modal-header>
    <modal-content>
      <div>
        <label :class="(index + 1) === locales.length ? '!border-0': 'border-b'"
               class="flex items-center justify-between py-3 p-2" v-for="(lng, index) in locales" :key="index">
          <div class="flex items-center">
            <img class="px-2" :alt="'flag-' + lng.lang" height="35" :src="require('../../assets/images/flags/' + lng.lang.toLowerCase()+ '.png')"/>
            <span class="px-2 text-gray-500">{{ lng.langNative }} ({{ lng.lang }})</span>
          </div>
          <input class="w-5 h-5" type="radio" :value="lng.lang" v-model="locale">
        </label>
      </div>

    </modal-content>
  </Modal>
</template>

<script>
import Modal from "@/components/modal/content/Modal";
import ModalHeader from "@/components/modal/content/ModalHeader";
import ModalContent from "@/components/modal/content/ModalContent";

export default {
  name: "LanguagePicker",
  components: {ModalContent, ModalHeader, Modal},
  computed: {
    locale: {
      get() {
        return this.$i18n.locale?.toUpperCase();
      },
      set(val) {
        this.$i18n.setLocale(val.toLowerCase());
        this.$refs.modal.close();
      }
    },
    locales() {
      return this.$i18n.locales;
    }
  },
}
</script>

<style scoped>

</style>
