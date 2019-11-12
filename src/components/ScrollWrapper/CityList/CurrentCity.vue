<template>
  <div class="current-city border-bottom">
    <span>当前城市：</span>
    <router-link :to="{name: path}">
      <span class="icon iconfont icon-positioning"></span>
      <span class="city">{{ cityName }}</span>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'CurrentCity',
  data () {
    return {
      path: 'Home'
    }
  },
  computed: {
    ...mapState(['cityName'])
  },
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
@import '~styles/variables.scss';
.current-city {
  @include flex-row;
  align-items: center;
  height: $headerHeight;
  padding-left: .15rem;
  background-color: #fff;
  font-size: .16rem;

  .icon {
    vertical-align: .005rem;
    color: $defaultBgColor;
  }

  .city {
    margin-left: .03rem;
    line-height: 1rem;
  }
}
</style>