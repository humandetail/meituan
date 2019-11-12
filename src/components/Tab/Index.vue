<template>
  <nav class="tab border-bottom">
    <tab-item
      v-for="item of cities"
      :key="item.cityId"
      :itemInfo="item"
    ></tab-item>
  </nav>
</template>

<script>
import cityDatas from 'data/cities';

import TabItem from './Sub';

export default {
  name: 'Tab',
  components: {
    TabItem
  },
  data () {
    return {
      cities: cityDatas
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
.tab {
  @include flex-row;
  height: .44rem;
  background-color: #fff;
}
</style>