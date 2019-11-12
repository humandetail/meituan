<template>
  <div class="list-wrapper">
    <food-item
      v-for="item of foodDatas"
      :key="item.id"
      :itemInfo="item"
    >
    </food-item>
  </div>
</template>

<script>
import FoodItem from './Sub';

export default {
  name: 'FoodList',
  components: {
    FoodItem
  },
  props: {
    foodDatas: Array
  }
}
</script>

<style lang="scss" scoped>
</style>