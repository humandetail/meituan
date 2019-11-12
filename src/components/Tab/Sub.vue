<template>
  <div
    class="tab-item"
    :class="{current: isCurrent}"
    @click="handleClick(itemInfo)"
  >
    <span>{{ itemInfo.cityName }}</span>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'TabItem',
  props: {
    itemInfo: Object
  },
  computed: {
    ...mapState(['cityId']),
    isCurrent () {
      return this.itemInfo.cityId === this.cityId
    }
  },
  methods: {
    ...mapMutations(['selectCity']),

    handleClick (cityInfo) {
      this.selectCity(cityInfo);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
@import '~styles/variables.scss';

.tab-item {
  @include vh-center;
  width: 20%;
  height: 100%;
  font-size: .16rem;
  border-bottom: 2px solid transparent;
  box-sizing: border-box;

  &.current {
    color: $defaultGreen;
    border-color: $defaultGreen;
  }
}
</style>