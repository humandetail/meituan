<template>
  <section class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <template v-if="!errorShow">
        <no-data-tip :noDataTipShow="noDataTipShow"></no-data-tip>

        <template v-if="showDatas.view">
          <home-title
            title="景点结果："
          ></home-title>
          <view-list
            :viewDatas="searchDatas.viewDatas"
          ></view-list>
        </template>

        <template v-if="showDatas.food">
          <home-title
            title="美食结果："
          ></home-title>
          <food-list
            :foodDatas="searchDatas.foodDatas"
          ></food-list>
        </template>

        <template v-if="showDatas.hotel">
          <home-title
            title="酒店结果："
          ></home-title>
          <hotel-list
            :hotelDatas="searchDatas.hotelDatas"
          ></hotel-list>
        </template>

        <template v-if="showDatas.massage">
          <home-title
            title="按摩结果："
          ></home-title>
          <massage-list
            :massageDatas="searchDatas.massageDatas"
          ></massage-list>
        </template>

        <template v-if="showDatas.ktv">
          <home-title
            title="KTV结果："
          ></home-title>
          <ktv-list
            :ktvDatas="searchDatas.ktvDatas"
          ></ktv-list>
        </template>
      </template>
      <error :errorShow="errorShow"></error>
    </div>
  </section>
</template>

<script>
import BetterScroll from 'better-scroll';

import HomeTitle from './Sub/HomeTitle';
import ViewList from './ViewList/Index';
import FoodList from './FoodList/Index';
import HotelList from './HotelList/Index';
import MassageList from './MassageList/Index';
import KtvList from './KtvList/Index';
import Error from './Sub/Error';
import NoDataTip from './Sub/NoDataTip';
export default {
  name: 'SearchScrollWrapper',
  components: {
    HomeTitle,
    ViewList,
    FoodList,
    HotelList,
    MassageList,
    KtvList,
    Error,
    NoDataTip
  },
  props: {
    searchDatas: Object
  },
  computed: {
    noDataTipShow () {
      const data = this.searchDatas;
      return (
        (!data.viewDatas || data.viewDatas.length <= 0) &&
        (!data.foodDatas || data.foodDatas.length <= 0) &&
        (!data.hotelDatas || data.hotelDatas.length <= 0) &&
        (!data.massageDatas || data.massageDatas.length <= 0) &&
        (!data.ktvDatas || data.ktvDatas.length <= 0)
      );
    },
    errorShow () {
      return this.searchDatas.status === -1;
    },
    showDatas () {
      const data = this.searchDatas;
      const show = {
        view: data.viewDatas && data.viewDatas.length > 0,
        food: data.foodDatas && data.foodDatas.length > 0,
        hotel: data.hotelDatas && data.hotelDatas.length > 0,
        massage: data.massageDatas && data.massageDatas.length > 0,
        ktv: data.ktvDatas && data.ktvDatas.length > 0
      };
      return show;
    }
  },
  mounted () {
    this.scroll = new BetterScroll(this.$refs.wrapper);
  }
}
</script>

<style lang="scss" scoped>

</style>