<template>
  <div class="list-wrapper">
    <ktv-item
      v-for="item of ktvDatas"
      :key="item.id"
      :itemInfo="item"
    >
    </ktv-item>
  </div>
</template>

<script>
import KtvItem from './Sub';

export default {
  name: 'KtvList',
  components: {
    KtvItem
  },
  props: {
    ktvDatas: Array
  }
}
</script>

<style lang="scss" scoped>
</style>