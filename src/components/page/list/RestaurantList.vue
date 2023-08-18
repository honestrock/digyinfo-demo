<template>
  <div class="my-4" v-for="(restaurant, key) in filteredRestaurants" :key="key">
    <RestaurantItem :restaurant="restaurant"></RestaurantItem>
  </div>

</template>

<script>
import RestaurantItem from "@/components/page/item/RestaurantItem";

export default {
  name: "RestaurantList",
  components: {RestaurantItem},
  props: {
    restaurants: {
      default: []
    },
    search: {
      default: '',
    }
  },
  computed: {
    filteredRestaurants() {
      return this.restaurants.filter(r => r.rest?.name?.toLocaleLowerCase('tr').includes(this.search.toLocaleLowerCase('tr')));
    }
  },
}
</script>

<style scoped>

</style>
