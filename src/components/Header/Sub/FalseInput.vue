<template>
  <div class="false-input">
    <router-link to="search" class="lk">
      <p class="placeholder">
        <span class="icon iconfont icon-header-search"></span>
        <span class="placeholder-text">{{ placeholder }}</span>
      </p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'FalseInput',
  data () {
    return {
      placeholder: '美食 / 景点 / 酒店 / 按摩 / KTV'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
.false-input {
  flex: 1;
  padding: .06rem .1rem .06rem 0;
  box-sizing: border-box;

  .lk {
    @include vh-center;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: .05rem;

    .placeholder {
      font-size: .14rem;
      color: #999;

      .icon {
        margin-right: .05rem;
        font-size: .18rem;
        vertical-align: -.02rem;
      }
    }
  }
}
</style>