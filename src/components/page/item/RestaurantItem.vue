<template>
  <basic-image-card :title="restaurantName" :image="logo">
    <template v-if="hasWorkingTime" v-slot:content>
      <div class="flex items-center">
        <font-awesome-icon class="mx-1" icon="clock"/>
        <div class="py-2 text-sm italic" v-for="(wt, index) in restaurantWorkingTimes" :key="index">
          {{ convertTime(wt.startTime) }} - {{ convertTime(wt.endTime) }}
        </div>
      </div>
    </template>
  </basic-image-card>
</template>

<script>
import BasicImageCard from "@/components/card/BasicImageCard";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  name: "RestaurantItem",
  components: {BasicImageCard, FontAwesomeIcon},
  props: ['restaurant'],
  data() {
    return {
      imagePath: process.env.VUE_APP_IMAGE_PATH,
    }
  },
  computed: {
    hasWorkingTime() {
      return this.restaurantWorkingTimes.length > 0
    },
    restaurantWorkingTimes() {
      return this.restaurant?.rest?.workingTimeRules;
    },
    restaurantName() {
      return this.restaurant?.rest?.name;
    },
    logo() {
      const url = this.restaurant?.rest?.logo?.imagePath
      return url ? this.imagePath + url : false;
    },
  },
  methods: {
    convertTime(time) {
      const t = time.split(':');
      return t.length > 1 ? t[0] + ':' + t[1] : '';
    }
  }

}
</script>

<style scoped>

</style>
