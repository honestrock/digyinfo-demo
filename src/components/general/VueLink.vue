<template>
  <router-link v-if="link.target === '_self'" :target='link.target' :to="link.url">
    <slot></slot>
  </router-link>
  <a v-else target="_blank" :href="link.url">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "VueLink",
  props: ['link']
}
</script>
