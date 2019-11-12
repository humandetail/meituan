<template>
  <section class="detail-wrapper">
    <detail-name
      :name="name"
    ></detail-name>

    <detail-stars
      :star="star"
      :score="score"
    ></detail-stars>

    <detail-address
      :address="address"
    ></detail-address>

    <detail-price
      :price="price"
    ></detail-price>

    <detail-open-datetime
      :openDatetime="openDatetime"
    ></detail-open-datetime>

    <detail-recom
      :recom="recom"
    ></detail-recom>

    <detail-comment-keyword
      :commentKeyword="commentKeyword"
    ></detail-comment-keyword>
  </section>
</template>

<script>
import DetailName from './Sub/Name';
import DetailStars from './Sub/Stars';
import DetailAddress from './Sub/Address';
import DetailPrice from './Sub/Price';
import DetailOpenDatetime from './Sub/OpenDatetime';
import DetailRecom from './Sub/Recom';
import DetailCommentKeyword from './Sub/CommentKeyword';

export default {
  name: 'DetailFood',
  components: {
    DetailName,
    DetailStars,
    DetailAddress,
    DetailPrice,
    DetailOpenDatetime,
    DetailRecom,
    DetailCommentKeyword
  },
  props: {
    name: String,
    star: Number,
    score: String,
    address: String,
    price: Number,
    openDatetime: String,
    recom: String,
    commentKeyword: Array
  }
}
</script>

<style lang="scss" scoped></style>