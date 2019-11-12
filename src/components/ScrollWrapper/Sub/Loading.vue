<template>
  <section class="loading" v-show="loadingShow">
    <img class="loading-img" src="~@/assets/images/loading.gif" alt="loading...">
  </section>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    loadingShow: {
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

.loading {
	@include vh-center;
	height: 3rem;

	.loading-img {
		width: .8rem;
		height: .8rem;
	}
}	
</style>