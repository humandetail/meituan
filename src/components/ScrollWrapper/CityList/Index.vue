<template>
  <section class="list-wrapper">
    <city-item
      v-for="item of cities"
      :key="item.cityId"
      :cityInfo="item"
    >
    </city-item>
  </section>
</template>

<script>
import cityDatas from 'data/cities';

import cityItem from './Sub';

export default {
  name: 'CityList',
  data () {
    return {
      cities: cityDatas
    }
  },
  components: {
    cityItem
  }
}
</script>

<style lang="scss" scoped>

</style>