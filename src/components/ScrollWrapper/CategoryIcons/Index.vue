<template>
  <nav class="icons-wrapper border-bottom">
    <category-icon-item
      v-for="item of itemList"
      :key="item.id"
      :iconInfo="item"
    >
    </category-icon-item>
  </nav>
</template>

<script>
import fieldDatas from 'data/fields';

import CategoryIconItem from './Sub';

export default {
  name: 'CategoryIcons',
  components: {
    CategoryIconItem
  },
  data () {
    return {
      itemList: fieldDatas
    }
  }
}
</script>

<style lang="scss" scoped>
.icons-wrapper {
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
}
</style>