<template>
  <section class="no-data-tip" v-show="noDataTipShow">
    <span class="text">- 没有搜索到相关结果 -</span>
  </section>
</template>

<script>
export default {
  name: 'NoDataTip',
  props: {
    noDataTipShow: {
      type: Boolean,
      default () {
        return true;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.no-data-tip {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3rem;
  font-size: .16rem;
  color: #999;
}
</style>