<template>
  <div class="recom-bd">
    <detail-title 
      title="推荐菜品"
      icon="icon-recom"
    ></detail-title>

    <div class="recom-content">{{ recom }}</div>
  </div>
</template>

<script>
import DetailTitle from './Title';
export default {
  name: 'DetailRecom',
  components: {
    DetailTitle
  },
  props: {
    recom: {
      type: String,
      default () {
        return '玩命加载中...';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.recom-bd {
  margin-top: .1rem;

  .recom-content {
    padding: .1rem .15rem;
    background-color: #fff;
    line-height: .18rem;
    font-size: .14rem;
    text-indent: 2em;
  }
}
</style>