<template>
  <div class="name-bd border-bottom">
    <span class="icon iconfont icon-name"></span>
    <span class="name-text">{{ name }}</span>
  </div>
</template>

<script>
export default {
  name: 'DetailName',
  props: {
    name: {
      type: String,
      default () {
        return '名称加载中...'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.name-bd {
  display: flex;
  height: .44rem;
  padding: .03rem .15rem 0;
  background-color: #fff;
  line-height: .39rem;
  box-sizing: border-box;

  .icon {
    font-size: .18rem;
    color: #999;
  }

  .name-text {
    margin-left: .1rem;
    font-size: .14rem;
  }
}
</style>