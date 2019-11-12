<template>
  <section class="home-title border-bottom">
    <p class="title">{{ title }}</p>
  </section>
</template>

<script>
export default {
  name: 'HomeTitle',
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';

.home-title {
  display: flex;
  align-items: center;
  height: $headerHeight;
  line-height: $headerHeight;
  margin-top: .1rem;
  padding-left: .15rem;
  background-color: #fff;

  .title {
    font-size: .18rem;
    color: $defaultBlack;
  }
}
</style>