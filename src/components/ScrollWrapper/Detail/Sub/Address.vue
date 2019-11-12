<template>
  <div class="address-bd border-bottom">
    <span class="icon iconfont icon-positioning"></span>
    <span class="address">{{ address }}</span>
  </div>
</template>

<script>
export default {
  name: 'DetailAddress',
  props: {
    address: {
      type: String,
      default () {
        return '地址加载中...'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.address-bd {
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

  .address {
    margin-left: .1rem;
    font-size: .14rem;
    line-height: .18rem;
  }
}
</style>