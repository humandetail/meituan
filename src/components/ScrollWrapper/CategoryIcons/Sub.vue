<template>
  <div class="icon-item">
    <div class="icon" @click="handleClick(iconInfo.field)" :style="{backgroundColor: iconInfo.bgColor}">
      <span class="iconfont" :class="iconInfo.icon"></span>
    </div>
    <p class="icon-text" @click="handleClick(iconInfo.field)">{{ iconInfo.iconText }}</p>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: 'CategoryIconItem',
  props: {
    iconInfo: Object
  },
  methods: {
    ...mapMutations(['selectField']),
    handleClick (field) {
      this.selectField(field);
      this.$router.push('/list');
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
.icon-item {
  @include flex-column;
  @include vh-center;
  width: 20%;
  padding: .2rem 0;

  .icon {
    @include vh-center;
    width: .4rem;
    height: .4rem;
    border-radius: 50%;

    .iconfont {
      font-size: .26rem;
      color: #fff;
    }
  }

  .icon-text {
    margin-top: .1rem;
    font-size: .14rem;
    text-align: center;
  }
}
</style>