<template>
  <section class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <template v-if="!errorShow">
        <detail-swiper :picDatas="detailData.pics"></detail-swiper>

        <detail-view
          v-if="field === 'view'"
          :name="detailData.name"
          :star="Number(detailData.star)"
          :score="detailData.score"
          :address="detailData.address"
          :price="Number(detailData.default_price)"
          :openDatetime="detailData.open_datetime"
          :tip="detailData.tip"
          :intro="detailData.intro"
          :ticketInfo="detailData.ticket_info"
        ></detail-view>

        
        <detail-food
          v-if="field === 'food'"
          :name="detailData.name"
          :star="Number(detailData.star)"
          :score="detailData.score"
          :address="detailData.address"
          :price="Number(detailData.default_price)"
          :openDatetime="detailData.open_datetime"
          :recom="detailData.recom"
          :commentKeyword="detailData.comment_keyword"
        ></detail-food>

        <detail-hotel
          v-if="field === 'hotel'"
          :name="detailData.name"
          :star="Number(detailData.star)"
          :score="detailData.score"
          :address="detailData.address"
          :price="Number(detailData.default_price)"
          :service="detailData.service"
        ></detail-hotel>

        <detail-massage
          v-if="field === 'massage'"
          :name="detailData.name"
          :star="Number(detailData.star)"
          :score="detailData.score"
          :address="detailData.address"
          :price="Number(detailData.default_price)"
          :openDatetime="detailData.open_datetime"
          :commentKeyword="detailData.comment_keyword"
        ></detail-massage>

        <detail-ktv
          v-if="field === 'ktv'"
          :name="detailData.name"
          :star="Number(detailData.star)"
          :score="detailData.score"
          :address="detailData.address"
          :price="Number(detailData.default_price)"
          :service="detailData.service"
        ></detail-ktv>
      </template>
      <error :errorShow="errorShow"></error>
    </div>
  </section>
</template>

<script>
import BetterScroll from 'better-scroll';
import { DetailModel } from 'models/Detail';
import tools from 'utils/tools';

import DetailSwiper from './Sub/Swiper';
import Error from './Sub/Error';
import DetailView from './Detail/View';
import DetailFood from './Detail/Food';
import DetailHotel from './Detail/Hotel';
import DetailMassage from './Detail/Massage';
import DetailKtv from './Detail/Ktv';

export default {
  name: 'DetailScrollWrapper',
  components: {
    DetailSwiper,
    Error,
    DetailView,
    DetailFood,
    DetailHotel,
    DetailMassage,
    DetailKtv
  },
  data () {
    return {
      field: '',
      id: 0,
      detailData: {},
      errorShow: false
    }
  },
  methods: {
    getDetail (field, id) {
      const detailModel = new DetailModel();

      detailModel.getDetail(field, id).then((res) => {
        if (res && res.status === 0) {
          this.errorShow = false;

          let data = res.data;

          data.pics && (data.pics = tools.json2Arr(data.pics));
          data.comment_keyword &&(data.comment_keyword = tools.str2Arr(data.comment_keyword));
          data.recom && (data.recom = tools.replace2Space(data.recom));
          data.service && (data.service = tools.json2Arr(data.service));

          this.detailData = data;
        } else {
          this.errorShow = true;
          console.log(res.error);
        }
      });
    }
  },

  mounted () {
    this.scroll = new BetterScroll(this.$refs.wrapper);
    this.field = this.$route.query.field;
    this.id = this.$route.query.id;
    this.getDetail(this.field, this.id);
  },

  activated () {
    const field = this.$route.query.field;
    const id = this.$route.query.id;

    if (this.id !== id) {
      this.field = field;
      this.id = id;
      this.getDetail(field, id);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>