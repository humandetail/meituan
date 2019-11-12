<template>
  <section class="error-bd" v-if="errorShow">
    <span class="icon iconfont icon-error"></span>
    <p class="error-text">网络走丢了~</p>
  </section>
</template>

<script>
export default {
  name: 'Error',
  props: {
    errorShow: {
      type: Boolean,
      default () {
        return false;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';

.error-bd {
	@include vh-center;
	flex-direction: column;
	height: 3rem;
	color: #999;

	.iconfont {
		font-size: .5rem;
	}

	.error-text {
		font-size: .14rem;
		margin-top: .1rem;
	}
}
</style>