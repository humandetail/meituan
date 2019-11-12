<template>
  <section class="title-bd border-bottom">
    <h1>
      <span class="icon iconfont" :class="icon"></span>
      <span class="title-text">{{ title }}</span>
    </h1>
  </section>
</template>

<script>
export default {
  name: 'DetailTitle',
  props: {
    title: String,
    icon: String
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';
.title-bd {
  height: .44rem;
  padding: 0 .15rem;
  background-color: #fff;
  line-height: .44rem;
  color: $defaultGreen;
  font-size: .18rem;

  .title-text {
    margin-left: .1rem;
    font-size: .16rem;
  }
}
</style>