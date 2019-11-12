<template>
  <section class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <current-city></current-city>
      <city-list></city-list>
    </div>
  </section>
</template>

<script>
import BetterScroll from 'better-scroll';

import CurrentCity from './CityList/CurrentCity';
import CityList from './CityList/Index'

export default {
  name: 'CityScrollWrapper',
  components: {
    CurrentCity,
    CityList
  },

  mounted () {
    this.scroll = new BetterScroll(this.$refs.wrapper);
  }
}
</script>

<style lang="scss" scoped>

</style>