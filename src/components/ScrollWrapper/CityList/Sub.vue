<template>
  <div class="city-item border-bottom" @click="handleClick(cityInfo)">
    <span class="city">{{ cityInfo.cityName }}</span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'CityItem',
  props: {
    cityInfo: Object
  },
  methods: {
    ...mapMutations(['selectCity']),
    handleClick (cityInfo) {
      this.selectCity(cityInfo);
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
@import '~styles/variables.scss';
.city-item {
  @include flex-row;
  height: $headerHeight;
  align-items: center;
  padding-left: .15rem;
  background-color: #fff;
  font-size: .16rem;
}
</style>