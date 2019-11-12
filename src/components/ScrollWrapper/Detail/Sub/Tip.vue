<template>
  <div class="tip-bd border-bottom">
    <span class="icon iconfont icon-tip"></span>
    <span class="tip">{{ tip }}</span>
  </div>
</template>

<script>
export default {
  name: 'DetailTip',
  props: {
    tip: {
      type: String,
      default () {
        return '加载中...';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tip-bd {
  display: flex;
  align-items: center;
  min-height: .44rem;
  padding: .1rem .15rem;
  background-color: #fff;
  box-sizing: border-box;

  .icon {
    font-size: .18rem;
    color: #999;
  }

  .tip {
    margin-left: .1rem;
    font-size: .14rem;
    line-height: .18rem;
  }
}
</style>