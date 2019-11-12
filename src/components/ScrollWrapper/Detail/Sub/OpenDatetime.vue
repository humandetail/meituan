<template>
  <div class="open-datetime-bd border-bottom">
    <span class="icon iconfont icon-datetime"></span>
    <span class="datetime">{{ openDatetime }}</span>
  </div>
</template>

<script>
export default {
  name: 'DetailOpenDatetime',
  props: {
    openDatetime: {
      type: String,
      default () {
        return '加载中...';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.open-datetime-bd {
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

  .datetime {
    margin-left: .1rem;
    font-size: .14rem;
    line-height: .18rem;
  }
}
</style>