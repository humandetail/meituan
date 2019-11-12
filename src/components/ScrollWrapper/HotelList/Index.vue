<template>
  <div class="list-wrapper">
    <hotel-item
      v-for="item of hotelDatas"
      :key="item.id"
      :itemInfo="item"
    >
    </hotel-item>
  </div>
</template>

<script>
import HotelItem from './Sub';
export default {
  name: 'HotelList',
  components: {
    HotelItem
  },
  props: {
    hotelDatas: Array
  }
}
</script>

<style lang="scss" scoped>
</style>