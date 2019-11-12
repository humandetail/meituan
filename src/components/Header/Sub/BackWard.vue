<template>
  <div class="back-ward" @click="handleClick">
    <span class="icon iconfont icon-header-arrow-left"></span>
  </div>
</template>

<script>
export default {
  name: 'BackWard',
  methods: {
    handleClick () {
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
@import '~styles/variables.scss';

.back-ward {
  @include vh-center;
  position: absolute;
  left: 0;
  top: 0;
  width: $headerHeight;
  height: $headerHeight;
  .icon {
    font-size: .2rem;
  }
}
</style>