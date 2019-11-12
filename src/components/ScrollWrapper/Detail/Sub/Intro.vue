<template>
  <div class="intro-bd">
    <detail-title 
      title="详细介绍"
      icon="icon-intro"
    ></detail-title>

    <div class="intro-content">{{ intro }}</div>
  </div>
</template>

<script>
import DetailTitle from './Title';
export default {
  name: 'DetailIntro',
  components: {
    DetailTitle
  },
  props: {
    intro: {
      type: String,
      default () {
        return '玩命加载中...';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.intro-bd {
  margin-top: .1rem;

  .intro-content {
    padding: .1rem .15rem;
    background-color: #fff;
    line-height: .18rem;
    font-size: .14rem;
    text-indent: 2em;
  }
}
</style>