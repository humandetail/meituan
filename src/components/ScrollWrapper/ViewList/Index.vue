<template>
  <section class="list-wrapper border-bottom">
    <view-item
      v-for="item of viewDatas"
      :key="item.id"
      :itemInfo="item"
    >
    </view-item>
  </section>
</template>

<script>
import ViewItem from './Sub';

export default {
  name: 'ViewList',
  components: {
    ViewItem
  },
  props: {
    viewDatas: Array
  }
}
</script>

<style lang="scss" scoped>
.list-wrapper {
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
}
</style>