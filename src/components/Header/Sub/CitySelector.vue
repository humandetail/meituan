<template>
  <div class="city-selector">
    <router-link to="city" class="lk">
      <span class="city-name">{{ cityName }}</span>
      <span class="icon iconfont icon-header-arrow"></span>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'CitySelector',
  computed: {
    ...mapState(['cityName'])
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
@import '~styles/variables.scss';

.city-selector {
  width: .6rem;
  height: $headerHeight;
  .lk {
    @include vh-center;
    width: 100%;
    height: $headerHeight;

    .city-name {
      font-weight: bold;
      font-size: .16rem;
    }

    .icon {
      margin-left: .03rem;
      font-size: .08rem;
    }
  }
}
</style>