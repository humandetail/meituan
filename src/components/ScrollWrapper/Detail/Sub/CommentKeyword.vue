<template>
  <div class="comment-bd">
    <detail-title 
      title="评论关键词"
      icon="icon-haoping"
    ></detail-title>

    <div class="comment-keyword">
      <span
        class="keyword"
        v-for="(item, index) of commentKeyword"
        :key="index"
      >{{ item }}</span>
    </div>
  </div>
</template>

<script>
import DetailTitle from './Title';
export default {
  name: 'DetailCommentKeyword',
  components: {
    DetailTitle
  },
  props: {
    commentKeyword: {
      type: Array,
      default () {
        return [];
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
@import '~styles/variables.scss';
.comment-bd {
  margin-top: .1rem;

  .comment-keyword {
    display: flex;
    flex-wrap: wrap;
    padding: .1rem .15rem;
    background-color: #fff;
    font-size: .14rem;

    .keyword {
      @include vh-center;
      height: .25rem;
      margin: 0 .05rem .05rem 0;
      padding: 0 .05rem;
      border: 1px solid $defaultGreen;
      border-radius: .03rem;
      color: $defaultGreen;
    }
  }
}
</style>