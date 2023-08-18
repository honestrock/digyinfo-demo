<template>
  <div class="rounded-lg border-3 border-gray-800 shadow-md p-3">
    <div class="flex items-center justify-between">
      <div>
        <label class="text-black font-semibold">{{title}}</label>
        <slot name="content"></slot>
      </div>
      <div>
        <img v-if="image" :alt="title" width="80" height="80" class="max-h-[80px] rounded" :src="image"/>
        <img class="rounded" alt="Not Found" v-else height="70" width="80" src="@/assets/images/not-found.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasicImageCard",
  props: ['title', 'image']
}
</script>

<style scoped>

</style>
