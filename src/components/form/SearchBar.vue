<template>
  <div class="w-full flex items-center justify-content">
    <font-awesome-icon @click="close()" size="lg" icon="arrow-left"/>
    <input ref="search" class="rounded italic mx-3 w-full" @keyup="searchChange()" v-model="search" type="Search" :placeholder="$t('search')"/>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: {
    modelValue: {
      default: ''
    },
    autofocus: {
      default: true
    },
    placeholder: {
      default: 'Search',
    }
  },
  emits: ['update:modelValue', 'close'],
  data() {
    return {
      search: this.$props.modelValue
    }
  },
  methods: {
    searchChange() {
      this.$emit('update:modelValue', this.search);
      this.$store.dispatch('setSearch', this.search);
    },
    close() {
      this.$emit('update:modelValue', '')
      this.$emit('close', true);
      this.$store.dispatch('setSearch', '');

    }
  },
  mounted() {
    if(this.autofocus) {
      this.$nextTick(() => {
        this.$refs.search.focus();
      });
    }
  }
}
</script>

<style scoped>

</style>
