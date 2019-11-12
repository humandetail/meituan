<template>
  <div class="stars-bd border-bottom">
    <span class="icon iconfont icon-smile"></span>
    <stars :starNum="star"></stars>
    <span class="score">{{ score }}分</span>
  </div>
</template>

<script>
import Stars from 'components/ScrollWrapper/Sub/Stars';
export default {
  name: 'DetailStars',
  components: {
    Stars
  },
  props: {
    star: {
      type: Number,
      default () {
        return 0
      }
    },
    score: {
      type: String,
      default () {
        return '0.0'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';
.stars-bd {
  display: flex;
  height: .44rem;
  padding: .03rem .15rem 0;
  background-color: #fff;
  box-sizing: border-box;

  .icon {
    margin: .08rem .1rem 0 0;
    font-size: .18rem;
    color: #999;
  }

  .score {
    margin: .1rem 0 0 .15rem;
    font-size: .16rem;
    color: $defaultOrange;
  }
}
</style>