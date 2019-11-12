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

    <detail-comment-keyword
      :commentKeyword="commentKeyword"
    ></detail-comment-keyword>

    <detail-service
      :service="service"
    ></detail-service>
  </section>
</template>

<script>
import DetailName from './Sub/Name';
import DetailStars from './Sub/Stars';
import DetailAddress from './Sub/Address';
import DetailPrice from './Sub/Price';
import DetailOpenDatetime from './Sub/OpenDatetime';
import DetailCommentKeyword from './Sub/CommentKeyword';
import DetailService from './Sub/Service';

export default {
  name: 'DetailMassage',
  components: {
    DetailName,
    DetailStars,
    DetailAddress,
    DetailPrice,
    DetailOpenDatetime,
    DetailCommentKeyword,
    
    DetailService
  },
  props: {
    name: String,
    star: Number,
    score: String,
    address: String,
    price: Number,
    openDatetime: String,
    commentKeyword: Array,
    service: Object
  }
}
</script>

<style lang="scss" scoped></style>