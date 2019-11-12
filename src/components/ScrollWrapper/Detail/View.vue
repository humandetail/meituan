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

    <detail-tip
      :tip="tip"
    ></detail-tip>

    <detail-intro
      :intro="intro"
    ></detail-intro>

    <detail-ticket-info
      :ticketInfo="ticketInfo"
    ></detail-ticket-info>
  </section>
</template>

<script>
import DetailName from './Sub/Name';
import DetailStars from './Sub/Stars';
import DetailAddress from './Sub/Address';
import DetailPrice from './Sub/Price';
import DetailOpenDatetime from './Sub/OpenDatetime';
import DetailTip from './Sub/Tip';
import DetailIntro from './Sub/Intro';
import DetailTicketInfo from './Sub/TicketInfo'

export default {
  name: 'DetailView',
  components: {
    DetailName,
    DetailStars,
    DetailAddress,
    DetailPrice,
    DetailOpenDatetime,
    DetailTip,
    DetailIntro,
    DetailTicketInfo
  },
  props: {
    name: String,
    star: Number,
    score: String,
    address: String,
    price: Number,
    openDatetime: String,
    tip: String,
    intro: String,
    ticketInfo: String
  }
}
</script>

<style lang="scss" scoped></style>