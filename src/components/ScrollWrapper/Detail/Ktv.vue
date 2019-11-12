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
import DetailService from './Sub/Service';

export default {
  name: 'DetailKtv',
  components: {
    DetailName,
    DetailStars,
    DetailAddress,
    DetailPrice,
    DetailService
  },
  props: {
    name: String,
    star: Number,
    score: String,
    address: String,
    price: Number,
    service: Object
  }
}
</script>

<style lang="scss" scoped></style>