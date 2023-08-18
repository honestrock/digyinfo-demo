<template>
  <div  class="navbar sticky top-0 flex w-full items-center shadow-lg  h-17 text-black w-full font-sans">
    <div class="mx-auto px-3 container w-full">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    dark: {
      default: true
    }
  }
}
</script>

<style scoped>

</style>
