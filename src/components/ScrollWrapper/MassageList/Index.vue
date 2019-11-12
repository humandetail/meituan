<template>
  <div class="list-wrapper">
    <massage-item
      v-for="item of massageDatas"
      :key="item.id"
      :itemInfo="item"
    >
    </massage-item>
  </div>
</template>

<script>
import MassageItem from './Sub';

export default {
  name: 'MassageList',
  components: {
    MassageItem
  },
  props: {
    massageDatas: Array
  }
}
</script>

<style lang="scss" scoped>
</style>