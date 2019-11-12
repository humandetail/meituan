<template>
  <div class="price-bd border-bottom">
    <span class="icon iconfont icon-price"></span>
    <span class="price">
      ￥{{ price }}元起
    </span>
  </div>
</template>

<script>
export default {
  name: 'DetialPrice',
  props: {
    price: {
      type: Number,
      default () {
        return 0;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';
.price-bd {
  display: flex;
  align-items: center;
  height: .44rem;
  padding-left: .15rem;
  background-color: #fff;
  box-sizing: border-box;

  .icon {
    font-size: .18rem;
    color: #999;
  }

  .price {
    margin-left: .1rem;
    font-size: .16rem;
    color: $defaultOrange;
  }
}
</style>